import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import Image from "rc-image";
import imageHeader from "@/assets/image-intro.png";
import { Check, Clock, User, DollarSign, Coins } from "lucide-react";

export default function BootcampsSection() {
  const bootcamps = [
    {
      id: 1,
      title: "Frontend Development with React",
      duration: "N/A",
      level: "Absolute Beginners",
      price: "₦300,000",
      gradient: "from-blue-400 to-blue-600",
      image: "/frontend-react.png",
      variant: "default",
      buttonText: "Enroll Now",
      virtualClass: "No",
      details: "Detail here",
    },
    {
      id: 2,
      title: "Fullstack Web Development with the PERN stack",
      duration: "N/A",
      level: "Absolute Beginners",
      price: "₦450,000 - ₦500,000",
      gradient: "from-purple-400 to-purple-600",
      image: "/pern-stack.png",
      variant: "default",
      buttonText: "Enroll Now",
      virtualClass: "No",
      details: "Detail here",
    },
    {
      id: 3,
      title: "Python Programming for Beginners",
      duration: "N/A",
      level: "Absolute Beginners",
      price: "₦120,000 - ₦150,000",
      gradient: "from-green-400 to-green-600",
      image: "/python-beginners.png",
      variant: "default",
      buttonText: "Enroll Now",
      virtualClass: "No",
      details: "Detail here",
    },
  ];

  const highlights = ["Live 1-Person-1 Sessions", "Online & Onsite", "Flexible Schedules"];

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center py-14 px-4 space-y-5 bg-background/10">
      <div className="w-[80%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Life-Changing Bootcamps
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-6 h-6  text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bootcamp Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bootcamps.map((bootcamp, idx) => (
            <Card
              key={idx}
              className="bg-card rounded-xl py-0 gap-1 overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow flex flex-col"
            >
              <CardHeader
                className={`p-0 h-32 md:h-40 bg-gradient-to-br ${bootcamp.gradient} overflow-hidden relative`}
              >
                <Image
                  src={imageHeader}
                  alt={bootcamp.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </CardHeader>

              <CardContent className="p-3 space-y-3 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-left leading-tight text-foreground">
                  {bootcamp.title}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Duration : {bootcamp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Audience : {bootcamp.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4" />
                    <span>Price: {bootcamp.price}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-3 mt-auto">
                <Button variant={bootcamp.variant} className="w-full">
                  {bootcamp.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
