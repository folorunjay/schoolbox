import imageHeader from "@/assets/image-intro.png";
import BgIcons from "@/components/bg-with-icons";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Image from "rc-image";

const HeaderSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center py-6 xs:py-8 sm:py-10 px-4 xs:px-6 space-y-4 xs:space-y-5 sm:space-y-6">
      <BgIcons /> {/* icons now contained to this div */}
      {/* Headings */}
      <h3 className="text-base xs:text-lg sm:text-lg md:text-3xl font-semibold text-foreground/90 tracking-wide uppercase z-60">
        Become a Professional
      </h3>
      <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-5xl font-extrabold text-primary z-60 leading-tight">
        SOFTWARE ENGINEER
      </h2>
      {/* Duration */}
      <p className="z-60 text-sm xs:text-base sm:text-base md:text-lg font-medium text-foreground">
        in just <span className="font-semibold text-secondary-foreground">4–6 months</span>
      </p>
      {/* Description */}
      <p className="text-lg xs:text-xl sm:text-xl md:text-base max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl leading-relaxed z-60 mt-1 xs:mt-2 px-2 xs:px-0">
        Learn <span className="font-semibold text-foreground">Frontend</span>,{" "}
        <span className="font-semibold text-foreground">Backend</span> and{" "}
        <span className="font-semibold text-foreground">Fullstack Development</span> — from zero to
        hero with real-world projects and mentorship.
      </p>
      {/* CTA Button */}
      <Button
        size="lg"
        className="mt-1 xs:mt-2 min-w-[16rem] xs:min-w-[18rem] text-base xs:text-lg z-60"
      >
        Join the Bootcamp
      </Button>
      {/* Image Container with Decorative Elements */}
      <div className="relative w-fit flex justify-center mt-4 xs:mt-5 sm:mt-6 md:mt-8 mx-auto max-w-[90%] xs:max-w-[85%] sm:max-w-[80%] md:max-w-none">
        {/* Left dots - top */}
        <div className="absolute -left-1 xs:-left-2 sm:-left-2 md:-left-4 top-4 xs:top-6 sm:top-8 md:top-12 grid grid-cols-3 gap-0.5 xs:gap-1 sm:gap-1 md:gap-1.5">
          {[...Array(24)].map((_, i) => (
            <div
              key={`left-top-${i}`}
              className="w-1 h-1 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 md:w-1.5 md:h-1.5 bg-amber-300 rounded-sm"
            />
          ))}
        </div>

        {/* Left dots - bottom */}
        <div className="absolute -left-4 xs:-left-5 sm:-left-6 md:-left-10 bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 grid grid-cols-8 gap-0.5 xs:gap-1 sm:gap-1 md:gap-1.5">
          {[...Array(24)].map((_, i) => (
            <div
              key={`left-bottom-${i}`}
              className="w-1 h-1 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 md:w-1.5 md:h-1.5 bg-green-500 rounded-sm"
            />
          ))}
        </div>

        {/* Main Image */}
        <Image
          src={imageHeader}
          className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg object-contain rounded-lg xs:rounded-xl sm:rounded-xl shadow-lg xs:shadow-xl"
          alt="Hero illustration"
        />

        {/* Green Badge Overlay */}
        <div className="absolute -left-2 xs:-left-3 sm:-left-4 md:-left-16 lg:-left-20 bottom-10 xs:bottom-12 sm:bottom-14 md:bottom-24 bg-green-700 text-white px-2 xs:px-3 sm:px-4 md:px-6 py-2 xs:py-2.5 sm:py-3 md:py-4 opacity-95 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl shadow-lg xs:shadow-xl sm:shadow-2xl border xs:border-2 sm:border-2 md:border-4 border-white max-w-[120px] xs:max-w-[140px] sm:max-w-[160px] md:max-w-[200px]">
          <div className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-medium mb-0.5 xs:mb-1">
            We train
          </div>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-0.5 xs:mb-1 sm:mb-2 leading-tight">
            TOP NOTCH
            <br />
            ENGINEERS
          </div>
          <div className="flex gap-0.5 xs:gap-1 sm:gap-1 md:gap-1 justify-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-current text-amber-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Right dots - top (symmetrical to left-bottom) */}
        <div className="absolute -right-4 xs:-right-5 sm:-right-6 md:-right-10 top-4 xs:top-6 sm:top-8 md:top-12 grid grid-cols-8 gap-0.5 xs:gap-1 sm:gap-1 md:gap-1.5">
          {[...Array(24)].map((_, i) => (
            <div
              key={`right-top-${i}`}
              className="w-1 h-1 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 md:w-1.5 md:h-1.5 bg-primary rounded-sm"
            />
          ))}
        </div>

        {/* Right dots - bottom (symmetrical to left-top) */}
        <div className="absolute -right-1 xs:-right-2 sm:-right-2 md:-right-4 bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 grid grid-cols-3 gap-0.5 xs:gap-1 sm:gap-1 md:gap-1.5">
          {[...Array(24)].map((_, i) => (
            <div
              key={`right-bottom-${i}`}
              className="w-1 h-1 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 md:w-1.5 md:h-1.5 bg-red-400 rounded-sm"
            />
          ))}
        </div>
      </div>
      {/* Website Link */}
      <div className="flex items-center gap-1 xs:gap-2 mt-2 xs:mt-3 text-foreground">
        <Globe className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" />
        <p className="text-sm xs:text-base sm:text-base md:text-lg font-semibold underline cursor-pointer">
          www.anchorsoftacademy.com
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
