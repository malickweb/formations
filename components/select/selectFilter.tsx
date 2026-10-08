interface SelectFilterProps {
    name: string;
    id: string;
    value: string;
    data: { [key: string]: string };
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectFilter({ name, id, value, data, className, onChange }: SelectFilterProps) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e);
    };

    return (
        <>
            <select
                name={name}
                id={id}
                className={`${className}`}
                value={value}
                onChange={(e) => {
                    handleChange(e);
                }}
            >
                {Object.keys(data).map((d, i) => {
                    return (
                        <option
                            key={i}
                            value={d}
                        >
                            {data[d]}
                        </option>
                    );
                })}
            </select>
        </>
    );
}
