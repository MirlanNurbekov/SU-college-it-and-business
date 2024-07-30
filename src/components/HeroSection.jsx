"use client";
import React from 'react';
import AchievementsSection from '@/components/AchievementsSection';
import Link from 'next/link';
import Image from "next/image";
import Carousel from '@/components/Carousel';

const HeroSection = () => {
  return (
    <section className="lg:py-4">
      <br/>
      <div className="w-4/5 h-1 bg-blue-800 mx-auto"></div>
  
      <div>
        <br />
      </div>
      <div className="flex justify-center gap-8">
        <Link href="https://newinti.edu.my/" passHref>
          <Image 
            src="/images/INTI.png" 
            alt="INTI University" 
            width={800} 
            height={300} 
            className="image-frame"
          />
        </Link>
        <p className='text-[#000000] text-base md:text-lg lg:text-xl mb-6 text-center'>
          The International College of IT and Business at Salymbekov University offers a unique opportunity to earn a dual diploma from Malaysia, either from INTI International University or Lincoln University.
        </p>
        <Link href="https://lincoln.edu.my/" passHref>
          <Image 
            src="/images/Lincoln.png" 
            alt="Lincoln University" 
            width={800} 
            height={300} 
            className="image-frame"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
