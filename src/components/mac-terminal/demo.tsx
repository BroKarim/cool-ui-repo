import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { ReloadWrapper } from "../reload-wrapper";

export default function TerminalDemo() {
  return (
    <>
      <ReloadWrapper className="py-6  md:max-w-4xl flex items-center justify-center">
        <Terminal />
      </ReloadWrapper>
    </>
  );
}

export function Terminal() {
  const [terminalStep, setTerminalStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const terminalSteps = [
    "npx shadcn@latest init -d",
    "Which style would you like to use? › New York",
    "Which color would you like to use as base color? › Zinc",
    "Do you want to use CSS variables for colors? › no / yes    ",
    "npx shadcn@latest add button",
    "pnpm dev 🎉",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalStep((prev) => (prev < terminalSteps.length - 1 ? prev + 1 : prev));
    }, 500);

    return () => clearTimeout(timer);
  }, [terminalStep]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalSteps.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-900 text-white font-mono text-sm relative">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <button onClick={copyToClipboard} className="text-gray-400 hover:text-white transition-colors" aria-label="Copy to clipboard">
            {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
          </button>
        </div>
        <div className="space-y-2 pr-6">
          {terminalSteps.map((step, index) => (
            <div key={index} className={`${index > terminalStep ? "opacity-0" : "opacity-100"} transition-opacity duration-300 text-black dark:text-white`}>
              <span className="text-green-400">$</span> {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
