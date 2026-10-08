type AvailabilityStatus = 'In stock' | 'Out of stock' | 'Low stock';
type Category = 'beauty' | 'electronics' | 'clothing' | 'fragrances' | 'furniture' | 'groceries';

interface ProductDimensions {
    depth: number;
    height: number;
    width: number;
}

interface ProductReview {
    comment: string;
    date: string;
    rating: number;
    reviewerEmail: string;
    reviewerName: string;
}

interface ProductMeta {
    barcode: string;
    createdAt: string;
    qrCode: string;
    updatedAt: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: Category;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: ProductDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: AvailabilityStatus;
    reviews: ProductReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: ProductMeta;
    images: string[];
    thumbnail: string;
}

export type FormationCategory = 'react' | 'angular' | 'nodejs';

export interface Formation {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    category: FormationCategory;
    level: string;
    duration: string;
    rating: number;
    students: number;
    image: string;
    features: string[];
}
