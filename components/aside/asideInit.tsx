'use client';

// Components
import Aside from './aside';
// Store
import { HeaderStore } from '@/store/headerStore';

export default function AsideInit() {
    const btnState = HeaderStore.use.btnState();
    const shopState = HeaderStore.use.shopState();

    return (
        <>
            {btnState && (
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
            )}
        </>
    );
}
