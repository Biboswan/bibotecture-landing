import React from "react";
import { Button } from "./Button";

interface ProjectCardProps {
  imageSrc: string;
  title?: string;
  description?: string;
  isViewAll?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  isViewAll = false,
}) => {
  if (isViewAll) {
    return (
      <div className="flex flex-col justify-between items-center text-base font-medium leading-relaxed min-h-[389px] min-w-60 w-[315px]">
        <img
          src={imageSrc}
          alt=""
          className="object-contain max-w-full rounded-xl aspect-[1.18] w-[315px]"
        />
        <Button variant="outline" className="mt-24 max-md:mt-10">
          All Projects
          <span className="flex shrink-0 self-stretch my-auto w-5 h-5">→</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex overflow-hidden relative flex-col flex-1 shrink px-4 pt-96 pb-4 rounded-xl basis-0 min-h-[596px] min-w-60 max-md:pt-24 max-md:max-w-full">
      <img
        src={imageSrc}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex overflow-hidden relative items-start p-6 w-full rounded-lg bg-gray-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-h-[115px] min-w-60 max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
            <p className="mt-3 text-base leading-relaxed max-md:max-w-full">
              {description}
            </p>
          </div>
          <Button variant="outline" className="self-start mt-5">
            View full project
            <span className="flex shrink-0 self-stretch my-auto w-5 h-5">
              →
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
