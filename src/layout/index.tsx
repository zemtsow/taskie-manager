import Footer from '@/components/Footer';
import { analytics } from '@/utils';
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {

    React.useLayoutEffect(() => {
        const locale: string = localStorage.getItem('locale') as string;
        if (!localStorage.getItem('locale')) {
            localStorage.setItem('locale', locale)
        } else {
            localStorage.setItem('locale', locale)
        }
    }, [])

    React.useEffect(() => {
        if (analytics) {
            console.log("Firebase Analytics initialized");
        }
    }, []);

    return (
        <div>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout