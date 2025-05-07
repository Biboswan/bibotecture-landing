import React from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center self-stretch px-36 py-6 w-full text-base font-medium uppercase text-slate-950 max-md:px-5 max-md:max-w-full">
      <Logo className="object-contain shrink-0 self-stretch my-auto aspect-[3.82] w-[214px]" />
      <nav className="flex gap-4 items-center self-stretch my-auto">
        {/* <button
          className="flex shrink-0 self-stretch my-auto w-10 h-10"
          aria-label="Menu"
        >
          <img src="URL_menu" alt="" className="w-full h-full" />
        </button> */}
        <Button>Contact Us</Button>
      </nav>
    </header>
  );
};
