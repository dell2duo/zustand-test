import { create } from "zustand";

interface ICounterState {
  count: number;
  inc: () => void;
}

const useStore = create<ICounterState>((set) => ({
  count: 1,
  inc: () => set((state: { count: number }) => ({ count: state.count + 1 })),
}));

export const useCounter = () => ({ ...useStore() });
