import { RefObject, useEffect, useRef, useState } from 'react';

export function useOutsideClick(selectorBtn: string = '.btnIcon'): { inTheField: boolean; wrapperRef: RefObject<HTMLDivElement | null> } {
    const [inTheField, setInTheField] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const btnTarget = event.target as HTMLElement;
            // console.log('btnTarget ', btnTarget);
            // console.log('selectorBtn ', selectorBtn);
            // console.log('wrapperRef.current ', wrapperRef.current);
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                // On met InTheField a False si le clique n'est pas dans la zone
                setInTheField(false);
                console.log('En dehors ');
            } else if (wrapperRef.current && wrapperRef.current.contains(event.target as Node)) {
                // On met InTheField a True si le clique est dans la zone
                setInTheField(true);
                console.log('Dedans');
                if (btnTarget.closest(selectorBtn)) {
                    console.log('BTN dedans');
                    // On met l'inverse de la valeur de InTheField
                    setInTheField(!inTheField);
                }
            }
        };
        document.addEventListener('click', handleClick);
        // Nettoyage de l'event click
        return () => document.removeEventListener('click', handleClick);
    }, [inTheField]);
    return { inTheField, wrapperRef };
}
