import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function Layout({ children }) {

    return (
        <div className=' d-flex flex-column justify-content-between ' style={{ height: "100vh" }}>
            <div>
                <Header />
                <div className=' py-5'>
                    {children}
                </div>
            </div>
            <Footer />
        </div >

    )
}
