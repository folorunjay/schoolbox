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
    text: "When I decided to switch career into Software Development, Anchorsoft Academy stood out for its passion for producing strong full stack developers. Ten weeks in, I can confidently say it’s the best decision I’ve made this year!",
  },
  {
    id: 2,
    name: "Emeka Mbachu",
    role: "Software Engineer",
    avatar: "/professional-man-avatar.png",
    rating: 5,
    text: "Anchorsoft has experienced tutors who made learning software development enjoyable. The instructors are patient, skilled, and truly dedicated. I’d recommend it to anyone serious about growing their tech career.",
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
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const visible = [testimonials[index], testimonials[(index + 1) % testimonials.length]];

  return (
    <section className="w-full bg-background/10  px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Testimonials</h2>
          <div className="w-16 h-1 bg-chart-2 mx-auto rounded-full" />
        </div>

        <div className="relative mt-10">
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2  cursor-pointer -translate-y-1/2 bg-chart-2 text-white rounded-full p-2 hover:bg-chart-2/80 transition"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 cursor-pointer  -translate-y-1/2 bg-chart-2 text-white rounded-full p-2 hover:bg-chart-2/80 transition"
          >
            <ChevronRight size={30} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {visible.map(({ id, name, role, rating, text }) => (
              <Card
                key={id}
                className="p-5 bg-card min-h-[18rem] border border-border rounded-xl text-left hover:shadow-md transition flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={imageHeader} alt={name} className="object-cover" />
                    <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                      {name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{name}</h3>
                    <p className="text-sm text-muted-foreground">{role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="stroke-amber-300 fill-amber-300 text-chart-1"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-none flex-grow">
                  {text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
