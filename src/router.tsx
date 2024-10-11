import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/app-layout";

import TailwindMotion from "./pages/tailwind-motion";

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
      ],
    },
  ],
  {
    basename: global.basename,
  }
);
