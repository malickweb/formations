const data = [
    {
        title: <h5 className={`font-bold py-3`}>Contenu à jour</h5>,
        texte: <p className={`text-sm`}>Formations régulièremnt mises à jour avec les dernières versions</p>,
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className={`size-8 text-indigo-400`}
            >
                <path
                    fillRule="evenodd"
                    d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        title: <h5 className={`font-bold py-3`}>Projets pratiques</h5>,
        texte: <p className={`text-sm`}>Apprenez en construisant des projets concrets et réels</p>,
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className={`size-8 text-indigo-400`}
            >
                <path
                    fillRule="evenodd"
                    d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        title: <h5 className={`font-bold py-3`}>Accès à vie</h5>,
        texte: <p className={`text-sm`}>Accédez à vos formations quand vous voulez, pour toujours</p>,
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className={`size-8 text-indigo-400`}
            >
                <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25A.75.75 0 0 1 8 7.5h2.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM5.75 9.5a.75.75 0 0 0 0 1.5H8a.75.75 0 0 0 0-1.5H5.75Z" />
                <path
                    fillRule="evenodd"
                    d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        title: <h5 className={`font-bold py-3`}>Support 24/7</h5>,
        texte: <p className={`text-sm`}>Une communauté active et un support réactif</p>,
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className={`size-8 text-indigo-400`}
            >
                <path
                    fillRule="evenodd"
                    d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.293 5.293a1 1 0 1 1 .99 1.667c-.459.134-1.033.566-1.033 1.29v.25a.75.75 0 1 0 1.5 0v-.115a2.5 2.5 0 1 0-2.518-4.153.75.75 0 1 0 1.061 1.06Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
];

export default function SectionBottom() {
    return (
        <section className={`w-full bg-gray-900/50 border-t border-b border-gray-800 py-16`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16`}>
                <h3 className={`text-2xl font-bold text-center`}>Pourquoi choisir DevShop ?</h3>
                <p className={` my-8 text-md text-center text-gray-400`}>Des formations conçues par des experts pour vous aider à réussir votre carrière en développement web.</p>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 py-6 text-center`}>
                    {data.map((d, i) => {
                        return (
                            <div
                                key={i}
                                className={`justify-items-center bg-gray-900 border border-gray-800 rounded-2xl py-6`}
                            >
                                <div className={`p-4 rounded-2xl bg-indigo-600/10`}>{d.svg}</div>
                                {d.title} {d.texte}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
