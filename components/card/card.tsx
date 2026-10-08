import { useEffect, useState } from 'react';
import Image from 'next/image';

// Store
import { ShopStore } from '@/store/shopStore';
// Types
import { Product } from '@/types/product';
// Components
import { Counter } from '../counter/counter';

interface CartItem {
    id: number | null;
    title: string | null;
    brand: string | null;
    images: string[] | null;
    price: number | null;
}

interface CardProps {
    id: number;
    title: string;
    brand?: string;
    images?: string[];
    price?: number;
    onClick?: (i: CartItem) => void;
    data?: Product;
}

export default function Card({ id, title, brand, images, price, onClick, data }: CardProps) {
    const [hoverImg, setHoverImg] = useState<string | null>(null);
    const item: CartItem = {
        id,
        title,
        brand: brand ?? null,
        images: images ?? null,
        price: price ?? null,
    };

    const testSetCartShop = ShopStore.use.setCartShop();
    const testSetProductList = ShopStore.use.setProductList();

    const srcImage: string = images?.length ? images[0] : '';

    useEffect(() => {
        setHoverImg(srcImage);
    }, []);

    const handleClick = () => {
        onClick?.(item);
        // console.log('CARD  ==> DATA', data);
    };

    const handleHover = (img: string) => {
        setHoverImg(img);
    };
    const handleHoverOut = () => {
        setHoverImg(null);
    };

    return (
        <div
            id={String(id)}
            className={`card relative w-full group p-[30px_15px]`}
            onClick={() => {
                handleClick;
                testSetProductList(item);
            }}
        >
            <div className={`text-xs/2`}>{brand}</div>
            <Image
                src={!hoverImg ? srcImage : hoverImg}
                alt={title}
                width={200}
                height={200}
            />
            <div className={`flex flex-col absolute top-1/2 -right-5 -translate-x-1/2 -translate-y-1/2`}>
                {images?.length &&
                    images?.length > 1 &&
                    images?.map((image, i) => (
                        <div
                            key={i}
                            className={`border border-background rounded-md cursor-pointer hover:border-foreground`}
                            onMouseOver={() => handleHover(image)}
                            onMouseOut={handleHoverOut}
                        >
                            <Image
                                src={image}
                                alt={title}
                                width={40}
                                height={40}
                                loading="eager"
                                priority
                            />
                        </div>
                    ))}
            </div>
            <div className={`absolute w-full bottom-0 left-0 text-xs text-background p-1 opacity-0 group-hover:opacity-100 group-hover:bg-foreground`}>
                <h3 className={`truncate whitespace-nowrap overflow-hidden p-0.5`}>{title}</h3>
                <div className={``}>{price} €</div>
                <Counter />
                <button
                    type="button"
                    className={`w-full mt-1 bg-background text-foreground p-2 rounded-md cursor-pointer`}
                    onClick={() => {
                        testSetCartShop(item);
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
