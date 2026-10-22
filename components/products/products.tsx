'use clients';

import { useEffect, useState } from 'react';
// Component
import Card from '../card/card';
import { ModalCart } from '../modal/modalCart';
// Action
import { getAllProducts, getCategoryProducts } from '@/action/product';
// Types
import { Product } from '@/types/product';
import { CartItem } from '@/types/cardTypes';
// Store
import { ShopStore } from '@/store/shopStore';

export default function Products() {
    const [productShow, setProductShow] = useState<boolean>(false);
    const [productCard, setProductCard] = useState<CartItem | undefined>(undefined);

    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const testCart = ShopStore.use.cart();
    const testList = ShopStore((state) => state.listProduct);

    const productCategory = {
        react: 'React',
        angular: 'Angular',
        nodejs: 'Node.js',
    };

    type CategoryKey = keyof typeof productCategory;
    const [selectCategory, setSelectCategory] = useState<CategoryKey>(Object.keys(productCategory)[0] as CategoryKey);

    const handleFetch = async (category?: string) => {
        setLoading(true);
        setError(null);
        try {
            if (!category) {
                const allProducts = await getAllProducts();
                setData(allProducts?.data?.products ?? []);
            } else {
                const categoryProducts = await getCategoryProducts(category);
                setData(categoryProducts?.data?.products ?? []);
            }
        } catch (error) {
            setError('Une erreur est survenue lors du chargement des produits. Veuillez réessayer.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.currentTarget;
        setSelectCategory(value as CategoryKey);
    };

    const handleClick = (i?: CartItem) => {
        setProductShow((prev) => !prev);
        if (i) setProductCard(i);
    };

    const handleModalClick = () => {
        setProductShow(false);
        setProductCard(undefined);
    };

    useEffect(() => {
        handleFetch(selectCategory);
    }, [selectCategory]);
    // console.log('CART ==> Test LIST', testList);
    // console.log('CART ==> testCart', testCart);

    if (loading) return <div className="p-4 text-center">Chargement des données...</div>;
    if (error) return <div className="p-4 text-center text-red-500">{error}</div>;
    if (!data.length) return <div className="p-4 text-center">Aucun produit trouvé.</div>;

    return (
        <>
            <div className={`m-2`}>
                <label htmlFor="category">Catégories : </label>
                <select
                    name="category"
                    id="category"
                    onChange={handleChange}
                    value={selectCategory}
                >
                    <option value="">Veuillez choisir</option>
                    {(Object.keys(productCategory) as (keyof typeof productCategory)[]).map((key, i) => (
                        <option
                            key={i}
                            value={key}
                        >
                            {productCategory[key]}
                        </option>
                    ))}
                </select>
            </div>
            <div className={``}>
                <h3>{productCategory[selectCategory]}</h3>
                <div className={`grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4`}>
                    {data.map((product) => (
                        <div
                            key={product.id}
                            className={`w-full border border-foreground rounded-md`}
                            id={String(product.id)}
                        >
                            <Card
                                id={product.id}
                                title={product.title}
                                brand={product.brand}
                                images={product.images}
                                price={product.price}
                                onClick={handleClick}
                                data={product}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {productCard && (
                <div
                    className={`absolute w-3/4 mt-16 mb-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground body-overflow z-50`}
                    onClick={handleModalClick}
                >
                    <Card
                        id={productCard.id || 0}
                        title={productCard.title || 'undefined'}
                        brand={productCard.brand || 'none'}
                        images={productCard.images || ['none']}
                        price={productCard.price || 0}
                    />
                </div>
            )}
            <ModalCart />
        </>
    );
}
