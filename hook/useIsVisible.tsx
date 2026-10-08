import { useEffect, useRef, useState } from 'react';

export function useIsVisible(options = { root: null, rootMargin: '0px', threshold: 0.3 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Sécurité pour le SSR de Next.js
        if (typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(([entry]) => {
            // isIntersecting est true si l'élément est dans la zone visible
            setIsVisible(entry.isIntersecting);
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Nettoyage au démontage du composant
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);
    return { ref, isVisible };
}
