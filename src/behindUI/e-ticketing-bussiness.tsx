// Ref code :https://github.com/dillionverma/llm.report/blob/main/components/landing/Hero.tsx
// Ref Concept : https://dribbble.com/shots/25023756-Landing-Page-for-E-Ticketing-Business

/*
MASALAH : 
- Masih bigung apakah header bagusnya digabung atau tidak 
- Kalau nengok TailwindUI dia gabung

- Tapi kaayaknya mending g gabung, biar rapi 
- cumn apakag bisa di render ntar??? dan gimana cara registry file headernya
*/
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

import { ETickteHeader as Header } from "@/layout/header/header-e-ticket";
import { ModeToggle } from "@/components/mode-toggle";
import GridPattern from "@/layout/background/grid-pattern";
export default function Home() {
  return (
    <>
      <div>
        {/* <header className="bg-transparent font-mono sticky top-0 z-50 w-full">
          <div className="container px-4 md:px-8 flex h-14 items-center justify-end">
            <ModeToggle />
          </div>
        </header> */}
        <Header />
        {/* Main section */}
        <div className="flex min-h-screen flex-col">
          <div id="hero">
            <div className=" min-h-screen">
              <div className="max-w-screen flex flex-col items-center py-20 gap-6">
                <motion.h1
                  className="flex flex-col md:flex-row text-5xl md:text-7xl font-bold  justify-center text-center md:h-max"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0, transition: { type: "spring" } },
                  }}
                >
                  <span className="text-black leading-none tracking-tight">
                    <span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text ">Log and Monitor your AI Apps</span> {/* for OpenAI */}
                    {/* LLM Ops */}
                  </span>
                </motion.h1>
                <motion.p
                  className="text-gray-500 leading-relaxed text-xl"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0, transition: { type: "spring" } },
                  }}
                >
                  Know exactly what&apos;s happening in your AI app with realtime logging, analytics, usage reports, and alerts.
                </motion.p>
                <motion.div
                  className="flex md:flex-col items-center justify-center w-[500px]"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0, transition: { type: "spring" } },
                  }}
                >
                  <div className="grid md:grid-cols-1 place-items-center">
                    {/* BUTTON */}
                    <Button>
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl">Get started for free</span>
                    </Button>
                  </div>
                </motion.div>
                {/* <m.div
              className="flex md:flex-col items-center justify-center space-x-4 mt-4 w-[500px]"
              variants={{
                hidden: { opacity: 0, y: -10 },
                show: { opacity: 1, y: 0, transition: { type: "spring" } },
              }}
            >
              <BackedBy />
            </m.div> */}
              </div>
              <motion.div
                className="mx-auto max-w-[1200px]"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0, transition: { type: "spring" } },
                }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  {/* <Dashboard /> */}
                  <video src="https://cdn.llm.report/openai-demo.mp4" autoPlay loop muted className="rounded-xl border shadow-2xl" />
                </Suspense>
              </motion.div>
            </div>
          </div>
          <GridPattern width={40} height={40} x={-1} y={-1} className={cn("-z-10 stroke-gray-300 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ")} />
        </div>
      </div>
    </>
  );
}
