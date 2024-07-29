"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image'; 
import { motion } from "framer-motion";

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
    const [showName, setShowName] = useState(false);

    const toggleNameVisibility = () => {
        setShowName(!showName);
    };

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-[#ffffff] bg-opacity-100'>
        <div className="w-full h-5 bg-blue-800"></div>

            <div className='flex flex-wrap items-center justify-between mx-auto px-20 p-4'>
            <Link href="/">
                        <Image src="/images/hero-image.jpeg" alt='hero image' className="main-hero-img cursor-pointer" width={100} height={100} />
                    </Link>
                <div className='flex-grow ml-4'>
                    <h1 className='text-black text-2xl font-bold'>Salymbekov University</h1>
                    <h3 className='text-black'>International College of IT and Business</h3>
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

                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex flex-col space-y-0 mr-4 ml-8'>
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
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
            <div className="w-full h-1 bg-blue-800"></div>
        </nav>
    );
};

export default Navbar;
