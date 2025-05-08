"use client";

import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ServiceCard } from "./ServiceCard";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";
import { Button } from "./Button";
import { SocialLinks } from "./SocialLinks";
import { ScrollToTop } from "./ScrollToTop";

export const LandingPage = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-gray-950 font-['Montserrat'] px-5">
      <Header />
      <Hero />

      <section className="py-24 w-full text-white max-w-[1320px] max-md:max-w-full">
        <header className="pt-4 w-full">
          <div className="z-10 max-w-full text-base leading-tight uppercase w-[538px]">
            <div className="w-full border border-white border-solid min-h-px max-md:max-w-full" />
            <h2 className="mt-1 max-md:max-w-full">What We Do</h2>
          </div>
          <p className="mt-0 text-6xl font-medium leading-[67px] max-md:mt-0 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            We are creatives who focus on creating quality work that offers{" "}
            <strong>powerful solutions</strong>, combining great designs with
            functionality.
          </p>
        </header>

        <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <ServiceCard
            number="001"
            title="UI/UX Development Services"
            description="We create seamless and user-focused interfaces that elevate the entire product experience crafted with scalability and beauty in mind."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/040c1206e0937efd341acdaefb5511937f3556e0?placeholderIfAbsent=true&apiKey=908848c17fde48fcb02ed14c4772c70f"
          />
          <ServiceCard
            number="002"
            title="Accessibility Audit"
            description="Digital inclusion is not optional. We help you meet global accessibility standards (WCAG/ADA) to ensure your product is usable for everyone."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7873e3c54d6d2d4def1ec30b6f52c21177a062e4?placeholderIfAbsent=true&apiKey=908848c17fde48fcb02ed14c4772c70f"
          />
          <ServiceCard
            number="003"
            title="Chrome Extension Development"
            description="From ideation to deployment, we build high-performance Chrome extensions tailored to your business goals and user needs."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9943fa82bf45c0dd3114a3f40fbe2dc3d925b0?placeholderIfAbsent=true&apiKey=908848c17fde48fcb02ed14c4772c70f"
          />
        </div>
      </section>

      {/* <section className="py-24 w-full max-w-[1321px] max-md:max-w-full">
        <header className="max-w-full text-white w-[873px]">
          <h2 className="text-base leading-tight uppercase max-md:max-w-full">
            Our Work in Action
          </h2>
          <p className="mt-6 text-6xl font-medium leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            We&apos;ve helped startups and enterprises shape meaningful digital
            journeys.
          </p>
        </header>

        <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
            <div className="flex gap-10 justify-between items-center self-stretch my-auto text-base leading-relaxed text-white min-w-60 w-[316px]">
              <p className="self-stretch my-auto">Selected Projects</p>
              <p className="self-stretch my-auto">3 / 9</p>
            </div>
            <div className="flex gap-3 items-center self-stretch my-auto">
              <button
                className="flex gap-2.5 justify-center items-center self-stretch px-8 py-1 my-auto rounded-3xl bg-gray-950 rotate-[3.141592653589793rad] w-[88px] max-md:px-5"
                aria-label="Previous"
              >
                <span className="flex self-stretch my-auto w-6 min-h-6">←</span>
              </button>
              <button
                className="flex gap-2.5 justify-center items-center self-stretch px-8 py-1 my-auto rounded-3xl bg-gray-950 w-[88px] max-md:px-5"
                aria-label="Next"
              >
                <span className="flex self-stretch my-auto w-6 min-h-6">→</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 items-start mt-3 w-full text-white max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/26eb33b16d8a98ebc5d0f5c87124189f406a4b27?placeholderIfAbsent=true&apiKey=908848c17fde48fcb02ed14c4772c70f"
              alt=""
              className="object-contain shrink-0 rounded-xl aspect-[1.18] min-w-60 w-[315px]"
            />
            <ProjectCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bae27cd94d71d6aa54e333df4a1cc66b7e1ac742?placeholderIfAbsent=true&apiKey=908848c17fde48fcb02ed14c4772c70f"
              title="SaaS Dashboard UX Overhaul"
              description="Redesigned the user experience for a B2B SaaS analytics platform."
            />
            <ProjectCard imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7da38297f922f847b7631e167485534101f582a0?placeholderIfAbsent=true&apiKey=908848c17fde48fcb02ed14c4772c70f" isViewAll={true} />
          </div>
        </div>
      </section> */}

      <section className="flex overflow-hidden relative flex-col flex-wrap gap-5 items-center self-stretch px-36 py-48 w-full min-h-[782px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
          src="/images/chrome-extension.png"
          alt=""
          className="object-contain self-stretch my-auto aspect-[1.56] min-w-60 w-[599px] max-md:max-w-full"
        />
        <div className="flex relative flex-col self-stretch my-auto min-w-60 w-[650px] max-md:max-w-full">
          <div className="w-full text-white max-md:max-w-full">
            <h2 className="text-6xl font-semibold leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              Launching Soon Our Chrome Extension Beta
            </h2>
            <p className="mt-6 text-base leading-7 max-md:max-w-full">
              Get ready for something powerful. We&apos;re building an innovative
              Chrome extension that transforms how you interact with the web.{" "}
              <br />
              Stay tuned — early access opening soon.
            </p>
          </div>
          <Button className="self-start mt-12 max-md:mt-10">
            Join the Waitlist
          </Button>
        </div>
      </section>

      <section className="flex flex-wrap gap-10 items-end py-24 px-5 max-md:max-w-full">
        <img
          src="/images/me.jpg"
          alt="Founder"
          className="object-contain rounded-xl aspect-[0.83] min-w-60 w-[527px] max-md:max-w-full"
        />
        <div className="flex flex-col min-w-60 w-[580px] max-md:max-w-full">
          <div className="w-full text-white max-md:max-w-full">
            <h2 className="text-6xl font-semibold leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              Mind Behind Bibotecture
            </h2>
            <p className="mt-6 text-lg leading-7 max-md:max-w-full">
              Hi, I&apos;m [Founder&apos;s Name] — a product-first technologist passionate
              about building accessible and enduring digital experiences. With a
              decade in the tech industry, I founded Bibotecture to help
              businesses merge form and function in the digital era.
            </p>
          </div>
          <div className="flex gap-4 items-center self-start mt-8 max-md:max-w-full">
            <p className="self-stretch my-auto text-lg leading-relaxed text-white">
              Connect to the founder
            </p>
            <div className="shrink-0 self-stretch my-auto w-16 h-px border border-white border-solid" />
            <SocialLinks />
          </div>
        </div>
      </section>
      <section className="flex relative gap-5 items-start py-24 px-5 max-md:max-w-full">
        <div className="flex z-0 flex-col min-w-60 w-[618px] max-md:max-w-full">
          <div className="max-w-full text-white w-[618px]">
            <h2 className="text-6xl font-semibold leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              Let&apos;s Build the Future Together
            </h2>
            <p className="mt-6 text-lg leading-7 max-md:max-w-full">
              Have an idea, a product, or just want to chat about possibilities?
              Fill out the form, and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <div className="flex gap-4 items-center self-start mt-12 max-md:mt-10">
            <SocialLinks />
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
      <ScrollToTop />
    </main>
  );
}; 