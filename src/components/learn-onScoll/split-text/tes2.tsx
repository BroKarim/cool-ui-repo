import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface StaggerTextProps {
  text: string;
  bgColor?: string;
  fgColor?: string;
  className?: string;
}

const StaggerText: React.FC<StaggerTextProps> = ({ text, bgColor = "black", fgColor = "white", className = "" }) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Lenis smooth scrolling setup
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP animation setup
    if (textRef.current) {
      const splitText = new SplitType(textRef.current, { types: "chars" });

      gsap.fromTo(
        splitText.chars,
        {
          color: bgColor,
        },
        {
          color: fgColor,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    }

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, [bgColor, fgColor]);

  return (
    <>
      <section className=" pl-[20rem)] pr-[clamp(4rem,] grid h-screen place-content-center bg-[#353535] pb-[12vw,] pt-0   items-center justify-center   ">
        <p ref={textRef} className={`reveal-type text-[clamp(2rem,5vw,8rem)] text-white ${className}`}>
          {text}
        </p>
      </section>
      <section className="pl-[20rem)] pr-[clamp(4rem,] grid h-[1] place-content-center bg-[#353535] pb-[12vw,] pt-0">
        {" "}
        <p className="reveal-type text-[clamp(2rem,5vw,8rem)] text-white" data-fg-color="red">
          The web isn't static anymore, interactivity and motion now dominate.
        </p>
      </section>

    </>
  );
};

export default StaggerText;
