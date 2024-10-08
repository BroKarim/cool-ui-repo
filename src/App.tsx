import "shiki-magic-move/dist/style.css";
import React, { useState } from "react";
import Background from "./layout/background";
import OtpInput from "./components/otp-input/otp-input-demo";
import { ThemeProvider } from "./context/ThemeContext";
import { ModeToggle } from "./components/mode-toggle";
import { Header } from "./layout/header";

import { TimePickerDemo } from "./components/time-picker/time-picker-demo";
import { OTPInput } from "input-otp";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <ThemeProvider>
      <Background>
        <Header/>
        <div className="w-full flex items-center justify-center h-[100vh]">
          <OtpInput />
        </div>
      </Background>
    </ThemeProvider>
  );
}

export default App;
