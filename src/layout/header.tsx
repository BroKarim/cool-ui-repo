import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="bg-transparent font-mono sticky top-0 z-50 w-full">
      <div className="container px-4 md:px-8 flex h-14 items-center justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
