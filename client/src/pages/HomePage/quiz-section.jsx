import quizImage from "@/assets/quizImage.png";
import { Button } from "@/components/ui/button";
import Image from "rc-image";
export default function QuizSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center py-5  px-6 space-y-5 bg-muted/20">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 ">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={quizImage}
              alt="Quiz illustration"
              className="size-full rounded-xl dark:brightness-70 object-contain shadow-md"
            />
          </div>

          <div className="text-center md:text-left max-w-xl space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Not sure where to begin?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Click the button below to answer a few questions and receive personalized career
              advice and course suggestions.
            </p>
            <Button size="lg" className={"px-12"}>
              Take the Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
