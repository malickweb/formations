// Types
import { Product } from '@/types/product';

export interface CartItem {
    id: number | null;
    title: string | null;
    brand: string | null;
    category?: string;
    images: string[] | null;
    price: number | null;
    status?: 'Low Stock' | 'In Stock';
    description?: string;
    rating?: number;
    sku?: string;
}

export interface CardProps {
    id: number;
    title: string;
    brand?: string;
    images?: string[];
    price?: number;
    onClick?: (i: CartItem) => void;
    data?: Product;
}
