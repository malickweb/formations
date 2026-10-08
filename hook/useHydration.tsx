'use client';

import { useEffect, useState } from 'react';

export function useHydration() {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        console.log('USE EFFECT hydraté');
        setHydrated(true);
    }, []);

    // Pour le debugging
    useEffect(() => {
        if (hydrated) {
            console.log('Composant hydraté');
        }
    }, [hydrated]);

    return hydrated;
}
