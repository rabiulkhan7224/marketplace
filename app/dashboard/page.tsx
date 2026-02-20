'use client'
import { redirect } from 'next/navigation'

import { UserRole } from '@/lib/types'
import { useAuthStore } from '@/lib/authStore'

export default function DashboardPage() {

  const {user}=useAuthStore()
  // Route to role-specific dashboard
  const routes: Record<UserRole, string> = {
    [UserRole.ADMIN]: '/dashboard/admin',
    [UserRole.BUYER]: '/dashboard/buyer',
    [UserRole.SOLVER]: '/dashboard/solver'
  }

  redirect(routes[user?.role as UserRole] || '/dashboard')
}
