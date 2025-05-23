import React from "react";

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
    <article className="flex flex-col lg:flex-row overflow-hidden gap-10 justify-between py-14 pr-24 pl-14 w-full rounded-2xl bg-gray-950 max-md:px-5 max-md:max-w-full">
      {/* Number column */}
      <div className="flex-shrink-0 flex items-start justify-start w-full lg:w-[80px] mb-8 lg:mb-0">
        <p className="text-lg font-semibold leading-tight">{number}</p>
      </div>
      {/* Text content column */}
      <div className="flex flex-col justify-between w-full lg:w-[510px] max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h3 className="text-3xl font-semibold leading-tight max-md:max-w-full">
            {title}
          </h3>
          <p className="mt-6 text-xl font-medium leading-8 max-md:max-w-full">
            {description}
          </p>
        </div>
        <a href="#contact" className="self-start mt-20 max-md:mt-10 flex items-center gap-2 px-8 py-3.5 font-medium uppercase rounded-md cursor-pointer border-b border-white text-white">
          Contact Us
          <span className="flex shrink-0 self-stretch my-auto w-5 h-5">→</span>
        </a>
      </div>
      {/* Image column */}
      <div className="flex items-center justify-center w-full lg:w-[296px] max-md:max-w-full mt-8 lg:mt-0">
        <img
          src={imageSrc}
          alt=""
          className="object-contain aspect-square w-[296px]"
        />
      </div>
    </article>
  );
};
