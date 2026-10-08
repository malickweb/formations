'use client';

import { create } from 'zustand';
import { createSelectors } from './createSelectorStore';
import { devtools } from 'zustand/middleware';

interface CardProps {
    id: number | null;
    title: string | null;
    brand: string | null;
    images: string[] | null;
    price: number | null;
    quantity?: number;
}

interface ShopStoreProps {
    cart: CardProps[];
    listProduct: CardProps[];
    setCartShop: (p: CardProps) => void;
    setProductList: (p: CardProps) => void;
}

const shopStore = create<ShopStoreProps>()(
    devtools((set) => ({
        cart: [],
        listProduct: [],
        setProductList: (p) =>
            set(
                () => ({
                    listProduct: [p],
                }),
                false,
                'SetProductList',
            ),

        setCartShop: (p) =>
            // set((state) => ({
            //     cart: [...state.cart, p],
            // })),
            set((state) => {
                const existing = state.cart.find((item) => item.id === p.id);
                if (existing) {
                    return {
                        cart: state.cart.map((item) => (item.id === p.id ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item)),
                    };
                }
                return {
                    cart: [...state.cart, { ...p, quantity: p.quantity ?? 1 }],
                };
            }),
    })),
);

export const ShopStore = createSelectors(shopStore);
