'use clients';

import { useState } from 'react';
// Components
import ßuttonIcon from '../button/buttonIcon';
// Store
import { HeaderStore } from '@/store/headerStore';
import { ShopStore } from '@/store/shopStore';

interface ModalCart {
    onClick?: () => void;
}
export function ModalCart({ onClick }: ModalCart) {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const testCart = ShopStore.use.cart();
    const btnIconToggle = HeaderStore.use.toggle();

    const handleClick = () => {
        onClick?.();
    };

    const handleMouseEnter = () => {
        console.log('FOCUS');
        setIsFocus(true);
    };

    const handleMouseLeave = () => {
        console.log('FOCUS OUT');
        setIsFocus(false);
    };

    return (
        <>
            <div className={`fixed right-10 bottom-10`}>
                <div
                    className={`rounded-full bg-background dark:bg-foreground`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <ßuttonIcon
                        type={'shop'}
                        onClick={() => {
                            handleClick;
                            btnIconToggle('shopState');
                        }}
                    />
                </div>
            </div>
        </>
    );
}
