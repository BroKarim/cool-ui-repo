import * as React from "react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { routes } from "@/data/router-data";
export function ListComponents() {
  const [position, setPosition] = React.useState(window.location.pathname);

  const handleNavigation = (path: string) => {
    setPosition(path);
    window.location.href = path;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-sm">
          Other components
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 font-mono">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {routes.map((route) => (
            <DropdownMenuRadioItem key={route.path} value={route.path}>
              <a onClick={() => handleNavigation(route.path)}>{route.label}</a>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
