
import { ThemeProvider } from "./context/ThemeContext";

import { RouterProvider } from "react-router-dom";
import { Router } from "./router";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={Router}/>
    </ThemeProvider>
  );
}

export default App;
