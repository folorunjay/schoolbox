import Footer from "@/shared/footer";
import Navbar from "@/shared/navbar";
import BootcampsSection from "./bootcamps-section";
import CoursesCominSoon from "./courses-coming-soon";
import { FAQSection } from "./faq-section";
import FounderSection from "./founder-section";
import ContactSection from "./get-info-section";
import HeaderSection from "./header-section";
import QuizSection from "./quiz-section";
import TestimonialsSection from "./testimonials-section";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-y-10">
        <HeaderSection />
        <BootcampsSection />
        <QuizSection />
        <TestimonialsSection />
        <CoursesCominSoon />
        <ContactSection />
        <FounderSection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
