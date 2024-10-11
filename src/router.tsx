import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/app-layout";

import TailwindMotion from "./pages/tailwind-motion";
import Home from "./pages/home";

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
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: global.basename,
  }
);
