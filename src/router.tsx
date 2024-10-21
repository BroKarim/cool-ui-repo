import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/app-layout";
// Twitter Demo
import TailwindMotion from "./pages/tailwind-motion";
import MotionPrimitive from "./pages/motion-primitive";

import Slider from "./components/motion-number/motion-number";
import BottomNavbar from "./components/animated-bottom-nav/bottom-nav-demo";

// import StepperDemo from "./components/stepper/stepper-demo";

//BehindUI Demo

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
          element: <TailwindMotion />,
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
        // {
        //   path: "stepper",
        //   element: <StepperDemo />,
        // },
      ],
    },
    {
      path: "/behind-ui",
      children: [
        // {
        //   path: "hero1",
        //   element: <SaaSHero1 />,
        // },
      ],
    },
  ],
  {
    basename: global.basename,
  }
);
