import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/app-layout";
// Twitter Demo
import TailwindMotion from "./pages/tailwind-motion";
import MotionPrimitive from "./pages/motion-primitive";

import Slider from "./components/motion-number/motion-number";
import BottomNavbar from "./components/animated-bottom-nav/bottom-nav-demo";

import StepperDemo from "./components/stepper/stepper-demo";
import EarthIconDemo from "./components/earth-icon/earth-icon";

import CodeViewer from "./components/code-viewer/code-viewer";
import OtpInput from "./components/otp-input/otp-input-demo";
import TerminalDemo from "./components/mac-terminal/demo";
import SimplePlayer from "./components/media-chrome/demo";
import { BentoDemo } from "./components/bento-scroll/demo";
import Bento from "./components/bento-scroll/bento-v0";
//BehindUI Demo
import HeroDemo2 from "./behindUI/demo2/demo2";
import Demo3 from "./behindUI/demo3/demo";

declare global {
  var basename: string;
}

export const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <OtpInput />,
        },
        {
          path: "motion-primitive",
          element: <MotionPrimitive />,
        },
        {
          path: "motion-number",
          element: <Slider />,
        },
        {
          path: "bottom-nav",
          element: <BottomNavbar />,
        },
        {
          path: "stepper",
          element: <StepperDemo />,
        },
        {
          path: "earth",
          element: <EarthIconDemo />,
        },
        // {
        //   path: "codeviewer",
        //   element: <CodeViewer />,
        // },
        {
          path: "terminal",
          element: <TerminalDemo />,
        },
        {
          path: "player",
          element: <SimplePlayer />,
        },
        {
          path: "bento",
          element: <BentoDemo />,
        },
      ],
    },
    {
      path: "/behind-ui",
      children: [
        {
          path: "hero1",
          element: <HeroDemo2 />,
        },
        {
          path: "hero2",
          element: <Demo3 />,
        },
      ],
    },
  ],
  {
    basename: global.basename,
  }
);
