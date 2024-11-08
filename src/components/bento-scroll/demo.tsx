import { ReloadWrapper } from "../reload-wrapper";
import { BentoCard, BentoGrid } from "./bento-template";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const features = [
  {
    name: "Understanding client need",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    name: "Quality and attention",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1703738138158-6dc3daeb134d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "Flexibility and adaptability",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1702267320738-9c524638e3ac?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "Focus on user",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1520529890308-f503006340b4?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Innovative digital",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1709236709023-4904f2cc2c21?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    name: "Understanding client need",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1702267320738-9c524638e3ac?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-4 lg:col-end-4 lg:row-start-3 lg:row-end-4  ",
  },
  {
    name: "Understanding client need",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1703539279365-bbdc6d0cdd79?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-4 lg:col-end-4 lg:row-start-1 lg:row-end-3 ",
  },
  {
    name: "Understanding client need",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1698296725423-9ede5de2d624?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-5 lg:col-end-5 lg:row-start-1 lg:row-end-4",
  },
  {
    name: "Understanding client need",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1716372409137-7ad0100d57ab?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-6 lg:col-end-6 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Understanding client need",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    href: "/",
    cta: "Learn more",
    background: "https://images.unsplash.com/photo-1721326500153-5b74505a4245?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "lg:col-start-6 lg:col-end-6 lg:row-start-2 lg:row-end-4",
  },
];
export function BentoDemo() {
  return (
    <>
      <ReloadWrapper className="p-4">
        {/* <ScrollArea className=" w-full grid  auto-rows-[22rem] lg:grid-rows-3  grid-cols-3 gap-4  h-[500px]">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
          <ScrollBar orientation="horizontal" className="w-0 bg-transparent  " />
        </ScrollArea> */}
        <BentoGrid className="lg:grid-rows-3 font-sans h-[400px] p-2">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </ReloadWrapper>
    </>
  );
}
