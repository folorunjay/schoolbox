import { MapPin, Facebook, Linkedin, Instagram, Youtube, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Logo from "./logo";
import { useState } from "react";

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const sections = {
    Explore: [
      { label: "Student Portal", href: "#" },
      { label: "Job Portal", href: "#" },
    ],
    Academy: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    Community: [
      { label: "Events", href: "#" },
      { label: "Alumni Connect", href: "#" },
    ],
    Courses: [
      { label: "Frontend with React", href: "#" },
      { label: "Fullstack PERN", href: "#" },
      { label: "Backend Node.js", href: "#" },
      { label: "SQL Database", href: "#" },
      { label: "Django REST API", href: "#" },
      { label: "Python Beginners", href: "#" },
      { label: "Data Analysis Python", href: "#" },
    ],
    Corporate: [
      { label: "Microsoft Excel", href: "#" },
      { label: "Microsoft Outlook", href: "#" },
      { label: "Power BI Analysis", href: "#" },
    ],
  };

  const socialIcons = [
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Youtube, label: "YouTube", href: "#" },
  ];

  const quickLinks = ["Privacy Policy", "FAQ", "Contact", "Support", "Campus Tour"];

  return (
    <footer className="bg-secondary dark:bg-secondary/40 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-4 pt-8 space-y-4">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
          <div className="space-y-4 flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Logo />
              <div className="flex gap-2">
                {/* eslint-disable-next-line no-unused-vars */}
                {socialIcons.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-2 flex-1 max-w-md">
            <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            <div className="min-w-0">
              <h4 className="font-bold text-base mb-1">Address</h4>
              <address className="text-sm text-white/80 not-italic leading-relaxed break-words">
                First floor, 2B Yinusa Adeniji Street, opposite St. James Church, Unity Road, Off
                Toyin Street, Ikeja, Lagos, Nigeria.
              </address>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        <div className="lg:hidden space-y-2">
          {Object.entries(sections).map(([title, links]) => (
            <div key={title} className="border-b border-white/10">
              <button
                onClick={() => toggleSection(title)}
                className="w-full flex justify-between items-center py-3 text-left font-semibold text-base"
              >
                {title}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openSections[title] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSections[title] && (
                <ul className="pb-3 space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-white/80 hover:text-primary transition-colors block py-1"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {Object.entries(sections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-3">{title}</h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-white/80 hover:text-primary transition-colors leading-snug block py-1"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/70">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Anchorsoft Academy. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">
              Terms of Service
            </a>
            <span className="text-white/40">•</span>
            <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">
              Privacy Policy
            </a>
            <span className="text-white/40">•</span>
            <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
