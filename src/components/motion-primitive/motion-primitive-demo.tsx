import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedGroupDemo from "./animated-group";
import { ReloadWrapper } from "../reload-wrapper";
export default function MotionPrimitiveDemo() {
  return (
    <>
      <ReloadWrapper>
        <AnimatedGroupDemo />
      </ReloadWrapper>
    </>
  );
}
