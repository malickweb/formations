'use server';

import { Product } from '@/types/product';

export type DummyJsonProductsResponse = {
    products: Product[];
    total?: number;
    skip?: number;
    limit?: number;
};

export async function getAllProducts() {
    try {
        const response = await fetch(`https://dummyjson.com/products`, {
            method: 'GET',
        });
        const responseAllProduct: DummyJsonProductsResponse = await response.json();

        // if (!responseAllProduct.length) return { success: false };
        return { success: response.ok, data: responseAllProduct };
    } catch {
        return { success: false };
    }
}

export async function getCategoryProducts(categoryProduct: string) {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${categoryProduct}`, {
            method: 'GET',
        });
        const responseAllProduct: DummyJsonProductsResponse = await response.json();

        // if (!responseAllProduct.length) return { success: false };
        return { success: response.ok, data: responseAllProduct };
    } catch {
        return { success: false };
    }
}
