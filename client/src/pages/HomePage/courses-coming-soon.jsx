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
    <section className="w-full bg-muted/20 ">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-8 py-10">
        <div className="space-y-1">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Courses Coming Soon</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            We’re working on more exciting courses to help you level up your skills. Stay tuned!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* eslint-disable-next-line no-unused-vars */}
          {courses.map(({ id, title, description, icon: Icon, bg }) => (
            <Card
              key={id}
              className="relative cursor-pointer overflow-hidden group rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0">
                <Image
                  src={bg}
                  alt={title}
                  className="w-full h-full object-cover rounded-2xl brightness-40 group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 " />
              </div>

              <CardContent className="relative z-10 flex flex-col items-center justify-center text-center  space-y-4">
                <div className="bg-muted/40 p-3 rounded-full backdrop-blur-sm border border-border group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold text-primary-foreground">{title}</h3>
                <p className="text-sm text-primary-foreground max-w-xs">{description}</p>

                <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wide">
                  Coming Soon
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesComingSoon;
