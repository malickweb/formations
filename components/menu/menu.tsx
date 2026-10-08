import Link from 'next/link';

interface MenuProps {
    direction?: 'row' | 'col';
}
export default function Menu({ direction = 'row' }: MenuProps) {
    return (
        <div className={`flex flex-${direction} items-center`}>
            <div className={`${direction === 'col' ? 'absolute top-3 right-5' : ''}`}>
                <Link href="/">Logo</Link>
            </div>
            <nav className={`flex flex-${direction} w-full`}>
                <Link
                    href="/"
                    className={`p-2 hover:bg-foreground hover:text-background transition-all duration-700`}
                >
                    Home
                </Link>
                <Link
                    href="#formations"
                    className={`p-2 hover:bg-foreground hover:text-background transition-all duration-700`}
                >
                    Formations
                </Link>
                <Link
                    href="#newsletter"
                    className={`p-2 hover:bg-foreground hover:text-background transition-all duration-700`}
                >
                    Contact
                </Link>
            </nav>
        </div>
    );
}
