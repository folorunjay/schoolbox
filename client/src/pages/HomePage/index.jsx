import BgIcons from "@/components/bg-with-icons";
import { Button } from "@/components/ui/button";
import Navbar from "@/shared/navbar";
import imageHeader from "@/assets/image-intro.png";
import Image from "rc-image";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="relative w-full flex flex-col items-center justify-center text-center py-14 px-4 space-y-5">
        <BgIcons /> {/* icons now contained to this div */}
        <h3 className="text-lg md:text-3xl font-semibold text-foreground/90 tracking-wide uppercase ">
          Become a Professional
        </h3>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">SOFTWARE ENGINEER</h2>
        <p className="text-base md:text-lg font-medium text-foreground">
          in just <span className="font-semibold text-foreground">4–6 months</span>
        </p>
        <p className="text-2xl md:text-base max-w-xl leading-relaxed mt-2">
          Learn <span className="font-semibold text-foreground">Frontend</span>,{" "}
          <span className="font-semibold text-foreground">Backend</span> and{" "}
          <span className="font-semibold text-foreground">Fullstack Development</span> — from zero
          to hero with real-world projects and mentorship.
        </p>
        <Button size="lg" className="mt-2 min-w-[18rem] text-lg">
          Join the next batch
        </Button>
        <div className="relative w-full flex justify-center mt-6 md:mt-8">
          <div
            className="relative w-full max-w-lg"
            style={{
              backgroundImage:
                'url(data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3e%3crect width="4" height="4" style="fill:#000000" /%3e%3c/svg%3e)',
              backgroundRepeat: "repeat-y",
              backgroundPosition: "left center",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          >
            <Image
              src={imageHeader}
              className="w-full object-contain rounded-xl shadow-xl"
              alt="Hero illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
}
