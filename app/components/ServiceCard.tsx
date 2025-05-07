import React from "react";
import { Button } from "./Button";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  imageSrc,
}) => {
  return (
    <article className="flex overflow-hidden flex-wrap gap-10 justify-between py-14 pr-24 pl-14 w-full rounded-2xl bg-gray-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between h-full min-w-60 w-[778px] max-md:max-w-full">
        <p className="self-start text-lg font-semibold leading-tight">
          {number}
        </p>
        <div className="flex flex-col justify-between min-w-60 w-[510px] max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <h3 className="text-3xl font-semibold leading-tight max-md:max-w-full">
              {title}
            </h3>
            <p className="mt-6 text-xl font-medium leading-8 max-md:max-w-full">
              {description}
            </p>
          </div>
          <Button variant="outline" className="self-start mt-20 max-md:mt-10">
            Contact Us
            <span className="flex shrink-0 self-stretch my-auto w-5 h-5">
              →
            </span>
          </Button>
        </div>
      </div>
      <div className="flex min-w-60 w-[778px] max-md:max-w-full justify-center">
        <img
          src={imageSrc}
        alt=""
          className="object-contain self-start aspect-square min-w-60 w-[296px]"
        />
      </div>
    </article>
  );
};
