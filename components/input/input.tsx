interface InputProps {
    type: 'text' | 'search' | 'email' | 'password';
    name: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    className?: string;
}

export default function Input({ type, name, value, onChange, placeholder, label, className = '' }: InputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    return (
        <>
            {label && <label htmlFor={name}>{label}:</label>}
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                className={`w-full text-white outline-0 placeholder:text-white
    [&:-internal-autofill-selected]:bg-red-600 ${className}`}
                placeholder={placeholder}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
        </>
    );
}
