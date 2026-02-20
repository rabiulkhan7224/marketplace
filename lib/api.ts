import useSWR, { SWRConfiguration } from 'swr';
import { useAuthStore } from './authStore';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/v1/api';

// Fetcher with auth header
const fetcher = async (url: string, token?: string) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${url}`, { headers });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Request failed: ${res.status}`);
  }

  return res.json();
};

// Hook wrapper with auto token
export function useApi<Data>(
  url: string | null,
  options?: SWRConfiguration<Data>
) {
  const { token } = useAuthStore();

  return useSWR<Data>(
    url ? [url, token] : null,
    ([urlKey, t]: [string, string | undefined]) => fetcher(urlKey, t),
    {
      revalidateOnFocus: true,
      ...options,
    }
  );
}

// Mutation helper (POST/PATCH/DELETE)
export async function apiMutation<T>(
  method: 'POST' | 'PATCH' | 'DELETE',
  url: string,
  body?: any
) {
  const { token } = useAuthStore.getState();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Mutation failed');
  }

  return res.json() as Promise<T>;
}