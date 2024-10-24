import { Outlet } from "react-router-dom";
import Background from "./background";
import { Header } from "./header";

export default function AppLayout() {
  return (
    <>
      <Background>
        <Header />
        <div className="w-full flex items-center px-6 justify-center h-[100vh]">
          <Outlet />
        </div>
      </Background>
    </>
  );
}
