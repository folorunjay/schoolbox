import BgIcons from "@/components/bg-with-icons";
import { Button } from "@/components/ui/button";
import Navbar from "@/shared/navbar";
import imageHeader from "@/assets/image-intro.png";
import Image from "rc-image";
import { Globe } from "lucide-react";
import BootcampsSection from "./bootCampsSection";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full flex flex-col items-center justify-center text-center py-14 px-4 space-y-5">
        <BgIcons /> {/* icons now contained to this div */}
        <h3 className="text-lg z-60 md:text-3xl font-semibold text-foreground/90 tracking-wide uppercase ">
          Become a Professional
        </h3>
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary z-60">SOFTWARE ENGINEER</h2>
        <p className=" z-60 text-base md:text-lg font-medium text-foreground">
          in just <span className="font-semibold text-secondary-foreground">4–6 months</span>
        </p>
        <p className="text-2xl md:text-base max-w-xl leading-relaxed z-60 mt-2">
          Learn <span className="font-semibold text-foreground">Frontend</span>,{" "}
          <span className="font-semibold text-foreground">Backend</span> and{" "}
          <span className="font-semibold text-foreground">Fullstack Development</span> — from zero
          to hero with real-world projects and mentorship.
        </p>
        <Button size="lg" className="mt-2 min-w-[18rem] text-lg z-60">
          Join the Bootcamp
        </Button>
        <div className="relative w-fit flex justify-center mt-6 md:mt-8 mx-auto">
          {/* Left dots - top */}
          <div className="absolute -left-2 md:-left-4 top-8 md:top-12 grid grid-cols-3 gap-1 md:gap-1.5">
            {[...Array(24)].map((_, i) => (
              <div
                key={`left-top-${i}`}
                className="w-1 h-1 md:w-1.5 md:h-1.5 bg-amber-300 rounded-sm"
              />
            ))}
          </div>

          {/* Left dots - bottom */}
          <div className="absolute -left-6 md:-left-10 bottom-8 md:bottom-12 grid grid-cols-8 gap-1 md:gap-1.5">
            {[...Array(24)].map((_, i) => (
              <div
                key={`left-bottom-${i}`}
                className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-500 rounded-sm"
              />
            ))}
          </div>

          <Image
            src={imageHeader}
            className="w-full max-w-lg object-contain rounded-xl shadow-xl"
            alt="Hero illustration"
          />

          {/* Green Badge Overlay */}
          <div className="absolute -left-4 sm:-left-8 md:-left-16 lg:-left-20 bottom-16 sm:bottom-20 md:bottom-24 bg-green-700 text-white px-4 py-3 md:px-6 md:py-4 opacity-95 rounded-xl md:rounded-2xl shadow-2xl border-2 md:border-4 border-white max-w-[160px] sm:max-w-[180px] md:max-w-[200px]">
            <div className="text-[10px] md:text-xs font-medium mb-1">We train</div>
            <div className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 leading-tight">
              TOP NOTCH
              <br />
              ENGINEERS
            </div>
            <div className="flex gap-0.5 md:gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-current text-amber-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Right dots - top (symmetrical to left-bottom) */}
          <div className="absolute -right-6 md:-right-10 top-8 md:top-12 grid grid-cols-8 gap-1 md:gap-1.5">
            {[...Array(24)].map((_, i) => (
              <div
                key={`right-top-${i}`}
                className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-sm"
              />
            ))}
          </div>

          {/* Right dots - bottom (symmetrical to left-top) */}
          <div className="absolute -right-2 md:-right-4 bottom-8 md:bottom-12 grid grid-cols-3 gap-1 md:gap-1.5">
            {[...Array(24)].map((_, i) => (
              <div
                key={`right-bottom-${i}`}
                className="w-1 h-1 md:w-1.5 md:h-1.5 bg-red-400 rounded-sm"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 text-foreground">
          <Globe />
          <p className="text-base md:text-lg font-semibold underline cursor-pointer ">
            www.anchorsoftacademy.com
          </p>
        </div>
      </div>
      {/* Bootcamps Section */}
      <BootcampsSection />
    </div>
  );
}
