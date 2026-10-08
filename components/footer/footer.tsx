const svgPlatform = [
    <path d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z" />,

    <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />,
    <g>
        <rect
            width="512"
            height="509.64"
            rx="115.61"
            ry="115.61"
        />
        <path
            className={`fill-gray-900`}
            fill="#fff"
            d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
        />
    </g>,

    <path d="M633.468 192.038s-6.248-44.115-25.477-63.485c-24.366-25.477-51.65-25.642-64.123-27.118-89.493-6.52-223.904-6.52-223.904-6.52h-.236s-134.352 0-223.893 6.52c-12.52 1.523-39.768 1.63-64.123 27.118-19.24 19.37-25.358 63.485-25.358 63.485S-.012 243.806-.012 295.681v48.509c0 51.768 6.366 103.643 6.366 103.643s6.248 44.114 25.358 63.52c24.355 25.477 56.363 24.65 70.655 27.367 51.237 4.89 217.644 6.366 217.644 6.366s134.529-.237 224.022-6.638c12.52-1.477 39.756-1.63 64.123-27.119 19.24-19.37 25.476-63.532 25.476-63.532S640 396.03 640 344.154v-48.508c-.13-51.769-6.497-103.643-6.497-103.643l-.035.035zm-379.8 211.007V223.173L426.56 313.41l-172.892 89.635z" />,
];
const svgPayment = [
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 305.67"
        className={`w-16`}
    >
        <g fillRule="nonzero">
            <path
                fill="#1434CB"
                d="M303.27 102.24c-22.18 0-42 11.49-42 32.73 0 24.35 35.15 26.04 35.15 38.27 0 5.16-5.9 9.77-15.99 9.77-14.31 0-25-6.45-25-6.45L250.85 198s12.32 5.44 28.68 5.44c24.25 0 43.33-12.06 43.33-33.66 0-25.74-35.3-27.37-35.3-38.73 0-4.03 4.85-8.45 14.9-8.45 11.35 0 20.61 4.68 20.61 4.68l4.48-20.7s-10.08-4.34-24.28-4.34zm-202.91 1.56l-.53 3.12s9.33 1.71 17.73 5.12c10.82 3.9 11.59 6.18 13.41 13.24l19.86 76.55h26.62l41.01-98.03H191.9l-26.35 66.65-10.75-56.5c-.99-6.47-5.98-10.15-12.1-10.15H100.36zm128.78 0l-20.83 98.03h25.32l20.76-98.03h-25.25zm141.25 0c-6.11 0-9.35 3.27-11.72 8.98l-37.1 89.05h26.56l5.13-14.85h32.36l3.12 14.85h23.43l-20.44-98.03h-21.34zm3.45 26.48l7.87 36.79h-21.09l13.22-36.79z"
            />
        </g>
    </svg>,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 333333 199007"
        className={`w-16`}
    >
        <path
            d="M147063 87405c0-14766 6898-27911 17638-36420-7920-6274-17924-10030-28812-10030-25653 0-46450 20797-46450 46449 0 25653 20796 46449 46450 46449 10888 0 20892-3755 28812-10029-10740-8508-17638-21654-17638-36420z"
            fill="#de2c1d"
        />
        <path
            d="M147063 87405c0 14767 6898 27912 17638 36420 10740-8508 17637-21654 17637-36420s-6898-27911-17637-36420c-10740 8508-17638 21654-17638 36420z"
            fill="#ed6100"
        />
        <path
            d="M193513 40955c-10888 0-20892 3756-28811 10030 10740 8508 17637 21654 17637 36420 0 14767-6898 27912-17637 36420 7919 6274 17923 10029 28811 10029 25653 0 46449-20796 46449-46449s-20796-46449-46449-46449zm49714 73260v-1972l-640 1702h-706l-640-1698v1968h-666v-2843h954l707 1820 700-1820h956v2843h-667zm-4775 0v-2230h-903v-613h2470v613h-902v2230h-666z"
            fill="#f79f06"
        />
    </svg>,
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 597.02"
        className={`w-16`}
    >
        <g fillRule="nonzero">
            <path
                fill="#001C64"
                d="M624.1 285.97c-7.23 41.2-40.84 72.34-84.95 72.34h-28c-5.71 0-11.46 5.29-12.37 11.13l-12.26 77.84c-.71 4.43-2.79 5.9-7.28 5.9H434.2c-4.55 0-5.63-1.52-4.95-6.02l5.17-53.82-54.06-2.79c-4.55 0-6.19-2.48-5.55-7.02l36.89-233.89c.71-4.43 3.47-6.33 7.94-6.33h93.55c45.04 0 73.52 30.31 77.01 69.62 26.79 18.1 39.32 42.18 33.9 73.04z"
            />
            <path
                fill="#0070E0"
                d="M448.13 306.19l-13.7 87.16-8.67 54.68c-.05.36-.08.74-.08 1.12 0 4.08 3.3 7.4 7.39 7.42l47.56.01a9.142 9.142 0 009.01-7.71l12.52-79.44c.7-4.43 4.51-7.69 9-7.7l27.99.01c44.09-.06 81.57-32.21 88.33-75.76 4.85-30.94-10.72-59.1-37.36-73.02a70.51 70.51 0 01-.86 9.83c-6.79 43.53-44.27 75.67-88.32 75.72h-43.82c-4.48 0-8.29 3.26-8.99 7.68z"
            />
            <path
                fill="#003087"
                d="M434.42 393.35h-55.39c-4.09-.02-7.39-3.35-7.39-7.44 0-.38.03-.75.08-1.12l37.32-236.65c.7-4.43 4.52-7.7 9-7.7h95.1c45.04 0 77.78 32.77 77.01 72.47a83.299 83.299 0 00-38.1-9.24h-79.97c-4.49 0-8.31 3.26-9.01 7.69l-14.94 94.83-13.7 87.16h-.01z"
            />
        </g>
    </svg>,
];

export default function Footer() {
    return (
        <footer className={`md:flex md:flex-wrap md:justify-between w-full py-12 px-4 text-sm text-gray-400 bg-gray-900 border-y border-gray-800`}>
            <div className={`md:w-1/3`}>
                <div>logo</div>
                <p>La plateforme de formations en développement web les plus complètes. Apprenez React, Angularet Node.js avec les meilleurs instructeurs.</p>
                <div className={`flex flex-row content-center items-center my-5`}>
                    {svgPlatform.map((i, j) => {
                        return (
                            <span
                                className={`group p-3 mr-3 rounded-xl justify-items-center bg-gray-800 cursor-pointer hover:text-indigo-600 transition-all`}
                                key={j}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 640 640"
                                    className={`fill-gray-400 group-hover:fill-indigo-800 hover:fill-indigo-600 transition-all`}
                                >
                                    {i}
                                </svg>
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className={`md:flex max-sm:py-5 gap-4 md:gap-20`}>
                <div className={`md:inline-flex md:flex-col md:flex-nowrap gap-4`}>
                    <h5 className={`text-base text-white font-bold`}>Formations</h5>
                    <ul className={`inline-flex flex-col gap-2.5 my-4`}>
                        <li className={`cursor-pointer hover:text-indigo-400`}>React</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Angular</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Node.js</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Typescript</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Full Stack</li>
                    </ul>
                </div>
                <div className={`md:inline-flex md:flex-col md:flex-nowrap gap-4`}>
                    <h5 className={`text-base text-white font-bold`}>Entreprise</h5>
                    <ul className={`inline-flex flex-col gap-2.5 my-4`}>
                        <li className={`cursor-pointer hover:text-indigo-400`}>À propos</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Carrières</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Blog</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Partenaires</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Contact</li>
                    </ul>
                </div>
                <div className={`md:inline-flex md:flex-col md:flex-nowrap gap-4`}>
                    <h5 className={`text-base text-white font-bold`}>Support</h5>
                    <ul className={`inline-flex flex-col gap-2.5 my-4`}>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Centre d'aide</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>FAQ</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Conditions d'utilisation</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Politique de confidentialité</li>
                        <li className={`cursor-pointer hover:text-indigo-400`}>Remboursement</li>
                    </ul>
                </div>
            </div>

            <div className={`sm:flex sm:flex-row w-full items-center justify-between text-center py-8 text-sm text-gray-500 border-t border-gray-800`}>
                <p>© 2026 DevShop. Tous droits réservés.</p>
                <ul className={`inline-flex flex-row max-sm:mt-3`}>
                    {svgPayment.map((s, i) => {
                        return (
                            <li
                                key={i}
                                className={`opacity-40 cursor-pointer hover:opacity-100 transition-all`}
                            >
                                {s}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
}
