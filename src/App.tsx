import "shiki-magic-move/dist/style.css";
import React, { useState } from "react";
import Background from "./layout/background";
import OtpInput from "./components/otp-input/otp-input-demo";
import { ThemeProvider } from "./context/ThemeContext";
import { ModeToggle } from "./components/mode-toggle";
import { Header } from "./layout/header";

import { TimePickerDemo } from "./components/time-picker/time-picker-demo";
import { OTPInput } from "input-otp";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";

import {TailwindMotionDemo} from "./components/tailwind-motion/tailwind-motion-demo";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={Router}/>
    </ThemeProvider>
  );
}

export default App;
