'use client';

import { useMemo, useReducer, useState } from 'react';
// Images
import Image from 'next/image';
import bgReact from '@/public/react-js-icon.svg';
import bgAngular from '@/public/angular-icon.svg';
import bgNodeJs from '@/public/node-js-icon.svg';

// Component
import Button from '../button/button';
import SelectFilter from '../select/selectFilter';
// Filter
import { filterReducer, initialFilterState } from './filterReducer';
// Data
import { products } from '@/data/formations';
// Types
import { FormationCategory, Formation } from '@/types/product';
// Store
import { FormationStore } from '@/store/formationStore';

const styleCard: Record<FormationCategory, { bgColor: string; color: string; border: string; bgBadgeLevel: string; bgBadge: string }> = {
    react: { bgColor: 'from-cyan-500/20 to-blue-500/20', color: 'text-indigo-300', border: 'border-cyan-500/30', bgBadgeLevel: 'bg-gray-900/80', bgBadge: 'bg-cyan-500/10 text-cyan-300' },
    angular: { bgColor: 'from-red-500/20 to-orange-500/20', color: 'text-red-300', border: 'border-red-500/30', bgBadgeLevel: 'bg-gray-900/80', bgBadge: 'bg-red-500/10 text-red-300' },
    nodejs: { bgColor: 'from-green-500/20 to-emerald-500/20', color: 'text-green-300', border: 'border-green-500/30', bgBadgeLevel: 'bg-gray-900/80', bgBadge: 'bg-green-500/10 text-green-300' },
};

// Type
interface DropDown {
    data: Formation;
}

function DropDown({ data }: DropDown) {
    const [state, setState] = useState<boolean>(false);

    const handleClick = () => {
        setState((prev) => !prev);
    };

    return (
        <>
            <div className={`overflow-hidden ${!state && 'h-16.5'}`}>
                {data.features.map((f, i) => {
                    return (
                        <div
                            key={i}
                            className={`flex flex-row items-center content-center text-[12px] px-1 py-0.5 gap-1.5`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="#05df72"
                                className="size-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <div>{f}</div>
                        </div>
                    );
                })}
            </div>
            <div
                onClick={handleClick}
                className={`text-xs text-indigo-400 font-medium cursor-pointer p-1`}
            >
                +2 autres
            </div>
        </>
    );
}

export default function SectionCard() {
    const [isSortedRating, setIsSortedRating] = useState<boolean>(false);
    const [isSortedStudents, setIsSortedStudents] = useState<boolean>(false);
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [filters, dispatch] = useReducer(filterReducer, initialFilterState);
    // Store Product Cart
    const setCartStore = FormationStore.use.setCartShop();

    const calculPercent = (newPrice: number, oldPrice: number): number => {
        let percent = (newPrice / oldPrice) * 100;
        percent = 100 - percent;
        return Math.floor(percent);
    };

    let filteredFormations = useMemo(() => {
        const filtered = products.filter((p) => {
            if (filters.langage !== p.category && filters.langage !== 'All') return false;
            if (filters.level !== p.level && filters.level !== 'All') return false;

            return true;
        });

        if (isSortedRating) return [...filtered].sort((a, b) => b.rating - a.rating);

        if (isSortedStudents) return [...filtered].sort((a, b) => b.students - a.students);

        return filtered;
    }, [products, filters.langage, filters.level, isSortedStudents, isSortedRating]);

    return (
        <section
            id={`formations`}
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16`}
        >
            <h4 className={`text-2xl font-bold text-white my-2`}>Toutes les Formations</h4>
            <p>{filteredFormations.length} formations disponibles</p>

            <SelectFilter
                name={'level'}
                id={`level`}
                value={filters.level}
                data={{ All: 'Techno (Tout)', Débutant: 'Débutant', Intermédiaire: 'Intermédiaire', Avancé: 'Avancé' }}
                className={`border border-gray-800 rounded-md`}
                onChange={(e) => {
                    dispatch({ type: 'SET_LEVEL', payload: e.target.value as 'All' | 'Débutant' | 'Intermédiaire' | 'Avancé' });
                }}
            />
            <SelectFilter
                name={'langage'}
                id={`langage`}
                value={filters.langage}
                data={{ All: 'Level (Tout)', react: 'React', angular: 'Angular', nodejs: 'Node.js' }}
                className={`border border-gray-800 rounded-md ml-3`}
                onChange={(e) => {
                    dispatch({ type: 'SET_LANGAGE', payload: e.target.value as 'All' | 'react' | 'angular' | 'nodejs' });
                }}
            />
            <div>
                <h5
                    className={`inline-flex text-sm cursor-pointer`}
                    onClick={() => {
                        setShowFilter((prev) => !prev);
                    }}
                >
                    Filtre avancé
                </h5>
                <div className={`${!showFilter ? 'h-0 hidden ' : 'h-16'} transition-all delay-1000`}>
                    <div className={`flex`}>
                        <label htmlFor="sortedRating">Trier par note</label>
                        <input
                            type="checkbox"
                            name="sortedRating"
                            id="sortedRating"
                            className={`mx-2`}
                            onChange={() => {
                                setIsSortedRating((prev) => !prev);
                            }}
                        />
                    </div>
                    <div className={`flex`}>
                        <label htmlFor="sortedStudents">Trier par nombre d'élève</label>
                        <input
                            type="checkbox"
                            name="sortedStudents"
                            id="sortedStudents"
                            className={`mx-2`}
                            onChange={() => {
                                setIsSortedStudents((prev) => !prev);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6`}>
                {filteredFormations.map((p) => {
                    return (
                        <div
                            key={p.id}
                            id={`${p.category}-${p.id}`}
                            className={`group card bg-gray-800/50 rounded-2xl border ${styleCard[p.category].border} gap-4 text-[10px] overflow-hidden`}
                        >
                            <div className={`topSection flex flex-row content-center justify-center relative p-14 bg-linear-to-br ${styleCard[p.category].bgColor}`}>
                                <div className={`absolute top-2.5 left-2.5 ${styleCard[p.category].bgBadgeLevel} text-xs font-bold p-1.5 rounded-md`}>{p.level}</div>
                                <Image
                                    src={p.image === 'react' ? bgReact : p.image === 'angular' ? bgAngular : bgNodeJs}
                                    alt={p.image}
                                    width={60}
                                    height={60}
                                    className={`opacity-70 group-hover:opacity-100 transition-all duration-300`}
                                />
                                <div className={`absolute top-2.5 right-2.5 bg-red-600 text-xs font-bold px-2.5 py-1 rounded-md`}>-{calculPercent(p.price, p.originalPrice)}%</div>
                            </div>
                            <div className="bodySection">
                                <div className={`p-4`}>
                                    <div className={`flex justify-between items-center`}>
                                        <div className={`text-xs font-bold first-letter:uppercase rounded-sm p-1.5 ${styleCard[p.category].bgBadge}`}>{p.category}</div>
                                        <div className={`flex flex-row items-center text-xs text-gray-400 gap-1`}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="size-3"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {p.duration}
                                        </div>
                                    </div>
                                    <div className={`flex flex-col text-gray-400 my-5`}>
                                        <h5 className={`text-lg font-bold text-white`}>{p.name}</h5>
                                        <p className={`text-sm py-2.5`}>{p.description}</p>
                                        {/* DropDown  */}
                                        <DropDown data={p} />
                                    </div>
                                    <div className={`flex flex-row flex-nowrap content-center justify-between items-center text-xs border-b border-gray-800 py-3`}>
                                        <div className={`flex flex-row items-center content-center  gap-1.5`}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                className="size-4 text-yellow-400"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {p.rating} <span className={`text-gray-500`}>({p.students})</span>
                                        </div>
                                        <div className={`flex flex-row text-gray-400 gap-1`}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                                                    clipRule="evenodd"
                                                />
                                                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                            </svg>
                                            {p.students} étudiants
                                        </div>
                                    </div>
                                </div>

                                <div className="bottomSection flex flex-row justify-between px-4 pb-5">
                                    <div className={`text-2xl font-bold`}>
                                        {p.price}€ <span className={`text-sm text-gray-500 line-through`}>{p.originalPrice}€</span>
                                    </div>
                                    <Button
                                        className={'rounded-xl text-sm bg-indigo-600 hover:bg-indigo-500'}
                                        onClick={() => {
                                            setCartStore(p);
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            fill="currentColor"
                                            className="size-4"
                                        >
                                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                        </svg>
                                        Ajouter
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
