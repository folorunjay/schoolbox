import * as React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

import learnCourseImage from "../assets/illustration/learn-course.png";
import helpingImage from "../assets/illustration/helping.png";
import aboutUsImage from "../assets/illustration/about-us.png";

const courses = [
  {
    title: "Frontend Development with React",
    href: "/courses/frontend-react",
    description:
      "Learn to build modern, interactive user interfaces with React, including components, hooks, and state management.",
  },
  {
    title: "Fullstack Web Development with the PERN stack",
    href: "/courses/fullstack-pern",
    description:
      "Master full-stack development using PostgreSQL, Express, React, and Node.js to build complete web applications.",
  },
  {
    title: "Backend REST API Development with Node JS",
    href: "/courses/backend-nodejs",
    description:
      "Build scalable RESTful APIs using Node.js and Express, including authentication, database integration, and best practices.",
  },
  {
    title: "Database Management and Administration with SQL",
    href: "/courses/database-sql",
    description:
      "Learn SQL fundamentals, database design, queries, and administration for effective data management.",
  },
  {
    title: "Backend REST API Development with Django REST Framework",
    href: "/courses/backend-django",
    description:
      "Develop powerful REST APIs using Django and Django REST Framework with Python's robust ecosystem.",
  },
  {
    title: "Python Programming for Beginners",
    href: "/courses/python-beginners",
    description:
      "Start your programming journey with Python, covering syntax, data structures, functions, and fundamental programming concepts.",
  },
  {
    title: "Data Analysis with Python",
    href: "/courses/data-analysis-python",
    description:
      "Analyze and visualize data using Python libraries like Pandas, NumPy, and Matplotlib for data-driven insights.",
  },
];

export function NavigationMenuDemo() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Enhanced responsive detection
  useEffect(() => {
    const checkScreenSize = () => {
      // iPhone 5 has 320px width, so we'll use 768px as mobile breakpoint
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      // Auto-close mobile menu when switching to desktop
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Mobile menu component
  const MobileMenu = () => (
    <div
      className={`fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close button */}
      <div className="flex justify-between items-center p-4 border-b">
        <span className="text-lg font-semibold">Menu</span>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-accent"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile menu content */}
      <div className="p-4 space-y-4 overflow-y-auto h-full pb-20">
        {/* Courses */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Courses</h3>
          {courses.map((course, index) => (
            <Link
              key={course.href}
              to={course.href}
              className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="text-sm font-medium">{`${index + 1}. ${course.title}`}</div>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {course.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Program Types */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Program Types</h3>
          <Link
            to="/physical-class"
            className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="text-sm font-medium">Physical Class</div>
            <p className="text-xs text-muted-foreground mt-1">
              Attend in-person classes at designated locations with hands-on learning.
            </p>
          </Link>
          <Link
            to="/virtual-class"
            className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="text-sm font-medium">Virtual Class</div>
            <p className="text-xs text-muted-foreground mt-1">
              Join online classes from anywhere with live sessions and interactive materials.
            </p>
          </Link>
        </div>

        {/* Financial Aid - Show on mobile too */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Financial Aid</h3>
          <Link
            to="/student-loans"
            className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="text-sm font-medium">Student Loans</div>
            <p className="text-xs text-muted-foreground mt-1">
              Flexible loan options to fund your coding bootcamp education.
            </p>
          </Link>
          <Link
            to="/scholarships"
            className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="text-sm font-medium">Scholarships</div>
            <p className="text-xs text-muted-foreground mt-1">
              Merit-based and need-based scholarships for aspiring developers.
            </p>
          </Link>
        </div>

        {/* About Us - Show on mobile too */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">About Us</h3>
          <Link
            to="/about"
            className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="text-sm font-medium">About Us</div>
            <p className="text-xs text-muted-foreground mt-1">
              Learn about our mission, values, and commitment to tech education.
            </p>
          </Link>
          <Link
            to="/careers"
            className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="text-sm font-medium">Careers</div>
            <p className="text-xs text-muted-foreground mt-1">
              Join our team and help shape the future of software development education.
            </p>
          </Link>
        </div>

        {/* Simple links */}
        <div className="space-y-2 pt-4">
          <Link
            to="/job-portal"
            className="block p-3 rounded-lg bg-primary text-primary-foreground text-center font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Job Portal
          </Link>
          <Link
            to="/contact"
            className="block p-3 rounded-lg border border-primary text-primary text-center font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );

  // Mobile hamburger menu
  if (isMobile) {
    return (
      <>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-accent transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <MobileMenu />

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </>
    );
  }

  // Desktop navigation
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap gap-1">
        {/* Courses */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer text-sm md:text-base whitespace-nowrap">
            Courses
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-0 w-[280px] xs:w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] grid-cols-1 sm:grid-cols-2">
              {courses.map((component, _key) => (
                <ListItem
                  key={component.title}
                  title={`${_key + 1}. ${component.title}`}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Program Types */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer text-sm md:text-base whitespace-nowrap">
            Program Types
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-0 w-[380px] xs:w-[420px] md:w-[500px] lg:w-[550px] grid-cols-1 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 hidden lg:block">
                <div
                  style={{
                    backgroundImage: `url(${learnCourseImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="size-full min-h-[200px] rounded-lg"
                />
              </li>
              <ListItem to="/physical-class" title="Physical Class">
                Attend in-person classes at designated locations with hands-on learning.
              </ListItem>
              <ListItem to="/virtual-class" title="Virtual Class">
                Join online classes from anywhere with live sessions and interactive materials.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Financial Aid - Always visible now */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer text-sm md:text-base whitespace-nowrap">
            Financial Aid
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-0 w-[280px] xs:w-[320px] md:w-[400px] lg:w-[500px] grid-cols-1 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 hidden lg:block">
                <div
                  style={{
                    backgroundImage: `url(${helpingImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="size-[150px] mx-auto rounded-lg"
                />
              </li>
              <ListItem to="/student-loans" title="Student Loans">
                Flexible loan options to fund your coding bootcamp education.
              </ListItem>
              <ListItem to="/scholarships" title="Scholarships">
                Merit-based and need-based scholarships for aspiring developers.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About Us - Always visible now */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="cursor-pointer text-sm md:text-base whitespace-nowrap">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-0 w-[280px] xs:w-[320px] md:w-[400px] lg:w-[550px] grid-cols-1 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 hidden lg:block">
                <div
                  style={{
                    backgroundImage: `url(${aboutUsImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="size-[150px] mx-auto rounded-lg"
                />
              </li>
              <ListItem to="/about" title="About Us">
                Learn about our mission, values, and commitment to tech education.
              </ListItem>
              <ListItem to="/careers" title="Careers">
                Join our team and help shape the future of software development education.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Simple links */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/job-portal" className="text-sm md:text-base whitespace-nowrap">
              Job Portal
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/contact" className="text-sm md:text-base whitespace-nowrap">
              Contact Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Enhanced ListItem component with better responsive design
function ListItem({ title, children, to, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink className="p-3 py-2 h-full flex flex-col justify-center hover:bg-accent/50 transition-colors rounded-lg">
        <Link to={to}>
          <div className="text-sm xs:text-base leading-tight font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug mt-1">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
