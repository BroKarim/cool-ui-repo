"use client";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const Cover = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(`relative hover:bg-neutral-900 border-black border dark:border-none shadow-[4px_2px_0px_rgba(0,0,0,1)] hover:shadow-none group/cover inline-block dark:bg-neutral-900 bg-white px-4 py-2  transition duration-200 rounded-sm`, className)}>
      <span className={cn("dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200", className)}>{children}</span>
      <CircleIcon className="absolute -right-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -right-[2px]" delay={0.4} />
      <CircleIcon className="absolute -left-[2px] -top-[2px]" delay={0.8} />
      <CircleIcon className="absolute -bottom-[2px] -left-[2px]" delay={1.6} />
    </div>
  );
};

export const CircleIcon = ({ className, delay }: { className?: string; delay?: number }) => {
  return <div className={cn(`pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 group-hover/cover:bg-white`, className)}></div>;
};
