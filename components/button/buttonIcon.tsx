import { useState } from 'react';

interface ßuttonIconProps {
    type: 'burger' | 'cross' | 'shop' | 'search';
    size?: 'sm' | 'md' | 'lg';
    changeIcon?: null | 'burger' | 'cross' | 'shop' | 'search';
    onClick?: () => void;
}

const icons = {
    burger: `M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5`,
    cross: `M6 18 18 6M6 6l12 12`,
    shop: `M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z`,
    search: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
};

export default function ßuttonIcon({ type, size = 'md', changeIcon = null, onClick }: ßuttonIconProps) {
    const [state, setState] = useState<boolean>(false);

    const getStyles = () => {
        const sizeStyles = {
            sm: { heigth: 'h-4' },
            md: { heigth: 'h-6' },
            lg: { heigth: 'h-8' },
        };
        return { ...sizeStyles[size] };
    };

    const handleClick = () => {
        onClick?.();

        setState((prev) => !prev);
    };

    return (
        <>
            <button
                type="button"
                className={`group/btn btnIcon p-2 cursor-pointer`}
                onClick={handleClick}
            >
                {state}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className={`group-hover/btn:scale-110 ${getStyles().heigth} transition-all  duration-300`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={changeIcon && state ? icons[changeIcon] : icons[type]}
                    ></path>
                </svg>
            </button>
        </>
    );
}
