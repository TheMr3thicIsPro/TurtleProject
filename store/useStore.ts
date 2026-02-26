import { create } from 'zustand';

interface AppState {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  scrollDepth: number;
  setScrollDepth: (depth: number) => void;
}

export const useStore = create<AppState>((set) => ({
  isSoundEnabled: false,
  toggleSound: () => set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
  scrollDepth: 0,
  setScrollDepth: (depth) => set({ scrollDepth: depth }),
}));
