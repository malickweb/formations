// HeaderStore
// btnState: boolean
// shopState: boolean
// toggle: (k: 'btnState' | 'shopState') => void

'use client ';

import { create } from 'zustand';
import { createSelectors } from './createSelectorStore';

interface BtnHeader {
    btnState: boolean;
    shopState: boolean;
    toggle: (k: 'btnState' | 'shopState') => void;
}

const headerStore = create<BtnHeader>()((set) => ({
    btnState: false,
    shopState: false,
    toggle: (k) => set((state) => ({ ...state, [k]: !state[k] })),
}));

export const HeaderStore = createSelectors(headerStore);
