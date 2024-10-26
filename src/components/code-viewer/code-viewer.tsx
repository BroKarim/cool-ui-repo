//code : https://github.com/Kinfe123/farm-ui/blob/main/apps/www/components/ui/Preview/index.tsx

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Highlight, themes } from "prism-react-renderer";
import { ReloadWrapper } from "../reload-wrapper";
import { motion } from "framer-motion";
// import synthwave84 from "./synthwave84";
// import vsDark from "./vsDark";

interface HighlightProps {
  selectedFramework: string | null;
}

type PrismTheme = typeof themes.oneLight;

// Create modified theme
const customTheme: PrismTheme = {
  ...themes.oneLight,
  plain: {
    ...themes.oneLight.plain,
    backgroundColor: "transparent" as const,
  },
};

const frameworkTabs = [
  {
    name: "main.jsx",
    value: "react",
    icon: "⚛️",
  },
  {
    name: "navbar.jsx",
    value: "html",
    icon: "🌐",
  },
  {
    name: "footer.jsx",
    value: "vue",
    icon: "💚",
  },
  {
    name: "data.js",
    value: "svelte",
    icon: "🔥",
  },
];

const sampleCode = `import { AnimatedText } from "@/components/animated-text";
import { CopyText } from "@/components/copy-text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute -top-[118px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(1000px)_rotateX(-63deg)] h-[80%] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none -z-10" />

      <h1 className="font-departure text-[40px] md:text-[84px] relative z-10 text-center h-[120px] md:h-auto leading-tight">
        <AnimatedText text="Production ready code" />
      </h1>

      <p className="relative z-10 text-center max-w-[80%] mt-0 md:mt-4">
        An open-source starter kit based on{" "}
        <a href="#" className="underline">
          shadcn
        </a>
        .
      </p>

      <div className="mt-10 mb-8">
        <CopyText value="bunx degit shadcn" />
      </div>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#F60"
                      d="M0 0v16h16V0H0Zm8.7 9.225v3.925H7.275V9.225L3.775 2.3h1.65L8 7.525 10.65 2.3h1.55L8.7 9.225Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-sm">Live on Hacker News</span>
              </div>
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={15} className="text-xs">
            Shadcn – An open-source starter kit for your next project
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="absolute -bottom-[280px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(560px)_rotateX(63deg)] pointer-events-none" />
      <div className="absolute w-full bottom-[100px] h-1/2  bg-gradient-to-b from-background to-transparent pointer-events-none -z-10" />
    </div>
  );
}`;

const CodeViewer: React.FC<HighlightProps> = () => {
  const [selectedView, setSelectedView] = useState("code");
  const [selectedFramework, setSelectedFramework] = useState("react");

  const getFrameworkContent = (framework: string) => {
    if (framework === "react") {
      return sampleCode;
    }
    return "";
  };

  return (
    <div className="w-full">
      <ReloadWrapper className="px-4 py-8 ">
        <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full relative overflow-y-scroll h-[36rem] font-mono border-none">
          <TabsList className=" w-fit">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="p-4">
            <div className="text-center p-8 text-gray-500">On Development</div>
          </TabsContent>

          <TabsContent value="code">
            <Tabs value={selectedFramework} onValueChange={setSelectedFramework} className="w-full">
              <TabsList className="grid  grid-cols-4 place-self-start items-center justify-between mb-2">
                {/* <TabsList className="flex items-center max-w-[76rem] px-4 py-2 border-b border-b-zinc-800 overflow-auto p-2 bg-zinc-800/5"> */}
                {frameworkTabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value} className="flex items-start justify-start gap-2 w-fit">
                    <span>{tab.icon}</span>
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
                <motion.div className=" h-[640px] p-4 bg-zinc-900 overflow-y-auto w-full  rounded-b-lg">
                  {getFrameworkContent(selectedFramework) ? (
                    <Highlight theme={customTheme} code={getFrameworkContent(selectedFramework)} language="jsx">
                      {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={`${className} overflow-auto`} style={style}>
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                              <span className="text-gray-500 mr-4">{i + 1}</span>
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                              ))}
                            </div>
                          ))}
                        </pre>
                      )}
                    </Highlight>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                      {/* <Github className="w-8 h-8 mb-4" /> */}
                      <p className="text-sm">Be the first to contribute!</p>
                    </div>
                  )}
                </motion.div>
              
            </Tabs>
          </TabsContent>
        </Tabs>
      </ReloadWrapper>
    </div>
  );
};

export default CodeViewer;
