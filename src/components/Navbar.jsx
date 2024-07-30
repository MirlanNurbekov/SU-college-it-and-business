"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image'; 

const navLinks = [
    {
        title: "About our College",
        path: "#about",
    },
    {
        title: "Applying",
        path: "#projects",
    },
    {
        title: "FAQ",
        path: "#faq",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-[#ffffff] bg-opacity-100'>
            <div className="w-full h-5 bg-blue-800"></div>

            <div className='flex flex-wrap items-center justify-between mx-auto px-10 py-4'>
                <Link href="/">
                    <Image src="/images/SUlogo.PNG" alt='hero image' className="main-hero-img cursor-pointer" width={450} height={220} />
                </Link>

                <div className="flex items-center">
                    <div className='menu hidden md:block md:w-auto'>
                        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-4 mt-0'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-1 h-16 bg-blue-800 mx-4"></div>
                    <div className='flex flex-col space-y-0'>
                        <Link href="/" className='text-black font-bold p-1 hover:text-blue-800'>
                            EN
                        </Link>
                        <Link href="/ru" className='text-black font-bold p-1 hover:text-blue-800'>
                            RU
                        </Link>
                        <Link href="/kg" className='text-black font-bold p-1 hover:text-blue-800'>
                            KG
                        </Link>
                    </div>
                </div>

                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-blue hover:border-black"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-blue hover:border-black"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
            <div className="w-full h-1 bg-blue-800"></div>
        </nav>
    );
};

export default Navbar;
