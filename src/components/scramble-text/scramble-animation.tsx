import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
const lettersAndSymbols = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,";

interface AnimatedTextProps {
  className?: string;
  text: string;
}

export function ScrambleAnimation({ text, className }: AnimatedTextProps) {
  const [animatedText, setAnimatedText] = useState("");

  const getRandomChar = useCallback(() => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)], []);

  const animateText = useCallback(async () => {
    const duration = 50;
    const revealDuration = 80;
    const initialRandomDuration = 300;

    const generateRandomText = () =>
      text
        .split("")
        .map(() => getRandomChar())
        .join("");

    setAnimatedText(generateRandomText());

    const endTime = Date.now() + initialRandomDuration;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(generateRandomText());
    }

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText(
        (prevText) =>
          text.slice(0, i + 1) +
          prevText
            .slice(i + 1)
            .split("")
            .map(() => getRandomChar())
            .join("")
      );
    }
  }, [text, getRandomChar]);

  useEffect(() => {
    animateText();
  }, [text, animateText]);

  return <div className={cn("relative inline-block", className)}>{animatedText}</div>;
}
