import { User } from "@/types/models";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  session: User | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
  setSession: (session: User | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      session: null,
      refreshToken: null,
      isAuthenticated: false,
      setToken: (token) => set((state) => ({
        token,
        isAuthenticated: !!token || !!state.session,
      })),
      setSession: (session) => set((state) => ({
        session,
        isAuthenticated: !!session || !!state.token,
      })),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      reset: () =>
        set({
          token: null,
          session: null,
          refreshToken: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        token: state.token,
        session: state.session,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
