'use client';

import { create } from 'zustand';
import { createSelectors } from './createSelectorStore';

interface Counter {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const counterStore = create<Counter>()((set) => ({
    count: 1,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 1 }),
}));

export const CounterStore = createSelectors(counterStore);
