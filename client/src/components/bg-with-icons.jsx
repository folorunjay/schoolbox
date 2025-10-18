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
  // Enhanced responsive size based on screen width
  const getResponsiveSize = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 375) return 24; // small mobile (iPhone 5)
      if (width < 640) return 28; // mobile
      if (width < 768) return 36; // sm
      if (width < 1024) return 44; // md
      if (width < 1280) return 52; // lg
      return 64; // xl (same as original)
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-muted/20 h-full w-full">
      {/* Top row - evenly spaced */}
      <ReactOriginal
        size={iconSize}
        className="absolute top-8 xs:top-12 sm:top-16 md:top-20 lg:top-24 left-[5%] xs:left-[6%] sm:left-[7%] md:left-[8%] opacity-10 animate-pulse"
      />
      <GraphqlPlain
        size={iconSize}
        className="absolute top-6 xs:top-8 sm:top-10 md:top-12 lg:top-14 left-[15%] xs:left-[16%] sm:left-[18%] md:left-[20%] lg:left-[22%] opacity-10"
      />
      <NodejsOriginal
        size={iconSize}
        className="absolute top-8 xs:top-10 sm:top-12 md:top-14 lg:top-16 right-[15%] xs:right-[16%] sm:right-[17%] md:right-[18%] lg:right-[20%] opacity-10"
      />
      <TailwindcssOriginal
        size={iconSize}
        className="absolute top-4 xs:top-6 sm:top-8 md:top-10 lg:top-12 right-[2%] xs:right-[3%] sm:right-[4%] md:right-[5%] opacity-10 animate-pulse"
      />

      {/* Upper-middle row */}
      <PythonOriginal
        size={iconSize}
        className="absolute top-[25%] xs:top-[28%] sm:top-[30%] left-[3%] xs:left-[4%] sm:left-[5%] opacity-10 animate-pulse"
      />
      <PostgresqlOriginal
        size={iconSize}
        className="absolute top-[18%] xs:top-[20%] sm:top-[22%] left-[14%] xs:left-[15%] sm:left-[16%] md:left-[18%] opacity-10"
      />
      <ExpressOriginal
        size={iconSize}
        className="absolute top-[22%] xs:top-[24%] sm:top-[26%] md:top-[27%] right-[15%] xs:right-[16%] sm:right-[17%] md:right-[18%] opacity-10 animate-pulse"
      />
      <VuejsOriginal
        size={iconSize}
        className="absolute top-[20%] xs:top-[22%] sm:top-[24%] md:top-[25%] right-[4%] xs:right-[5%] sm:right-[6%] opacity-10"
      />

      {/* Middle row */}
      <DockerOriginal
        size={iconSize}
        className="absolute top-[38%] xs:top-[40%] sm:top-[42%] md:top-[44%] lg:top-[46%] left-[2%] xs:left-[3%] sm:left-[4%] md:left-[5%] lg:left-[6%] opacity-10 animate-pulse"
      />
      <KubernetesPlain
        size={iconSize}
        className="absolute top-[45%] xs:top-[46%] sm:top-[48%] md:top-[50%] lg:top-[52%] left-[22%] xs:left-[24%] sm:left-[26%] md:left-[28%] lg:left-[30%] opacity-10"
      />
      <MongodbOriginal
        size={iconSize}
        className="absolute top-[48%] xs:top-[50%] sm:top-[52%] md:top-[54%] lg:top-[56%] left-[45%] xs:left-[47%] sm:left-[48%] md:left-[50%] lg:left-[52%] opacity-10 animate-pulse"
      />
      <NextjsOriginal
        size={iconSize}
        className="absolute top-[38%] xs:top-[40%] sm:top-[42%] md:top-[44%] lg:top-[45%] right-[10%] xs:right-[11%] sm:right-[12%] md:right-[13%] lg:right-[15%] opacity-10"
      />

      {/* Lower-middle row */}
      <JavascriptOriginal
        size={iconSize}
        className="absolute bottom-[30%] xs:bottom-[28%] sm:bottom-[26%] md:bottom-[26%] left-[12%] xs:left-[14%] sm:left-[15%] md:left-[16%] lg:left-[18%] opacity-10 animate-pulse"
      />
      <DjangoPlain
        size={iconSize}
        className="absolute bottom-[22%] xs:bottom-[20%] sm:bottom-[18%] md:bottom-[18%] left-[35%] xs:left-[37%] sm:left-[38%] md:left-[40%] lg:left-[42%] opacity-10"
      />
      <RedisOriginal
        size={iconSize}
        className="absolute bottom-[27%] xs:bottom-[25%] sm:bottom-[23%] md:bottom-[23%] right-[18%] xs:right-[19%] sm:right-[20%] md:right-[21%] lg:right-[23%] opacity-10 animate-pulse"
      />

      {/* Bottom row */}
      <GithubOriginal
        size={iconSize}
        className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-10 left-[5%] xs:left-[6%] sm:left-[7%] md:left-[8%] lg:left-[10%] opacity-10"
      />
      <GitOriginal
        size={iconSize}
        className="absolute bottom-2 xs:bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-14 left-[16%] xs:left-[18%] sm:left-[20%] md:left-[22%] lg:left-[23%] opacity-10 animate-pulse"
      />
      <KubernetesPlain
        size={iconSize}
        className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-10 right-[19%] xs:right-[20%] sm:right-[21%] md:right-[22%] lg:right-[25%] opacity-10"
      />
      <AmazonwebservicesOriginalWordmark
        size={iconSize}
        className="absolute bottom-3 xs:bottom-5 sm:bottom-6 md:bottom-8 lg:bottom-10 right-[3%] xs:right-[4%] sm:right-[5%] md:right-[6%] lg:right-[8%] opacity-10 animate-pulse"
      />
    </div>
  );
};

export default BgIcons;
