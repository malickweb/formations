import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

import { createSelectors } from './createSelectorStore';
import { Formation } from '@/types/product';

interface FormationStoreProps {
    cart: Formation[];
    listProduct: Formation[];
    setCartShop: (p: Formation) => void;
    setFormationList: (p: Formation[]) => void;
    removeItems: (id: number) => void;
}

const formationStore = create<FormationStoreProps>()(
    persist(
        devtools((set) => ({
            cart: [],
            listProduct: [],
            setFormationList: (p) =>
                set(
                    () => ({
                        listProduct: p,
                    }),
                    false,
                    'SetFormationList',
                ),

            setCartShop: (p) =>
                set((state) => ({
                    cart: [...state.cart, p],
                })),
            removeItems: (id) =>
                set((state) => ({
                    cart: state.cart.filter((item, i) => item.id !== id),
                })),
        })),
        {
            name: 'cart',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);

export const FormationStore = createSelectors(formationStore);
