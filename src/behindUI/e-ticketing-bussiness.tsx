// Ref code :https://github.com/dillionverma/llm.report/blob/main/components/landing/Hero.tsx
// Ref desogn : https://dribbble.com/shots/24074447-Online-store-backend-Untitled-UI

import * as React from "react";
import { CSSProperties } from "react";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { useId } from "react";
import { Button } from "@/components/ui/button";

//shadcn components
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";

const SaaSHero1 = () => {
  return (
    <>
      <div className="relative z-10 bg-white">
        <Header />
        <div className="flex min-h-screen flex-col font-sans">
          <div className=" space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className=" flex flex-col items-center  gap-6">
              <h1 className="flex text-black max-w-[64rem] flex-col justify-center text-center text-5xl font-bold  md:h-max md:flex-row md:text-6xl">Power Your Email Marketing Campaigns with Ease and Efficiency</h1>
              <p className="text-xl leading-relaxed text-gray-500">Know exactly what&apos;s happening in your AI app with realtime logging, analytics, usage reports, and alerts.</p>
              <div className="flex w-[500px] items-center justify-center md:flex-col">
                <div className="grid place-items-center md:grid-cols-1">
                  <ShimmerButton className="shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]" background="radial-gradient(ellipse 80% 70% at 50% 120%, #f59e0b, #B91C1C)">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl">Get started for free</span>
                  </ShimmerButton>
                </div>
              </div>
              <div className="mt-4 flex w-[500px] items-center justify-center space-x-4 md:flex-col">
                <div className="mt-12 flex flex-col items-center justify-center gap-4">
                  <div>
                    <h3 className="text-center text-sm font-semibold text-gray-600">BACKED BY THE BEST IN THE INDUSTRY</h3>
                  </div>

                  <div className="flex flex-row gap-4">
                    <a
                      href="https://vercel.com/blog/ai-accelerator-participants"
                      target="_blank"
                      className="group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                    >
                      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

                      <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>Woo icon</title>
                          <path d="M2.227 4.857A2.228 2.228 0 000 7.094v7.457c0 1.236 1.001 2.237 2.237 2.237h9.253l4.229 2.355-.962-2.355h7.006c1.236 0 2.237-1 2.237-2.237V7.094c0-1.236-1-2.237-2.237-2.237zm8.08 1.311c.194.002.372.071.535.2a.769.769 0 01.304.56.851.851 0 01-.098.47c-.382.707-.696 1.894-.951 3.542-.246 1.6-.334 2.846-.275 3.739.02.245-.02.46-.118.647a.632.632 0 01-.52.353c-.255.02-.52-.098-.775-.362-.913-.933-1.639-2.326-2.169-4.18a184.085 184.085 0 00-1.413 2.825c-.578 1.11-1.069 1.678-1.481 1.708-.265.02-.49-.206-.687-.677-.5-1.286-1.04-3.768-1.619-7.448-.03-.255.02-.48.157-.657.137-.186.344-.284.618-.304.5-.04.785.196.854.706.304 2.051.638 3.788.991 5.21L5.809 8.41c.196-.373.441-.57.736-.589.431-.03.696.245.804.824.246 1.305.56 2.414.932 3.356.255-2.492.687-4.288 1.295-5.397.148-.274.363-.412.648-.431a.866.866 0 01.084-.004zm3.734 1.063c.167 0 .343.02.53.06.687.146 1.216.52 1.57 1.137.314.53.47 1.168.47 1.933 0 1.011-.254 1.933-.765 2.777-.588.981-1.354 1.472-2.305 1.472-.167 0-.344-.02-.53-.059-.697-.147-1.217-.52-1.57-1.138-.314-.54-.471-1.187-.471-1.943 0-1.01.255-1.933.765-2.767.599-.981 1.364-1.472 2.306-1.472zm6.152 0c.167 0 .343.02.53.06.696.146 1.216.52 1.57 1.137.314.53.47 1.168.47 1.933 0 1.011-.254 1.933-.765 2.777-.588.981-1.354 1.472-2.305 1.472-.167 0-.344-.02-.53-.059-.697-.147-1.217-.52-1.57-1.138-.314-.54-.471-1.187-.471-1.943 0-1.01.255-1.933.765-2.767.599-.981 1.364-1.472 2.306-1.472zm-6.107 1.645c-.307-.002-.606.201-.889.622a3.173 3.173 0 00-.52 1.168c-.05.225-.069.47-.069.716 0 .284.06.589.177.893.147.382.343.589.579.638.245.049.51-.06.795-.315.363-.323.608-.804.745-1.452.05-.225.069-.47.069-.726a2.49 2.49 0 00-.176-.893c-.148-.382-.344-.588-.58-.637a.714.714 0 00-.131-.014zm6.152 0c-.307-.002-.606.201-.889.622a3.173 3.173 0 00-.52 1.168c-.049.225-.069.47-.069.716 0 .284.06.589.177.893.147.382.344.589.579.638.245.049.51-.06.795-.315.363-.323.608-.804.745-1.452.04-.225.07-.47.07-.726a2.49 2.49 0 00-.177-.893c-.148-.382-.344-.588-.58-.637a.714.714 0 00-.131-.014Z"></path>
                        </g>
                      </svg>
                    </a>

                    <a href="https://buildspace.so/sf1" target="_blank" className="group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
                      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

                      <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>Canva icon</title>
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"></path>
                        </g>
                      </svg>
                    </a>
                    <div className="group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
                      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

                      <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>Zoom icon</title>
                          <path d="M4.587 13.63l-.27-.012H1.89l3.235-3.235-.013-.27a.815.815 0 0 0-.795-.795l-.27-.013H.004l.014.27c.034.438.353.77.794.795l.27.013H3.51L.273 13.618l.014.269c.015.433.362.78.795.796l.27.013h4.044l-.014-.27c-.036-.443-.35-.767-.795-.795zm3.237-4.325H7.82a2.695 2.695 0 1 0 .003 0zm1.141 3.839a1.618 1.618 0 1 1-2.288-2.287 1.618 1.618 0 0 1 2.288 2.287zm12.872-3.838a2.157 2.157 0 0 0-1.615.729 2.152 2.152 0 0 0-1.618-.731 2.147 2.147 0 0 0-1.208.37c-.21-.233-.68-.37-.948-.37v5.392l.27-.013c.45-.03.777-.349.795-.796l.013-.27V11.73l.014-.27c.01-.202.04-.382.132-.54a1.078 1.078 0 0 1 1.473-.393 1.078 1.078 0 0 1 .392.392c.093.16.12.339.132.54l.014.271v1.887l.013.269c.027.44.35.768.795.796l.27.013V11.73l.012-.27c.01-.2.04-.384.134-.543.299-.514.959-.69 1.473-.39a1.078 1.078 0 0 1 .392.393c.092.16.12.343.131.54l.014.27v1.887l.013.269c.028.443.35.77.796.796l.27.013V11.46a2.157 2.157 0 0 0-2.16-2.155zm-10.26.788a2.696 2.696 0 1 0 3.81 3.813 2.696 2.696 0 0 0-3.81-3.813zm3.049 3.05a1.618 1.618 0 1 1-2.288-2.288 1.618 1.618 0 0 1 2.288 2.288z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[1200px]">
              <Suspense fallback={<div>Loading...</div>}>
                {/* <Dashboard /> */}
                <video src="https://cdn.llm.report/openai-demo.mp4" autoPlay loop muted className="rounded-xl border shadow-2xl" />
              </Suspense>
            </div>
          </div>

          <GridPattern width={40} height={40} x={-1} y={-1} className={cn("-z-10 stroke-gray-300 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ")} />
        </div>
      </div>
    </>
  );
};
export default SaaSHero1;

/**
 * Header
 *
 */
export function Header() {
  return (
    <>
      <header className=" sticky top-0 z-40 w-full  bg-transparent ">
        <div className="container flex h-16 items-center">
          <MainNav />
          {/* <MobileNav /> */}
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-between">
            <div className="w-full flex-1 md:w-auto md:flex-none"></div>
            <nav className="flex items-center gap-2">
              <Button  >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export function MainNav() {
  return (
    <>
      <div className="mr-4 hidden md:flex">
        <a href="/" className="mr-6 text-black flex items-center gap-2">
          {/* <span className="hidden font-bold sm:inline-block">BehindUI</span> */}
          <img src="/logo.svg" alt="" className="w-24 h-24" />
        </a>
        <NavigationMenu className="text-black">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                        😂
                        <div className="mb-2 mt-4 text-lg font-medium">llm.report</div>
                        <p className="text-sm leading-tight text-muted-foreground">llm observability and analytics platform</p>
                      </a>
                    </NavigationMenuLink>
                  </li>

                  <ListItem href="https://docs.llm.report/introduction" title="Installation">
                    How to install and configure llm.report
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent data-state="open">
                <ul className="grid w-[400px] grid-cols-1 gap-3 p-4 md:w-[300px] lg:w-[900px] lg:grid-cols-3">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href} video={component.video}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="https://docs.llm.report">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Docs</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/pricing">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

const components: {
  title: string;
  href: string;
  description: string;
  video?: string;
}[] = [
  {
    title: "OpenAI Analytics",
    href: "https://docs.llm.report/features/openai",
    description: "Enter your OpenAI API key and get access to a dashboard of analytics.",
    video: "https://cdn.llm.report/openai-demo.mp4",
  },
  {
    title: "Logging",
    href: "https://docs.llm.report/features/logs",
    description: "Log your prompts to gain insights about latency, cost per request, and more.",
    video: "https://cdn.llm.report/logs-demo.mp4",
  },
  {
    title: "User Analytics",
    href: "https://docs.llm.report/features/users",
    description: "Understand your cost per user, discover your power users, and adjust your pricing strategy.",
    video: "https://cdn.llm.report/users-demo.mp4",
  },
];

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  video?: string;
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href="/"
          ref={ref}
          className={cn(
            "flex h-full select-none flex-col space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-4 text-sm leading-snug text-muted-foreground">{children}</p>
          <div className="flex-1" />
          {props.video && <video src={props.video} autoPlay loop muted className="rounded-xl border" />}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

/**
 * ShimmerButton Component
 * Renders a button with a shimmering effect.
 */
export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ shimmerColor = "#ffffff", shimmerSize = "0.05em", shimmerDuration = "3s", borderRadius = "100px", background = "rgba(0, 0, 0, 1)", className, children, ...props }, ref) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div className={cn("-z-30 blur-[2px]", "absolute inset-0 overflow-visible [container-type:size]")}>
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* spark before */}
            <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        {children}

        {/* Highlight */}
        <div
          className={cn(
            "insert-0 absolute size-full",

            "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",

            // transition
            "transform-gpu transition-all duration-300 ease-in-out",

            // on hover
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",

            // on click
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
          )}
        />

        {/* backdrop */}
        <div className={cn("absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]")} />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

/**
 * GridPattern for Hero Background
 */
interface GridPatternProps {
  width?: any;
  height?: any;
  x?: any;
  y?: any;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: any;
  className?: string;
  [key: string]: any;
}

export function GridPattern({ width = 40, height = 40, x = -1, y = -1, strokeDasharray = 0, squares, className, ...props }: GridPatternProps) {
  const id = useId();

  return (
    <svg aria-hidden="true" className={cn("pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30", className)} {...props}>
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect strokeWidth="0" key={`${x}-${y}`} width={width - 1} height={height - 1} x={x * width + 1} y={y * height + 1} />
          ))}
        </svg>
      )}
    </svg>
  );
}
