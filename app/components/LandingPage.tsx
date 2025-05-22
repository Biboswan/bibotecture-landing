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
          <p className="mt-0 text-56 font-medium leading-[67px] max-md:mt-0 max-md:max-w-full max-md:text-2xl max-md:leading-[54px] text-[20px] lg:text-[56px]">
            We are creatives who focus on creating quality work that offers{" "}
            <strong>powerful solutions</strong>, combining great designs with
            functionality. We leverage AI tools systematicaly to reduce development time and cost without sacrificing quality. 
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
      <section className="flex overflow-hidden relative flex-col lg:flex-row gap-5 items-center self-stretch pt-0 pb-48 w-full min-h-[782px] px-5 lg:px-[100px] max-md:pt-0 max-md:pb-24 max-md:max-w-full">
        <div className="flex relative flex-col self-stretch my-auto min-w-60 w-[650px] max-md:max-w-full order-2 lg:order-1">
          <div className="w-full text-white max-md:max-w-full">
            <h2 className="text-6xl font-semibold leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              A11y Gradient
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 max-md:max-w-full">
              <p className="font-medium">
                A powerful tool for comprehensive accessibility testing of complex backgrounds.
              </p>
              
              <div className="space-y-3">
                <p>
                  While Chrome DevTools only analyzes contrast ratios against solid backgrounds, modern web design often uses:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Gradient backgrounds</li>
                  <li>Image overlays</li>
                  <li>Multi-colored elements</li>
                </ul>
              </div>

              <p>
                Our extension provides pixel-level contrast analysis, ensuring your text remains accessible regardless of background complexity. It evaluates:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Text-to-background contrast ratios</li>
                <li>Text border visibility</li>
                <li>Element border accessibility</li>
              </ul>
            </div>
          </div>
          <a 
            href="https://chromewebstore.google.com/detail/a11y-gradient/kokihagjmdkofdmahbcofpnkccigjmnm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="self-start mt-12 max-md:mt-10">
              Try out the beta extension
            </Button>
          </a>
        </div>
        <img
          src="/images/chrome-extension.png"
          alt="Chrome Extension Interface"
          className="object-contain self-stretch my-auto aspect-[1.56] min-w-60 w-[599px] max-md:max-w-full order-1 lg:order-2"
        />
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
            <div className="mt-6 space-y-6 text-lg leading-7 max-md:max-w-full">
              <p>
                Hi, I&apos;m Biboswan Roy — a product-first technologist passionate
                about building accessible and enduring digital experiences.
              </p>

              <p>
                I have led impactful projects at:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SentinelOne Inc - Led development of Unified Tagging Platform across 16 product lines</li>
                <li>Mozilla - Contributed to Firefox and Taskcluster CI framework</li>
                <li>Feats Aps - Verfifiable network based out of project history</li>
              </ul>

              <p>
                I specialize in building complex frontend architectures powering enterprise security solutions with React, NextJS, GraphQL, and TypeScript. With proven expertise in leading distributed teams and delivering high-impact features, I excel at collaborating asynchronously across time zones.
              </p>
            </div>
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

      <section id="contact" className="text-base min-w-60 w-[650px] max-md:max-w-full">
        <ContactForm />
        </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
}; 