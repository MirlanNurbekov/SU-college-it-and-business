import React from 'react';
import AchievementsSection from '@/components/AchievementsSection';
import Link from 'next/link';
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="lg:py-4">
      <div className="flex flex-col items-center justify-center"> {/* Centering content */}
        
        <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold text-center">
          Bachelor Degree in Science of Computing and IT, Coventry University, UK
        </h1>
        <h5></h5>
        <Image src="/images/cu.png" width={600} height={200} />
        <br/>
        <p className='text-[#ADB7BE] text-base md:text-lg lg:text-xl mb-6 text-center'>
          As a highly-educated software engineer with an extensive academic background and seven years of practical experience in software development, I am seeking a challenging role within a cutting-edge, 
          high-tech corporate setting. I aspire to collaborate with a team of equally driven professionals to fully leverage my considerable foundation and experience.
        </p>
        <AchievementsSection/>
        <div className="text-white flex flex-col md:flex-row justify-center items-center gap-2 py-0">
          <a href={"/#contact"} className='px-6 py-3 w-full md:w-fit rounded-full bg-blue-500 text-white hover:bg-lime-600 hover:font-bold mt-3 text-center'> HIRE ME
          </a>
          <a href="/images/Mirlan Nurbekov Resume.pdf" className='px-6 py-3 w-full md:w-fit rounded-full bg-white text-black hover:bg-teal-800 hover:text-white mt-3 text-center' download="Mirlan Nurbekov CV.pdf">
            Download my resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
