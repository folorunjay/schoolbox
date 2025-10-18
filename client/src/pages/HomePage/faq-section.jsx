import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What is Anchorsoft Academy?",
    answer:
      "Anchorsoft Academy is an online learning platform that offers comprehensive bootcamps and courses in software development, data science, and other tech skills. We provide hands-on training with industry experts to help you launch or advance your tech career.",
  },
  {
    id: "item-2",
    question: "Is there a prerequisite for the bootcamps?",
    answer:
      "Most of our bootcamps are designed for beginners, but some advanced courses may require prior knowledge. We recommend checking the specific course requirements before enrolling. Our team can also help you determine the best starting point for your learning journey.",
  },
  {
    id: "item-3",
    question: "What are the different payment options?",
    answer:
      "We offer flexible payment plans including monthly subscriptions, quarterly payments, and one-time annual payments. We also provide financing options and scholarships for eligible candidates. Contact our support team for more details.",
  },
  {
    id: "item-4",
    question: "Do you offer job placement assistance?",
    answer:
      "Yes, we provide comprehensive career support including resume reviews, interview preparation, and job placement assistance. Our alumni have successfully landed positions at top tech companies.",
  },
  {
    id: "item-5",
    question: "Can I access the course materials after completion?",
    answer:
      "You will have lifetime access to all course materials, including video lectures, code repositories, and resources. This allows you to review and refresh your knowledge anytime.",
  },
];

export function FAQSection() {
  return (
    <section className="w-full bg-muted/20 py-10 ">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left cursor-pointer text-base font-semibold text-foreground hover:text-foreground/80">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
