import "shiki-magic-move/dist/style.css";
import React, { useState } from "react";
import Background from "./layout/background";

import { TimePickerDemo } from "./components/time-picker/time-picker-demo";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <Background>
      <div className="w-full flex items-center justify-center h-[100vh]">
        <TimePickerDemo date={selectedDate} setDate={setSelectedDate} />
      </div>
    </Background>
  );
}

export default App;
