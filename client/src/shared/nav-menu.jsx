import * as React from "react";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

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
import aboutUsImage from '../assets/illustration/about-us.png'

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
  const isMobile = false;

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap  ">
        <NavigationMenuItem>
          <NavigationMenuTrigger className={"cursor-pointer"}>Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-0 sm:w-[500px] md:w-[600px] md:grid-cols-2 lg:w-[700px]">
              {courses.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={"cursor-pointer"}>Program Types</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div
                  style={{
                    backgroundImage: `url(${learnCourseImage})`,
                    backgroundSize: "cover", // cover the whole element
                    backgroundPosition: "center", // center the image
                    display: "block", // ensure it has width/height
                  }}
                  className="size-full"
                  asChild
                ></div>
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

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className={"cursor-pointer"}>Financial Aid</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div
                  style={{
                    backgroundImage: `url(${helpingImage})`,
                    backgroundSize: "cover", // cover the whole element
                    backgroundPosition: "center", // center the image
                    display: "block", // ensure it has width/height
                    margin: "0 auto",
                  }}
                  className="size-[150px]"
                  asChild
                ></div>
              </li>
              <ListItem to="/physical-class" title="Student Loans">
                Flexible loan options to fund your coding bootcamp education.
              </ListItem>

              <ListItem to="/virtual-class" title="Scholarships">
                Merit-based and need-based scholarships for aspiring developers.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className={"cursor-pointer"}>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div
                  style={{
                    backgroundImage: `url(${aboutUsImage})`,
                    backgroundSize: "cover", // cover the whole element
                    backgroundPosition: "center", // center the image
                    display: "block", // ensure it has width/height
                    margin: "0 auto",
                  }}
                  className="size-[150px] p-5"
                  asChild
                ></div>
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
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/docs">Job Portal</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/docs">Contact Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem className="hidden    md:block">
          <NavigationMenuTrigger className={"cursor-pointer"}>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink className={"p-4 py-2"} asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-xs leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
