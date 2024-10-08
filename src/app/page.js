import Image from 'next/image';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ConnectSection from '@/components/ConnectSection';
import FaqSection from '@/components/FaqSection';
import Carousel from '@/components/Carousel';
import SpeachArea from '@/components/SpeachArea';
import HowToenroll from '@/components/HowToenroll';
import Footer from '@/components/Footer';
import TestingZone from '@/components/TestingZone';




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      

      <Navbar/>
      
      <div className='container mt-24 mx-auto px-12 py-4'>
      <br/>
      <br/>

        <Carousel />
        <HeroSection/>
        <SpeachArea/>
        <AboutSection/>
        
        <br/>
        <HowToenroll/>
        <FaqSection/>
        <ConnectSection/>
      </div>
      <Footer/>
    </main>
  )
}


 