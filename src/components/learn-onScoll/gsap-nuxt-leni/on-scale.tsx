// code : https://github.com/kadetXx/nuxt-gsap-starter/blob/main/styles/_components/_hello.scss

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// Interactions Class Equivalent
class Interactions {
  private lenis: Lenis | null = null;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.createSmoothScroll();
    this.addEventListeners();
  }

  createSmoothScroll() {
    this.lenis = new Lenis({
      lerp: 0.1,
    });

    this.lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      this.lenis?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize() {
    // Resize logic here
  }
}

// Hello Component
export const Hello: React.FC = () => {
  useEffect(() => {
    // Initialize interactions when component mounts
    const interactions = new Interactions();

    // Cleanup
    return () => {
      window.removeEventListener("resize", interactions.onResize);
    };
  }, []);

  return (
    <div className="hello h-[100vh]  flex items-center justify-center ">
      <h1 className="hello__text text-[6rem] font-bold text-gray-400 ">NUXT</h1>
      <span className="hello__dash h-[1.4rem] w-[4rem]  bg-gray-400 " />
      <h1 className="hello__text text-[6rem] font-bold text-gray-400 ">GSAP</h1>
    </div>
  );
};

export default Hello;
