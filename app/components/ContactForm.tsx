"use client";
import React from "react";
import { Button } from "./Button";

export const ContactForm: React.FC = () => {
  return (
    <form className="text-base min-w-60 w-[650px] max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="w-full leading-relaxed text-white max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
            <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter full name"
                className="flex gap-2.5 items-center px-4 py-4 mt-2 w-full rounded-md bg-gray-950 min-h-14"
              />
            </div>
            <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex gap-2.5 items-center px-4 py-4 mt-2 w-full rounded-md bg-gray-950 min-h-14"
              />
            </div>
          </div>
          <div className="mt-4 w-full max-md:max-w-full">
            <label htmlFor="company">Company Name (optional)</label>
            <input
              id="company"
              type="text"
              placeholder="Enter company name"
              className="flex gap-2.5 items-center px-4 py-4 mt-2 w-full rounded-md bg-gray-950 min-h-14 max-md:max-w-full"
            />
          </div>
          <div className="mt-4 w-full max-md:max-w-full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Write your message"
              className="flex gap-2.5 items-start px-4 pt-3.5 pb-28 mt-2 w-full rounded-md bg-gray-950 min-h-[151px] max-md:pb-24 max-md:max-w-full"
            />
          </div>
        </div>
        <Button className="w-full mt-8 flex items-center justify-center">Send Message</Button>
      </div>
    </form>
  );
};
