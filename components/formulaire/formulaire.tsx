import { useState } from 'react';
// Components
import Button from '../button/button';
// Form
import SignUp from './signUp';
import SignIn from './signIn';

// Hook
import { useHydration } from '@/hook/useHydration';

export default function Formulaire() {
    const [state, setState] = useState<boolean>(false);

    const handleClick = () => {
        setState((prev) => !prev);
    };
    if (!useHydration) return <>Chargement du formulaire</>;

    return (
        <>
            <div className={`w-full`}>
                <Button onClick={handleClick}>Switch</Button>
                {state ? (
                    <div>
                        <SignUp />
                    </div>
                ) : (
                    <div>
                        <SignIn />
                    </div>
                )}
            </div>
        </>
    );
}
