import { Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function FounderSection() {
  return (
    <section className=" px-4 bg-background/10">
      <div className="max-w-6xl mx-auto">
        <Card className="shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="flex flex-col items-center min-w-[140px] mx-auto md:mx-0">
                <Avatar className="w-28 h-28 mb-4">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/4891236"
                    alt="Founder"
                  />
                  <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary/20 to-primary/10">
                    FN
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-lg font-bold text-foreground text-center mb-1">Founder Name</h3>
                <p className="text-sm text-muted-foreground text-center mb-3">Founder & CEO</p>

                <Button size="icon" className="bg-[#0077b5] hover:bg-[#006399]" asChild>
                  <a href="#" aria-label="LinkedIn Profile">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              <div className="flex-1 space-y-5">
                <blockquote className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                  <span className="text-primary text-4xl font-bold">"</span>I founded Anchorsoft
                  Academy because I believe every aspiring developer deserves access to world-class
                  training that transforms lives.
                  <span className="text-primary text-4xl font-bold">"</span>
                </blockquote>

                <p className="text-base text-foreground/90 leading-relaxed">
                  Our mission is simple yet powerful: to train exceptional software engineers who
                  are equipped to excel anywhere in the world or launch their own innovative tech
                  startups. We don't just teach code—we build problem solvers, innovators, and
                  leaders.
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Through hands-on projects, industry mentorship, and a practical curriculum, we
                  transform beginners into job-ready tech professionals in just 4-6 months. Join us
                  and become part of the next generation of top-notch engineers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
