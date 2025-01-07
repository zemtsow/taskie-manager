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

    return (
        <div>
            {children}
        </div>
    )
}

export default Layout