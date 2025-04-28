import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="mt-9 w-full max-w-[1320px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-10 justify-between items-center text-lg leading-tight text-white mt-[573px] max-md:mt-10">
            <img
              src="/images/icons/scroll-down.svg"
              alt="Scroll indicator"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
            <p className="self-stretch my-auto">Scroll down</p>
          </div>
        </aside>

        <div className="ml-5 w-[73%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[70%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col pt-28 pb-80 text-8xl font-bold text-white leading-[96px] min-h-[738px] max-md:py-24 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover absolute inset-0 size-full"
                    poster="https://cdn.builder.io/api/v1/image/assets/TEMP/3624843a39ddc363bff7a6fd0baff2ef03bc7947?placeholderIfAbsent=true&apiKey=908848c17fde48fcb02ed14c4772c70f"
                  >
                    <source src="/videos/wavy.mp4" type="video/mp4" />
                  </video>
                  <h1 className="relative z-10">
                    Architecting Future—Proof Solutions
                  </h1>
                </div>
              </div>
              <div className="ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                <p className="mt-96 text-lg font-medium leading-7 text-white max-md:mt-10">
                  Crafting intelligent, scalable, and accessible digital
                  experiences that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
