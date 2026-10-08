// Components
import Menu from '../menu/menu';
import Cart from '../cart/cart';
import ßuttonIcon from '../button/buttonIcon';
// Store
import { HeaderStore } from '@/store/headerStore';

interface AsideProps {
    state: boolean;
    nameState: 'btnState' | 'shopState';
    direction?: 'left' | 'right';
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function Aside({ state, nameState, direction = 'left', className, size = 'sm' }: AsideProps) {
    // Store
    const btnIconToggle = HeaderStore.use.toggle();
    // Hook

    // Style
    const positionClasses = direction === 'left' ? (state ? 'left-0' : '-left-full') : state ? 'right-0' : '-right-full';
    const sizeStyles = {
        sm: 'w-1/3',
        md: 'w-1/2',
        lg: 'w-full',
    };

    return (
        <>
            {state && (
                <div
                    className={`overlay body-overflow fixed top-0 left-0 w-full h-lvh opacity-50 z-1 bg-black`}
                    onClick={() => {
                        btnIconToggle(nameState);
                    }}
                ></div>
            )}
            <div className={`fixed top-0 ${positionClasses} ${sizeStyles[size]} h-svh bg-gray-900 transition-all duration-300 z-10 ${className}`}>
                <ßuttonIcon
                    type={'cross'}
                    onClick={() => {
                        btnIconToggle(nameState);
                    }}
                />
                {nameState === 'shopState' ? <Cart /> : <Menu direction={'col'} />}
            </div>
        </>
    );
}
