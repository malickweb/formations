interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    width?: 'inherit' | 'full';
    rounded?: 'rounded-sm' | 'rounded-xl' | 'rounded-2xl';
    className?: string;
    onClick?: () => void;
}

export default function Button({ children, type = 'button', rounded = 'rounded-sm', width = 'inherit', className, onClick }: ButtonProps) {
    const handleClick = () => {
        onClick?.();
        console.log('Button CLICK');
    };

    return (
        <>
            <button
                type={type}
                className={`flex flex-row items-center py-2 px-3.5 gap-1 font-bold cursor-pointer transition-all duration-300 ${className}`}
                onClick={handleClick}
            >
                {children}
            </button>
        </>
    );
}
