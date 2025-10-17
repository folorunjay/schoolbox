import React from "react";
import {
  AmazonwebservicesOriginalWordmark,
  AngularOriginal,
  DjangoPlain,
  DockerOriginal,
  ExpressOriginal,
  GithubOriginal,
  GitOriginal,
  GraphqlPlain,
  JavascriptOriginal,
  KubernetesPlain,
  MongodbOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  ReactOriginal,
  RedisOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VuejsOriginal,
} from "devicons-react";

const BgIcons = () => {
  // Responsive size based on screen width
  const getResponsiveSize = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) return 32; // mobile
      if (width < 768) return 40; // sm
      if (width < 1024) return 48; // md
      if (width < 1280) return 56; // lg
      return 64; // xl
    }
    return 48; // default
  };

  const [iconSize, setIconSize] = React.useState(getResponsiveSize());

  React.useEffect(() => {
    const handleResize = () => {
      setIconSize(getResponsiveSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
      {/* Top row - evenly spaced */}
      <ReactOriginal
        size={iconSize}
        className="absolute top-16 sm:top-20 md:top-24 lg:top-25 left-[8%] opacity-20 animate-pulse"
      />
      <GraphqlPlain
        size={iconSize}
        className="absolute top-12 sm:top-14 md:top-16 lg:top-18 left-[22%] sm:left-[25%] opacity-20"
      />
      <NodejsOriginal
        size={iconSize}
        className="absolute top-14 sm:top-16 md:top-18 lg:top-20 right-[18%] sm:right-[20%] opacity-20"
      />
      <TailwindcssOriginal
        size={iconSize}
        className="absolute top-10 sm:top-12 md:top-14 lg:top-17 right-[3%] sm:right-[5%] opacity-20 animate-pulse"
      />

      {/* Upper-middle row */}
      <PythonOriginal
        size={iconSize}
        className="absolute top-[30%] left-[5%] opacity-20 animate-pulse"
      />
      <PostgresqlOriginal
        size={iconSize}
        className="absolute top-[20%] left-[18%] opacity-20"
      />
      <ExpressOriginal
        size={iconSize}
        className="absolute top-[27%] right-[18%] opacity-20 animate-pulse"
      />
      <VuejsOriginal
        size={iconSize}
        className="absolute top-[25%] right-[6%] opacity-20"
      />
      {/* Middle row */}
      <DockerOriginal
        size={iconSize}
        className="absolute top-[44%] sm:top-[46%] md:top-[48%] left-[4%] sm:left-[6%] opacity-20 animate-pulse"
      />
      <KubernetesPlain
        size={iconSize}
        className="absolute top-[52%] sm:top-[44%] md:top-[65%] left-[28%] sm:left-[30%] opacity-20"
      />
      <MongodbOriginal
        size={iconSize}
        className="absolute top-[56%] sm:top-[58%] md:top-[65%] left-[50%] sm:left-[52%] opacity-20 animate-pulse"
      />
      <NextjsOriginal
        size={iconSize}
        className="absolute top-[44%] sm:top-[45%] md:top-[46%] right-[13%] sm:right-[15%] opacity-20"
      />

      {/* Lower-middle row */}
      <JavascriptOriginal
        size={iconSize}
        className="absolute bottom-[26%] sm:bottom-[27%] md:bottom-[28%] left-[16%] sm:left-[18%] opacity-20 animate-pulse"
      />
      <DjangoPlain
        size={iconSize}
        className="absolute bottom-[18%] sm:bottom-[19%] md:bottom-[20%] left-[40%] sm:left-[42%] opacity-20"
      />
      <RedisOriginal
        size={iconSize}
        className="absolute bottom-[23%] sm:bottom-[24%] md:bottom-[25%] right-[23%] sm:right-[15%] opacity-20 animate-pulse"
      />

      {/* Bottom row */}
      <GithubOriginal
        size={iconSize}
        className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-[8%] sm:left-[10%] opacity-20"
      />
      <GitOriginal
        size={iconSize}
        className="absolute bottom-10 sm:bottom-12 md:bottom-16 left-[30%] sm:left-[32%] opacity-20 animate-pulse"
      />
      <AngularOriginal
        size={iconSize}
        className="absolute bottom-8 sm:bottom-10 md:bottom-14 right-[33%] sm:right-[35%] opacity-20"
      />
      <AmazonwebservicesOriginalWordmark
        size={iconSize}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-[6%] sm:right-[8%] opacity-20 animate-pulse"
      />
    </div>
  );
};

export default BgIcons;
