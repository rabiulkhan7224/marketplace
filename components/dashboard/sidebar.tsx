'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, LayoutGrid, Users, Briefcase, BarChart3, Settings, MessageSquare, User, CheckSquare, DollarSign } from 'lucide-react'
import { sidebarVariants } from '@/lib/animations'
import { UserRole } from '@/lib/types'
import { roleColorClasses } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface SidebarProps {
  role: UserRole
}

const iconMap = {
  LayoutGrid,
  Users,
  Briefcase,
  BarChart3,
  Settings,
  MessageSquare,
  User,
  CheckSquare,
  DollarSign
}

const menuConfig = {
  [UserRole.ADMIN]: [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutGrid', href: '/dashboard' },
    { id: 'all-projects', label: 'All Projects', icon: 'Briefcase', href: '/dashboard/projects' },
    { id: 'users', label: 'Users', icon: 'Users', href: '/dashboard/admin' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3', href: '/dashboard/admin' },
    { id: 'settings', label: 'Settings', icon: 'Settings', href: '/dashboard/admin' }
  ],
  [UserRole.BUYER]: [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutGrid', href: '/dashboard' },
    { id: 'all-projects', label: 'All Projects', icon: 'Briefcase', href: '/dashboard/projects' },
    { id: 'my-projects', label: 'My Projects', icon: 'Briefcase', href: '/dashboard/buyer' },
    { id: 'solvers', label: 'Solver Requests', icon: 'Users', href: '/dashboard/buyer' },
    { id: 'messages', label: 'Messages', icon: 'MessageSquare', href: '/dashboard/buyer' },
    { id: 'profile', label: 'Profile', icon: 'User', href: '/dashboard/buyer' }
  ],
  [UserRole.SOLVER]: [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutGrid', href: '/dashboard' },
    { id: 'all-projects', label: 'All Projects', icon: 'Briefcase', href: '/dashboard/projects' },
    { id: 'available-projects', label: 'Available Projects', icon: 'Briefcase', href: '/dashboard/solver' },
    { id: 'tasks', label: 'My Tasks', icon: 'CheckSquare', href: '/dashboard/solver' },
    { id: 'earnings', label: 'Earnings', icon: 'DollarSign', href: '/dashboard/solver' },
    { id: 'profile', label: 'Profile', icon: 'User', href: '/dashboard/solver' }
  ]
}

export function Sidebar({ role }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()
  const menuItems = menuConfig[role]
  const colors = roleColorClasses[role]

  return (
    <motion.aside
      variants={sidebarVariants}
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      className={cn(
        'border-r border-border bg-background flex flex-col h-screen sticky top-0 transition-all',
        isCollapsed ? 'w-20' : 'w-60'
      )}
    >
      <div className={cn(
        'p-4 flex items-center justify-between border-b border-border',
        isCollapsed && 'justify-center'
      )}>
        {!isCollapsed && (
          <span className="font-bold text-foreground">Marketplace</span>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto"
        >
          <ChevronLeft className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap]
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          
          return (
            <Link key={item.id} href={item.href}>
              <motion.button
                whileHover={{ x: 4 }}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm',
                  isActive
                    ? cn(colors.bg, colors.text, 'font-medium')
                    : 'text-muted-foreground hover:bg-secondary'
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </motion.button>
            </Link>
          )
        })}
      </nav>

      <div className={cn(
        'p-4 border-t border-border',
        isCollapsed && 'flex justify-center'
      )}>
        <Button
          variant="ghost"
          size="sm"
          className={cn(isCollapsed && 'w-10 h-10 p-0')}
        >
          {isCollapsed ? <User className="w-4 h-4" /> : 'Sign Out'}
        </Button>
      </div>
    </motion.aside>
  )
}
