"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

const LazyMotionWrapper = ({ children }: { children: ReactNode }) => <LazyMotion features={domAnimation}>{children}</LazyMotion>;

export default LazyMotionWrapper;
