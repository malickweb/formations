// ModalSearch({data: Formation[]})
// InputSearch({ name:string, label?:string, placeholder:string = '' })

'use client';

import Link from 'next/link';
// Components
import Menu from '../menu/menu';
import ßuttonIcon from '../button/buttonIcon';
// Store
import { HeaderStore } from '@/store/headerStore';
import { FormationStore } from '@/store/formationStore';
// Data
import { products } from '@/data/formations';
import { useEffect, useMemo, useState } from 'react';
import { Formation } from '@/types/product';
import { useOutsideClick } from '@/hook/useOutsideClick';

function ModalSearch({ data }: { data: Formation[] }) {
    return (
        <>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[-5%] min-w-75 w-full flex flex-col gap-3 border border-white bg-linear-to-br from-gray-900 via-indigo-950 to-gray-900 rounded-md mt- p-1.5`}>
                {data.map((d, i) => {
                    return (
                        <Link
                            key={i}
                            href={`#${d.category}-${d.id}`}
                        >
                            <div className={`p-2.5 text-xs border border-gray-800 rounded-2xl`}>
                                <h5>{d.name}</h5>
                                <div>
                                    <p>{d.category}</p>
                                    <p className={`overflow-hidden whitespace-nowrap text-ellipsis`}>{d.description}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
interface InputSearchProps {
    name: string;
    label?: string;
    placeholder: string;
}
function InputSearch({ name, label, placeholder = '' }: InputSearchProps) {
    const [state, setState] = useState<string>('');
    const [listFilter, setListFilter] = useState<Formation[]>([]);

    const { inTheField, wrapperRef } = useOutsideClick();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value.toLowerCase());
    };

    const handleBlur = () => {
        // setListFilter([]);
    };

    const searchList = useMemo(() => {
        return products.filter((p) => {
            if (p.name.toLowerCase().indexOf(state) === -1) return false;
            return true;
        });
    }, [state]);

    useEffect(() => {
        if (state.length > 3) {
            const searchFilter = searchList;
            setListFilter(searchFilter);
            console.log('searchFilter', searchFilter);
        }

        return;
    }, [state, searchList]);

    return (
        <div
            ref={wrapperRef}
            className={`z-10 flex flex-row gap-2.5`}
        >
            {label && <label id={name}>{label}</label>}
            <div className={`relative`}>
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    onBlur={() => {
                        handleBlur();
                    }}
                    value={state}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                {listFilter.length > 1 && inTheField && <ModalSearch data={listFilter} />}
            </div>
            {/* {<ModalSearch data={listFilter} />} */}
        </div>
    );
}

export default function Header() {
    // Store
    const formationStoreCart = FormationStore.use.cart();
    const btnIconToggle = HeaderStore.use.toggle();

    const handleClick = () => {
        console.log('Header handleClick');
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setIsValue(e.target.value);
    };

    return (
        <header className={`sticky top-0 z-1 flex flex-row justify-between items-center w-full p-3 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 `}>
            <div className={`flex flex-row md:hidden`}>
                <div className={`rounded-xl bg-gray-800 hover:bg-gray-600`}>
                    <ßuttonIcon
                        type={'burger'}
                        onClick={() => {
                            handleClick;
                            btnIconToggle('btnState');
                        }}
                    />
                </div>
            </div>

            <div className={`max-md:hidden`}>
                <Menu />
            </div>
            <div className={`max-md:hidden`}>
                <InputSearch
                    name={`search`}
                    placeholder={`Recherche`}
                />
            </div>
            <div className={`flex flex-row md:hidden`}>
                <Link href="/">Logo</Link>
            </div>
            <div className={`flex flex-row justify-end`}>
                <div className={`relative rounded-xl bg-gray-800 hover:bg-gray-600`}>
                    {formationStoreCart?.length > 0 && <div className={`absolute -top-1 -left-3 text-sm px-1.5 rounded-full bg-red-600`}>{formationStoreCart.length}</div>}
                    <ßuttonIcon
                        type={'shop'}
                        onClick={() => {
                            handleClick;
                            btnIconToggle('shopState');
                        }}
                    />
                </div>
            </div>
        </header>
    );
}
