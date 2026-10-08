'use client';

import { useReducer, useState } from 'react';
// Filter
import { filterReducer, initialFilterState } from '../input/filterReducer';

import Button from '../button/button';
import Input from '../input/input';
import { useHydration } from '@/hook/useHydration';

// Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function ServiceNewsLetter(s: boolean) {
    return <>{s ? <div>ServiceNewsLetter</div> : <div></div>}</>;
}

export default function SectionNewsLetter() {
    const [filters, dispatch] = useReducer(filterReducer, initialFilterState);
    const [emailValue, setEmailValue] = useState<boolean | null>(null);

    const isValidEmail = (email: string) => {
        return emailRegex.test(email);
    };
    const formulaire = (formData: FormData) => {
        const query = formData.get('email');
        if (typeof query !== 'string') return;
        setEmailValue(isValidEmail(query));
    };

    if (!useHydration) return <>Chargement du Formulaire</>;

    return (
        <section
            id={`newsletter`}
            className={`py-16 px-4`}
        >
            <div className={`rounded-2xl p-8 text-center bg-linear-to-r from-indigo-600 to-purple-600`}>
                {emailValue === null ? (
                    <>
                        <h5 className={`text-xl font-bold text-white`}>Restez informé</h5>
                        <p className={`text-base font-bold py-2.5`}>Recevez nos offres exclusives et les nouvelles formations en avant-première.</p>
                        <form action={formulaire}>
                            <div className={`flex items-center px-3 py-3 border border-white/10 rounded-xl bg-white/10 `}>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Votre adresse email"
                                    value={filters.email}
                                    onChange={(e) => {
                                        //handleChange(e);
                                        dispatch({
                                            type: 'SET_EMAIL',
                                            payload: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <Button
                                width="full"
                                type={'submit'}
                                rounded={`rounded-xl`}
                                className={'w-full rounded-xl my-3 py-3.5 justify-center text-base bg-white text-indigo-600 hover:bg-indigo-50'}
                            >
                                S'inscrire
                            </Button>
                        </form>
                    </>
                ) : (
                    ServiceNewsLetter(emailValue)
                )}
            </div>
        </section>
    );
}
