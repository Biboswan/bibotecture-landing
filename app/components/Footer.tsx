import React from "react";
import { SocialLinks } from "./SocialLinks";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="relative self-stretch px-36 pt-32 pb-8 w-full text-white bg-gray-950 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex z-0 flex-wrap gap-10 justify-between items-start w-full text-lg font-semibold leading-relaxed whitespace-nowrap max-md:max-w-full">
        <div className="font-medium w-[225px]">
          <Logo className="object-contain max-w-full aspect-[3.82] w-[214px]" />
          <address className="mt-6 w-full not-italic">
            <a href="mailto:bibotecture@gmail.com">bibo@biboswanroy.com</a>
            <a href="tel:+971551755470" className="block mt-3">
              +447537169515
            </a>
            <p className="mt-3">
              128 City Road, London, England
              <br />
              EC1V2NJ, UK
            </p>
          </address>
        </div>
        <nav className="w-[230px]">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li className="mt-4">
              <a href="#services">Services</a>
            </li>
            <li className="mt-4">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="mt-4">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="w-[230px]">
          <SocialLinks />
        </div>
      </div>
      <div className="flex z-0 flex-wrap gap-10 justify-between items-end mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <h2 className="text-7xl font-bold leading-[88px] w-[746px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          Your Vision. <br />
          Our Architecture.
        </h2>
        <p className="text-lg font-medium leading-7 w-[230px]">
          © 2025 Bibotecture. <br />
          All rights reserved.
        </p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e858417da248de0ec98379f269b62f9308ec7e?placeholderIfAbsent=true&apiKey=908848c17fde48fcb02ed14c4772c70f"
        alt=""
        className="object-contain absolute right-0 bottom-0 z-0 max-w-full aspect-[0.62] h-[251px] w-[153px]"
      />
    </footer>
  );
};
