import { ReloadWrapper } from "../reload-wrapper";
import { SVGProps } from "react";
import { Cursor } from "./cursor-card";
import { Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={31} fill="none" {...props}>
      <g clipPath="url(#a)">
        <path fill={"#22c55e"} fillRule="evenodd" stroke={"#fff"} strokeLinecap="square" strokeWidth={2} d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={"#22c55e"} d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default function CursorCardDemo() {
  return (
    <>
      <ReloadWrapper className="w-full flex justify-center">
        <div className="py-12">
          <div className="overflow-hidden rounded-[12px] bg-white p-2 shadow-md dark:bg-black">
            <Cursor
              attachToParent
              variants={{
                initial: { scale: 0.3, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.3, opacity: 0 },
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.15,
              }}
              className="left-12 top-4"
            >
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </Cursor>
            <Card className="relative bg-black text-white p-8 max-w-md rounded-3xl">
              <div className="absolute top-6 left-6">
                <Shield className="w-6 h-6" />
              </div>

              <div className="mt-12 space-y-4">
                <div className="relative">
                  <h2 className="text-4xl font-bold text-center leading-tight">
                    ALL-IN-ONE
                    <br />
                    PLATFORM
                    <br />
                    FOR
                    <br />
                    SAVINGS
                  </h2>
                </div>

                <p className="text-gray-400 text-center text-sm max-w-[280px]">Trusted Protection and Expert Guidance for Your Finances</p>
              </div>
            </Card>
            {/* <img src="https://i.pinimg.com/564x/a0/6a/5f/a06a5f814569fcf4a67f3ad89ae1babf.jpg" alt="Green herbs" className="h-40 w-full max-w-32 rounded-[8px] object-cover" /> */}
          </div>
        </div>
      </ReloadWrapper>
    </>
  );
}
