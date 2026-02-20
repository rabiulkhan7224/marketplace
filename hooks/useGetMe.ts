'use client'

import useSWR from 'swr'
import { useAuthStore } from '@/lib/authStore'
import { useApi } from '@/lib/api' 
// // {
//     "status": 200,
//     "success": true,
//     "message": "User profile retrieved successfully",
//     "data": {
//         "id": "1cd89c66-81c2-43d8-aad4-824ee2d69382",
//         "name": "mohin",
//         "email": "mohin@gmail.com",
//         "role": "SOLVER",
//         "createdAt": "2026-02-20T16:38:45.787Z"
//     }
// }
interface Response {
    status: number
    success: boolean
    message: string
    data: {
        id: string
        name: string
        email: string
        role: 'BUYER' | 'SOLVER' | 'ADMIN'
        createdAt: string
    }
}

export function useGetMe() {
  const { token, isAuthenticated, logout } = useAuthStore()

  const {
    data: user,
    error,
    isLoading,
    mutate: refreshUser,
  } = useApi<Response>('/auth/me', {
    // Only fetch if authenticated and token exists
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 5 * 60 * 1000, // refresh every 5 minutes
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // If 401 Unauthorized → logout and stop retrying
      if (error?.status === 401) {
        logout()
        return
      }
      // Retry up to 3 times for other errors
      if (retryCount >= 3) return
      setTimeout(() => revalidate({ retryCount }), 5000)
    },
  })

  // Derived states
  const isAuthenticatedAndLoaded = isAuthenticated && !!user && !isLoading
  const isUnauthenticated = !isAuthenticated || error?.status === 401
  const hasAdminAccess = user?.data.role === 'ADMIN'
  const hasBuyerAccess = user?.data.role === 'BUYER'
  const hasSolverAccess = user?.data.role === 'SOLVER'

  return {
    user,
    isLoading,
    error,
    isAuthenticated: isAuthenticatedAndLoaded,
    isUnauthenticated,
    refreshUser, // call this to manually refetch
    logout,
    // Role shortcuts
    isAdmin: hasAdminAccess,
    isBuyer: hasBuyerAccess,
    isSolver: hasSolverAccess,
  }
}