import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/app-layout";

import TailwindMotion from "./pages/tailwind-motion";
import MotionPrimitive from "./pages/motion-primitive";

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
          path: "/motion-primitive",
          element: <MotionPrimitive />,
        },
      ],
    },
  ],
  {
    basename: global.basename,
  }
);
