/*
JANGA NYERAH DULU, CARI REF LEBH BANYAK LAGI

- yg mirip : https://www.youtube.com/watch?v=VeTwNnZUPlw&t=5s
- codenya : https://codepen.io/designcourse/pen/vYQQKBW

*/

import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splitText = (text: string, wordClass?: string) => {
  const wordsArray = text.split(" ");

  const htmlWords = wordsArray.map((word, i) => {
    const hasLineBreak = word.includes("\n");

    return (
      <span className={wordClass} key={i}>
        {word}
        {i < wordsArray.length - 1 && " "}
        {hasLineBreak && <br />}
      </span>
    );
  });

  return htmlWords;
};

export const TextonScroll = () => {
  const lines = ["We want to help", "make the internet", "everything it can be."];
  const textRef = useRef<HTMLParagraphElement>(null);

  //   / Generate splitted text
  const splittedText = useMemo(
    () =>
      lines
        .map((line, lineIdx) => {
          const isLast = lineIdx === lines.length - 1;
          const wordElements = splitText(line + "\n", isLast ? "text-yellow-200" : undefined);

          return wordElements;
        })
        .flat(),
    []
  );

  // GSAP animation logic
  useEffect(() => {
    const targets = gsap.utils.toArray(".stagger-word"); // Select all elements with this class

    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current, // Target the wrapper
          start: "top center", // Start animation when the top of the section hits the center of the viewport
          end: "bottom center", // End animation
          scrub: 1, // Smooth scroll-linked animation
        },
      })
      .fromTo(
        targets,
        { opacity: 0.2, y: 50 }, // From values
        {
          opacity: 1,
          y: 0,
          stagger: 0.1, // Delay between each element
          ease: "power2.out",
        }
      );
  }, []);

  //   const splittedText = lines
  //     .map((line, lineIdx) => {
  //       const isLast = lineIdx === lines.length - 1;
  //       return splitText(line + "\n", isLast ? "text-yellow-200" : "");
  //     })
  //     .flat();

  return (
    <>
      <section className="relative h-[700vh]">
        <div className="h-[100vh] flex flex-col justify-center sticky top-0 ">
          <p ref={textRef} className="text-[3.5rem] md:text-[56px] font-black max-w-max mx-auto capitalize leading-[1.19]">
            {splittedText}
          </p>
        </div>
      </section>
    </>
  );
};

export default TextonScroll;
