
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/authStore';

export default function Dashboard() {
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // Role-based redirect or render
    if (user?.role === 'BUYER') {
      router.push('/dashboard/buyer');
    } else if (user?.role === 'SOLVER') {
      router.push('/dashboard/solver');
    } else if (user?.role === 'ADMIN') {
      router.push('/dashboard/admin');
    }
  }, [isAuthenticated, user, router]);

  return <div>Loading dashboard...</div>;
}