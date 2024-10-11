import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TailwindMotionDemo() {
  return (
    <>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Typewriter</TabsTrigger>
          <TabsTrigger value="fade">Fade</TabsTrigger>
          <TabsTrigger value="blur">blur</TabsTrigger>
          <TabsTrigger value="shake">shake</TabsTrigger>
          <TabsTrigger value="confetti">confetti</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          {" "}
          <h1 className="motion-preset-typewriter-[24] font-mono">Hello Tailwind Motion</h1>
        </TabsContent>
        <TabsContent value="fade" className="flex items-center justify-center">
          {/* from : https://animated-fluent-emoji.vercel.app/ */}
          <img
            className="motion-preset-slide-right-lg motion-duration-1000"
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Angry%20Face%20with%20Horns.png"
            alt="Angry Face with Horns"
            width="60"
            height="60"
          />
        </TabsContent>
        <TabsContent value="blur" className="flex items-center justify-center">
          <img
            className="motion-preset-blur-right-lg  motion-duration-1500 "
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png"
            alt="Beating Heart"
            width="60"
            height="60"
          />
        </TabsContent>
        <TabsContent value="shake" className="flex items-center justify-center">
          <img
            className="hover:motion-preset-bounce motion-duration-150 "
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Steam%20From%20Nose.png"
            alt="Face with Steam From Nose"
            width="60"
            height="60"
          />
        </TabsContent>
        <TabsContent value="confetti" className="flex items-center justify-center">
          <img
            className="hover:motion-rotate-in-[0.5turn]  motion-duration-1500 "
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Green%20Heart.png"
            alt="Green Heart"
            width="60"
            height="60"
          />
        </TabsContent>
      </Tabs>
    </>
  );
}
