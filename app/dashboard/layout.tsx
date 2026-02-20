'use client'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Topbar } from '@/components/dashboard/topbar'
import { useGetMe } from '@/hooks/useGetMe'
import { useAuthStore } from '@/lib/authStore'
import { mockUser } from '@/lib/constants'
import { UserRole } from '@/lib/types'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const {user}=useGetMe()
  console.log(user?.data.role)
  // const {user}=useAuthStore()
  if (!user || !user?.data.role) {
    // Optionally, render a loading or error state
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <Sidebar role={user?.data.role as UserRole} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar user={user?.data} />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
