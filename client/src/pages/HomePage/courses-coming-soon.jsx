import { Card, CardContent } from "@/components/ui/card";
import { Code2, GitBranch, Database, Boxes } from "lucide-react";
import Image from "rc-image";
import githubBg from "@/assets/github-bg.webp";
import dockerBg from "@/assets/docker-bg.avif";

const CoursesComingSoon = () => {
  const courses = [
    {
      id: 1,
      title: "Docker Mastery",
      description: "Master containerization and deployment with Docker",
      icon: Boxes,
      bg: dockerBg,
    },
    {
      id: 2,
      title: "Git & GitHub",
      description: "Version control and collaboration essentials",
      icon: GitBranch,
      bg: githubBg,
    },
    // Example: Add more later
    // {
    //   id: 3,
    //   title: "Database Design",
    //   description: "Learn SQL and database architecture",
    //   icon: Database,
    //   bg: githubBg,
    // },
  ];

  return (
    <section className="w-full bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-6 text-center space-y-6 sm:space-y-8 py-8 sm:py-10">
        {/* Header Section */}
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Courses Coming Soon
          </h2>
          <p className="text-muted-foreground text-sm xs:text-base sm:text-base md:text-lg max-w-3xl mx-auto px-2 xs:px-0">
            We're working on more exciting courses to help you level up your skills. Stay tuned!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 py-0 max-w-2xl sm:max-w-none mx-auto">
          {/* eslint-disable-next-line no-unused-vars */}
          {courses.map(({ id, title, description, icon: Icon, bg }) => (
            <Card
              key={id}
              className="relative py-0 h-full  cursor-pointer overflow-hidden group rounded-xl sm:rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute ">
                <Image
                  src={bg}
                  alt={title}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl brightness-40 group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0" />
              </div>

              <CardContent className="relative z-10 py-0 flex flex-col items-center justify-center text-center space-y-3 xs:space-y-4 sm:space-y-4 p-3">
                {/* Icon */}
                <div className="bg-muted/40 p-2 xs:p-3 rounded-full backdrop-blur-sm border border-border group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-lg xs:text-xl sm:text-xl font-semibold text-primary-foreground leading-tight">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-xs xs:text-sm sm:text-sm text-primary-foreground/90 leading-relaxed max-w-xs mx-auto line-clamp-2">
                  {description}
                </p>

                {/* Coming Soon Badge */}
                <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wide mt-1 xs:mt-2">
                  Coming Soon
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional: Add a call-to-action or newsletter signup for mobile */}
        <div className="pt-4 sm:pt-6">
          <p className="text-xs xs:text-sm text-muted-foreground max-w-md mx-auto px-4">
            Want to be notified when these courses launch? Follow us for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesComingSoon;
