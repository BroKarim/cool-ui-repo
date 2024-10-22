import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { Dock, DockIcon } from "../ui/dock";
import { ModeToggle } from "../mode-toggle";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import { Icons } from "../icons";
import { ReloadWrapper } from "../reload-wrapper";

export const Data = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#contact", icon: PencilLine, label: "Contact" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+301456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://nyxb.link/github",
        icon: Icons.gitHub,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://nyxb.link/linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://nyxb.link/x",
        icon: Icons.twitter,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://nyxb.link/yt",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
};
export default function BottomNavbar() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom">
        <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
        <Dock className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
          {Data.navbar.map((item) => (
            <DockIcon key={item.href}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={item.href} className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}>
                      <item.icon className="size-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="dark:bg-[#8e56ef] fill-[#8e56ef]">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(Data.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={social.url} className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}>
                        <social.icon className="size-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </DockIcon>
            ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DockIcon>
        </Dock>
      </div>
    </>
  );
}
