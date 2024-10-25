// code : https://github.com/Kinfe123/farm-ui/blob/main/apps/www/components/ui/Sidebar/index.tsx

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import CodeBlock from "./code-block";
import { ReloadWrapper } from "../reload-wrapper";
export default function CodeViewer() {
  return (
    <>
      <ReloadWrapper>
        <div>
          <Tabs defaultValue="code" className="  w-full gap-4 scroll-m-20">
            <TabsList className="relative flex items-start gap-2 w-full">
              <TabsTrigger className="absolute inset-0 right-3 w-fit rounded-lg bg-yellow z-10" value="code">
                Code
              </TabsTrigger>
              <TabsTrigger className="absolute inset-0 left-20 right-3  w-fit rounded-lg bg-muted z-10" value="preview">
                Preview
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code">
              tess
              <div className="w-full h-full" />
            </TabsContent>
            <TabsContent value="preview">
              tess
              <div className="w-full h-full" />
            </TabsContent>
          </Tabs>
          <Button variant="outline" className="self-end">
            Copy
          </Button>
        </div>
      </ReloadWrapper>
    </>
  );
}
