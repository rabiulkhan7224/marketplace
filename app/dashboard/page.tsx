import { redirect } from 'next/navigation'
import { mockUser } from '@/lib/constants'
import { UserRole } from '@/lib/types'

export default function DashboardPage() {
  // Route to role-specific dashboard
  const routes: Record<UserRole, string> = {
    [UserRole.ADMIN]: '/dashboard/admin',
    [UserRole.BUYER]: '/dashboard/buyer',
    [UserRole.SOLVER]: '/dashboard/solver'
  }

  redirect(routes[mockUser.role])
}
