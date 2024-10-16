import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/app-layout";
// Twitter Demo
import TailwindMotion from "./pages/tailwind-motion";
import MotionPrimitive from "./pages/motion-primitive";

//BehindUI Demo
import Home from "./behindUI/e-ticketing-bussiness";
declare global {
  var basename: string;
}

//kayaknya buat untuk BehindUI layout khusus, biar bisa custom layout dan navbar
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
      ],
    },
    {
      path: "/behind-ui",
      children: [
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: global.basename,
  }
);
