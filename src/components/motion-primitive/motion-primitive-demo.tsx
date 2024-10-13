import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedGroupDemo from "./animated-group";
export default function MotionPrimitiveDemo() {
  return (
    <>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Animated Group</TabsTrigger>
          <TabsTrigger value="slide">slide</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          {" "}
          <AnimatedGroupDemo />
        </TabsContent>
        <TabsContent value="slide" className="flex items-center justify-center">
          {/* animation : https://animated-fluent-emoji.vercel.app/ */}
          <img
            className="motion-preset-slide-right-lg motion-duration-1000"
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Angry%20Face%20with%20Horns.png"
            alt="Angry Face with Horns"
            width="80"
            height="80"
          />
        </TabsContent>
      </Tabs>
    </>
  );
}
