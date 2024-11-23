import { ReloadWrapper } from "../../reload-wrapper";
import TextonScroll from "./split-text";
import StaggerText from "./tes2";

export default function StaggerTextDemo() {
  return (
    <>
      {/* <TextonScroll /> */}
      <div className="w-full h-96 z-50 flex-col justify-center overflow-y-scroll ">
        <StaggerText text="The web isn't static anymore, interactivity and motion now dominate." bgColor="black" fgColor="red" />
      </div>
    </>
  );
}
