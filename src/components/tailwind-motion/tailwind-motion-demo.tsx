import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TailwindMotionDemo() {
  return (
    <>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Typewriter</TabsTrigger>
          <TabsTrigger value="slide">slide</TabsTrigger>
          <TabsTrigger value="blur">blur</TabsTrigger>
          <TabsTrigger value="shake">shake</TabsTrigger>
          <TabsTrigger value="rotate">rotate</TabsTrigger>
          <TabsTrigger value="fade">fade</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          {" "}
          <h1 className="motion-preset-typewriter-[24] text-2xl motion-duration-2000 font-mono flex w-full gap-2">
            Created by BroKariim <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Peeking%20Eye.png" alt="Face with Peeking Eye" width="40" height="40" />
          </h1>
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
        <TabsContent value="blur" className="flex items-center justify-center">
          <img
            className="motion-preset-blur-right-lg  motion-duration-1500 "
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png"
            alt="Beating Heart"
            width="80"
            height="80"
          />
        </TabsContent>
        <TabsContent value="shake" className="flex items-center justify-center">
          <img
            className="hover:motion-preset-bounce motion-duration-150 "
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Steam%20From%20Nose.png"
            alt="Face with Steam From Nose"
            width="80"
            height="80"
          />
        </TabsContent>
        <TabsContent value="rotate" className="flex items-center justify-center">
          <img className="hover:motion-rotate-in-[0.5turn]  motion-duration-1500 " src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Ghost.png" alt="Ghost" width="80" height="80" />
        </TabsContent>
        <TabsContent value="fade" className="flex items-center justify-center">
          <img
            className="motion-preset-fade   motion-duration-1500 "
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hear-No-Evil%20Monkey.png"
            alt="Hear-No-Evil Monkey"
            width="80"
            height="80"
          />
        </TabsContent>
      </Tabs>
    </>
  );
}
