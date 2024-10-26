import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Highlight, themes } from "prism-react-renderer";
import { ReloadWrapper } from "../reload-wrapper";

const frameworkTabs = [
  {
    name: "React.js",
    value: "react",
    icon: "⚛️",
  },
  {
    name: "HTML",
    value: "html",
    icon: "🌐",
  },
  {
    name: "Vue.js",
    value: "vue",
    icon: "💚",
  },
  {
    name: "Svelte.js",
    value: "svelte",
    icon: "🔥",
  },
];

const sampleCode = `import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
// raplace it with your actions.
import { saySomething } from "actions/emailSubRelated";
import {Button} from "@/components/ui/button";
type FormType = {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
};`;

const CodeViewer = () => {
  const [selectedView, setSelectedView] = useState("code");
  const [selectedFramework, setSelectedFramework] = useState("react");

  const getFrameworkContent = (framework) => {
    if (framework === "react") {
      return sampleCode;
    }
    return null;
  };

  return (
    <ReloadWrapper>
      <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full relative border-none">
        <TabsList className=" w-fit">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="p-4">
          <div className="text-center p-8 text-gray-500">On Development</div>
        </TabsContent>

        <TabsContent value="code">
          <Tabs value={selectedFramework} onValueChange={setSelectedFramework} className="w-full">
            <TabsList className="grid w-full grid-cols-4 place-self-center items-center justify-between">
              {/* <TabsList className="flex items-center max-w-[76rem] px-4 py-2 border-b border-b-zinc-800 overflow-auto p-2 bg-zinc-800/5"> */}
              {frameworkTabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className="flex items-start justify-start gap-2 w-fit">
                  <span>{tab.icon}</span>
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="p-4 bg-zinc-900 rounded-b-lg">
              {getFrameworkContent(selectedFramework) ? (
                <Highlight theme={themes.nightOwl} code={getFrameworkContent(selectedFramework)} language="jsx">
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
            </div>
          </Tabs>
        </TabsContent>
      </Tabs>
    </ReloadWrapper>
  );
};

export default CodeViewer;
