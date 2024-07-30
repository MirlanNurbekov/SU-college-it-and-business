"use client";
import React, { useState } from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import WhatsappIcon from "/public/whatsapp.png";
import GmailIcon from "/public/gmail.png";
import MobileIcon from "/public/mobile.png";

import Link from "next/link";
import Image from "next/image";

const ConnectSection = () => {
  const [showNumber, setShowNumber] = useState(false);

  const toggleNumberVisibility = () => {
    setShowNumber(!showNumber);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center my-12 py-4"
    >
      <div className="w-1/2 h-1 bg-blue-800 mx-auto"></div>
      <h5 className="text-xl font-bold text-black my-2 text-center">
        Contact
      </h5>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center'>
     SU contacts
      </p>
      <div className="flex flex-row gap-2 justify-center">
        {/* Centered social icons */}
        <Link href="https://github.com/MirlanNurbekov">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
        <Link href="https://wa.me/+60164707420">
            <Image src={WhatsappIcon} alt="WhatsApp Icon" width={45} height={45} />
        </Link>
        <Link href="mailto:mirlan96nurbekov@gmail.com">
            <Image src={GmailIcon} alt="Gmail Icon" width={45} height={45} />
        </Link>
        <div className="flex items-center">
          <a onClick={toggleNumberVisibility} style={{ cursor: 'pointer' }}>
            <Image src={MobileIcon} alt="Mobile Icon" width={45} height={45} />
          </a>
          {showNumber && (
            <span className="ml-2 text-lg">+996551999747</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
