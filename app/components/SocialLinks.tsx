import React from "react";
import { FaBlog, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-8 items-start">
      <a href="https://biboswanroy.com/work" className="flex shrink-0 w-6 h-6" aria-label="Instagram">
        <FaBlog/>
      </a>
      <a href="https://www.linkedin.com/in/biboswanroy" className="flex shrink-0 w-6 h-6" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://x.com/Biboswan98" className="flex shrink-0 w-6 h-6" aria-label="Twitter">
        <FaTwitter />
      </a>
    </div>
  );
};
