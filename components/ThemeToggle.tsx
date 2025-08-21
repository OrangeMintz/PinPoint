"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        size="theme"
        className="rounded-full bg-inherit ring-1 ring-foreground/30 dark:ring-foreground/20 text-foreground hover:bg-foreground/85 dark:hover:bg-foreground/85 hover:text-background dark:hover:text-background transition ease-in-out duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <IconSun className="absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        <IconMoon className="absolute rotate-90 scale-0 dark:-rotate-0 dark:scale-100" />
      </Button>
    </>
  );
}
