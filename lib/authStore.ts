import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'BUYER' | 'SOLVER' | 'ADMIN';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: (token: string) => {
        const decoded = jwtDecode<{ id: string; role: string }>(token);
        set({
          token,
          user: {
            id: decoded.id,
            name: '', // fetch full user if needed later
            email: '',
            role: decoded.role as User['role'],
          },
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({ token: null, user: null, isAuthenticated: false });
        // Optional: clear cookies if using httpOnly
      },
    }),
    {
      name: 'auth-storage', // localStorage key
      partialize: (state) => ({ token: state.token }), // only persist token
    }
  )
);