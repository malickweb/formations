import { FormationStore } from '@/store/formationStore';
import Button from '../button/button';

function EmptyCart() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-6">
                <h5>Votre panier est vide</h5>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        fill="currentColor"
                        className="size-8"
                    >
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default function Cart() {
    // Store
    const formationStoreCart = FormationStore.use.cart();
    const removeItemsStoreCart = FormationStore.use.removeItems();

    const handleClick = () => {
        console.log('CART');
    };

    return (
        <>
            <div>
                {!formationStoreCart.length ? (
                    <EmptyCart />
                ) : (
                    <div className={`p-3`}>
                        <div>
                            <h3>Votre Panier</h3>
                            <h6>{formationStoreCart.length} acticles</h6>
                        </div>
                        {formationStoreCart.map((f, i) => {
                            return (
                                <div key={i}>
                                    <div className={`relative flex flex-col p-3 mx-1 my-3 border ${f.category === 'react' ? 'border-cyan-600/60' : f.category === 'angular' ? 'border-red-600/60' : 'border-green-600/60'} rounded-2xl gap-3`}>
                                        <div className={`absolute -top-2 right-2 text-xs border rounded-2xl px-2 ${f.category === 'react' ? 'bg-cyan-600' : f.category === 'angular' ? 'bg-red-600' : 'bg-green-600'}`}>{f.level}</div>
                                        <h5>{f.name}</h5>
                                        <div className={`flex flex-col text-xs gap-4`}>
                                            <div className={`flex flex-row justify-between`}>
                                                <p>
                                                    prix : <span>{f.price} €</span>
                                                </p>
                                                <p>durée : {f.duration}</p>
                                            </div>
                                            <div className={``}>
                                                <Button
                                                    onClick={() => {
                                                        handleClick;
                                                        removeItemsStoreCart(f.id);
                                                    }}
                                                    className={`group border rounded-md hover:${f.category === 'react' ? 'border-cyan-600' : f.category === 'angular' ? 'border-red-600' : 'border-green-600'}`}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                        fill="currentColor"
                                                        className={`size-4 group-hover:text-red-600`}
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className={`flex flex-row justify-center`}>
                            <Button className={`bg-green-600 rounded-sm hover:bg-green-600/90`}>Commander</Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
