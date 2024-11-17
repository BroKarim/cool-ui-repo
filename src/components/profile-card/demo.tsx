import { ReloadWrapper } from "../reload-wrapper";
import { PopoverExample } from "./popover";

export default function CardTooltipDemo() {
  return (
    <>
      <ReloadWrapper className="w-full h-64 flex  items-center justify-center">
        <PopoverExample username="BroKarim" />
      </ReloadWrapper>
    </>
  );
}
