import { ModeToggle } from "@/components/mode-toggle";
import { ListComponents } from "@/components/list-components";

export function Header() {
  return (
    <header className="bg-transparent font-mono sticky top-0 py-2 z-50 w-full">
      <div className="container px-4 md:px-8 flex h-14 items-center justify-end gap-4">
        <ListComponents/>
        <ModeToggle />
      </div>
    </header>
  );
}
