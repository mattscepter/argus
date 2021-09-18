import React from 'react';
import logo from './../../argus website/PNG/Logo Vectors.png'
import Hamburger from './Hamburger'

export default function MobileHeader() {
    return (
        <div className="w-full shadow-xl sticky top-0">
            <div className="h-16 lg:hidden bg-red-1 flex flex-row justify-between items-center">
                <img src={logo} alt="Logo of Argus Security" className="w-24 mx-4 my-3 fixed top-2 left-2" />
            </div>
            <Hamburger />
        </div>
    )
}
