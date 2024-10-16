import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { Github, Star } from "lucide-react";

export function ETickteHeader() {
  return (
    <>
      <header className="supports-backdrop-blur:bg-background/80 sticky top-0 z-40 w-full backdrop-blur bg-background border-b">
        <div className="container flex h-16 items-center">
          <MainNav />
          {/* <MobileNav /> */}
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-between">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <a
                className={cn(buttonVariants(), "gap-2 whitespace-pre hidden md:flex", "group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-sm")}
                href="/"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
                <Github className="h-4 w-4" />
                Star on GitHub
                <div className="hidden md:flex items-center gap-1 text-sm text-gray-500">
                  <Star className="h-4 w-4 group-hover:text-yellow-300 transition-all duration-300" />
                  {/* Counting number */}
                  <CountingNumbers value={1000} className="font-display font-medium text-white" />
                </div>
              </a>
            </div>
            <nav className="flex items-center gap-2">
              <a href="/login" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "px-4 bg-gradient-to-r from-red-600 to-amber-600 text-white")}>
                Get Started
              </a>
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
        <a href="/" className="mr-6 flex items-center gap-2">
          <span className="hidden font-bold sm:inline-block">BehindUI</span>
          {/* <Badge variant="secondary">Beta</Badge> */}
        </a>
        <NavigationMenu>
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
                <ul className="grid w-[400px] grid-cols-1 gap-3 p-4 md:w-[300px] lg:grid-cols-3 lg:w-[900px]">
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
      ;
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
          ref={ref}
          className={cn(
            "flex flex-col h-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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

export function CountingNumbers({
  value,
  className,
  reverse = false,
  start = reverse ? 1000 : 0,
  interval = 10,
  duration = 800,
}: {
  value: number;
  className: string;
  reverse?: boolean;
  start?: number;
  interval?: number;
  duration?: number;
}) {
  const [number, setNumber] = useState(start);
  let increment = Math.floor(Math.abs(start - value) / (duration / interval));
  if (increment === 0) {
    increment = 1;
  }
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let timer = setInterval(() => {
        if (reverse) {
          if (number > value) {
            setNumber((num) => {
              let newValue = num - increment;
              if (newValue < value) {
                newValue = value;
                if (timer) clearInterval(timer);
              }
              return newValue;
            });
          } else if (timer) {
            clearInterval(timer);
          }
        } else {
          if (number < value) {
            setNumber((num) => {
              let newValue = num + increment;
              if (newValue > value) {
                newValue = value;
                if (timer) clearInterval(timer);
              }
              return newValue;
            });
          } else if (timer) {
            clearInterval(timer);
          }
        }
      }, interval);
    }
  }, [isInView]);

  return (
    <>
      <p className={className} ref={ref}>
        {Intl.NumberFormat().format(number)}
      </p>
    </>
  );
}
