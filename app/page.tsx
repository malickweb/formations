// Components
// Header
import Header from '@/components/header/header';
import AsideInit from '@/components/aside/asideInit';

// Section
import SectionTop from '@/components/section/sectionTop';
import SectionCard from '@/components/section/sectionCard';
import SectionBottom from '@/components/section/sectionBottom';
import SectionNewsLetter from '@/components/section/sectionNewsLetter';
// Footer
import Footer from '@/components/footer/footer';
// Formulaire
import Formulaire from '@/components/formulaire/formulaire';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
            <Header />
            <AsideInit />
            {/* {btnState && (
                <Aside
                    state={btnState}
                    nameState={'btnState'}
                />
            )}
            {shopState && (
                <div className={`max-w-75`}>
                    <Aside
                        state={shopState}
                        nameState={'shopState'}
                        direction="right"
                        className={`max-w-75`}
                        size={`md`}
                    />
                </div>
            )} */}
            <SectionTop />
            <SectionCard />
            <SectionBottom />
            <SectionNewsLetter />
            <Footer />
            {/* <Formulaire />
            <Products /> */}
        </div>
    );
}
