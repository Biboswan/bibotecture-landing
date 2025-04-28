import React from "react";

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-8 items-start">
      <a href="#" className="flex shrink-0 w-6 h-6" aria-label="Instagram">
        <img src="URL_instagram" alt="Instagram" className="w-full h-full" />
      </a>
      <a href="#" className="flex shrink-0 w-6 h-6" aria-label="LinkedIn">
        <img src="URL_linkedin" alt="LinkedIn" className="w-full h-full" />
      </a>
      <a href="#" className="flex shrink-0 w-6 h-6" aria-label="Twitter">
        <img src="URL_twitter" alt="Twitter" className="w-full h-full" />
      </a>
    </div>
  );
};
