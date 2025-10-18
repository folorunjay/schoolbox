import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "rc-image";
import imageHeader from "@/assets/image-intro.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Wura Ogundipe",
    role: "Software Developer",
    avatar: "/professional-woman-avatar.png",
    rating: 5,
    text: "When I decided to switch career into Software Development, Anchorsoft Academy stood out for its passion for producing strong full stack developers. Ten weeks in, I can confidently say it's the best decision I've made this year!",
  },
  {
    id: 2,
    name: "Emeka Mbachu",
    role: "Software Engineer",
    avatar: "/professional-man-avatar.png",
    rating: 5,
    text: "Anchorsoft has experienced tutors who made learning software development enjoyable. The instructors are patient, skilled, and truly dedicated. I'd recommend it to anyone serious about growing their tech career.",
  },
  {
    id: 3,
    name: "Chioma Okafor",
    role: "Full Stack Developer",
    avatar: "/professional-woman-developer.png",
    rating: 5,
    text: "The bootcamp experience at Anchorsoft was transformative. Real-world projects, strong mentorship, and hands-on learning gave me the confidence to thrive as a developer.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Get current and next testimonial for desktop
  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <section className="w-full bg-background/10 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Header Section */}
        <div className="space-y-3">
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-chart-2 mx-auto rounded-full" />
        </div>

        <div className="relative mt-8 sm:mt-10">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 xs:-left-3 sm:-left-4 md:-left-5 top-1/2 cursor-pointer -translate-y-1/2 bg-chart-2 text-white rounded-full p-1 xs:p-1.5 sm:p-2 hover:bg-chart-2/80 transition z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={25} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>

          <button
            onClick={next}
            className="absolute -right-4 xs:-right-3 sm:-right-4 md:-right-5 top-1/2 cursor-pointer -translate-y-1/2 bg-chart-2 text-white rounded-full p-1 xs:p-1.5 sm:p-2 hover:bg-chart-2/80 transition z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={25} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>

          {/* Testimonials Container */}
          <div className="max-w-sm mx-auto md:max-w-none">
            {/* Mobile: Single Card */}
            <div className="md:hidden">
              <Card className="p-5 bg-card min-h-[18rem] border border-border rounded-xl text-left hover:shadow-md transition flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={imageHeader}
                      alt={currentTestimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                      {currentTestimonial.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{currentTestimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="stroke-amber-300 fill-amber-300 text-chart-1"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-none flex-grow">
                  {currentTestimonial.text}
                </p>
              </Card>
            </div>

            {/* Desktop: Two Cards with Original Styling */}
            <div className="hidden md:grid md:grid-cols-2 gap-5 items-stretch">
              {/* First Card */}
              <Card className="p-5 bg-card min-h-[18rem] border border-border rounded-xl text-left hover:shadow-md transition flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={imageHeader}
                      alt={currentTestimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                      {currentTestimonial.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{currentTestimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="stroke-amber-300 fill-amber-300 text-chart-1"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-none flex-grow">
                  {currentTestimonial.text}
                </p>
              </Card>

              {/* Second Card - EXACT SAME STYLING */}
              <Card className="p-5 bg-card min-h-[18rem] border border-border rounded-xl text-left hover:shadow-md transition flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={imageHeader}
                      alt={nextTestimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                      {nextTestimonial.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{nextTestimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{nextTestimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(nextTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="stroke-amber-300 fill-amber-300 text-chart-1"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-none flex-grow">
                  {nextTestimonial.text}
                </p>
              </Card>
            </div>
          </div>

          {/* Mobile Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? "bg-chart-2" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
