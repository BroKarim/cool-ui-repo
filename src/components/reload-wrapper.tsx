import * as React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentWrapperProps {
  className?: string;
  children: any;
}

export function ReloadWrapper({ className, children }: ComponentWrapperProps) {
  const [key, setKey] = React.useState(0);

  return (
    <>
      <div className={cn("max-w-screen w-full relative  justify-center rounded-xl p-0 md:border ", className)} key={key}>
        <div className=" inset-0 ">
          <Button onClick={() => setKey((prev) => prev + 1)} className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1" variant="ghost">
            {" "}
            <RotateCcw aria-label="restart-btn" size={16} />
          </Button>
          <React.Suspense
            fallback={
              <div className="flex items-center text-sm text-muted-foreground">
                <Icons.spinner className="mr-2 size-4 animate-spin" />
                Loading...
              </div>
            }
          >
            {children}
          </React.Suspense>
        </div>
      </div>
    </>
  );
}
