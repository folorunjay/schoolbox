import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import Image from "rc-image";
import { Check, Clock, User, Coins } from "lucide-react";

import webDevImage from "@/assets/web-development-bootcamp.png";
import mobileDevImage from "@/assets/mobile-development-bootcamp.jpg";
import dataScienceDevImage from "@/assets/python-for-beginners-thumbnail.png";

export default function BootcampsSection() {
  const bootcamps = [
    {
      id: 1,
      title: "Frontend Development with React",
      duration: "N/A",
      level: "Absolute Beginners",
      price: "₦300,000",
      gradient: "from-blue-400 to-blue-600",
      image: webDevImage,
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
      discountPrice: "₦450,000",
      price: "₦500,000",
      gradient: "from-purple-400 to-purple-600",
      image: mobileDevImage,
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
      price: "₦150,000",
      discountPrice: "₦120,000",
      gradient: "from-green-100 to-green-300",
      image: dataScienceDevImage,
      variant: "default",
      buttonText: "Enroll Now",
      virtualClass: "No",
      details: "Detail here",
    },
  ];

  const highlights = ["Live 1-Person-1 Sessions", "Online & Onsite", "Flexible Schedules"];

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center px-4 space-y-5 bg-background/10">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Life-Changing Bootcamps
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bootcamps.map((bootcamp) => (
            <Card
              key={bootcamp.id}
              className="bg-card rounded-xl py-0  overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow flex flex-col"
            >
              <CardHeader
                className={`relative p-0   bg-gradient-to-br ${bootcamp.gradient} overflow-hidden aspect-[16/9]`}
              >
                <Image
                  src={bootcamp.image}
                  alt={bootcamp.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </CardHeader>

              <CardContent className=" space-y-3 flex-1 flex flex-col text-left">
                <h3 className="text-lg font-bold leading-tight text-foreground">
                  {bootcamp.title}
                </h3>

                <div className="space-y-1 text-sm text-muted-foreground flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-blue-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-foreground/80">Duration:</span>
                    <span className="text-foreground font-medium">{bootcamp.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-green-500">
                    <User className="w-4 h-4" />
                    <span className="text-foreground/80">Audience:</span>
                    <span className="text-foreground font-medium">{bootcamp.level}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-yellow-500" />
                    {bootcamp.discountPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-destructive decoration-double line-through">
                          {bootcamp.price}
                        </span>
                        <span className="text-foreground font-semibold text-lg">
                          {bootcamp.discountPrice}
                        </span>
                      </div>
                    ) : (
                      <span className="text-foreground font-medium">{bootcamp.price}</span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 mt-auto">
                <Button variant={bootcamp.variant} className="w-full">
                  {bootcamp.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-5">
          <Button variant="outline" size="lg" className="px-8 border-muted-foreground">
            View All Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
