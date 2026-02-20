"use client"
import { AdminPanel } from '@/components/panels/admin-panel'
import { useAuthStore } from '@/lib/authStore'



export default function AdminDashboard() {
  const{user,token }=useAuthStore()
  console.log(user,token)
  return <AdminPanel />
}
    