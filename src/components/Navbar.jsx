"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image'; // Import Image component from Next.js
import {motion} from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
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
        <nav className='fixed top-0 left-0 right-0 z-100 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-20 p-4'>
                {!showName && (
                    <div onClick={toggleNameVisibility} className='cursor-pointer flex items-center'>
                          <Image src="/images/hero-image.jpeg" alt='hero image' className=" main-hero-img" width={75} height={75}/>
                          <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
   
                  <div className='col-span-7 place-self-center text-center sm:text-left'>
                    
          <h1 className='text-white mb-2 text-2xl lg:text-4xl font-extrabold'>
          <h1 className='text-white mb-2 text-2xl lg:text-4xl font-extrabold'>&nbsp; Role: 
          <TypeAnimation
              sequence={[
                " Software Engineer",
                1000,
                " Web Developer",
                1000,
                " Mobile Developer (Android)",
                1000,
                " UI/UX Designer",
                1000,
                " UI/UX Designer",
                1000,
                " 3D Models Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </h1>
          </h1>
          </div>
       
</motion.div>
                          </div>
                          
                )}

                {showName && (
                    <h3 onClick={toggleNameVisibility} className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold cursor-pointer'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-600 to-blue-400'>
                            Mirlan Nurbekov TESSSSST
                        </span>
                    </h3>
                )}

                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>

                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) =>(
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
