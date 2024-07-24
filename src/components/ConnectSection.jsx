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
      {/* Removed unnecessary grid and absolute positioning */}
      <h5 className="text-xl font-bold text-white my-2 text-center">
        It would be my pleasure to work with you
      </h5>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center'>
      I am currently in the market for new professional engagements and am keen to explore opportunities that align with my expertise in full-stack web development. 
        I am readily available for discussions and can be reached through the contact methods listed in my portfolio. I welcome prospective employers to reach out to discuss 
        potential collaborations. Additionally, I encourage you to view my professional profile on various social media platforms to gain further insight into my professional background 
        and industry contributions. Your consideration is greatly appreciated, and I look forward to the possibility of contributing to your team success.
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
