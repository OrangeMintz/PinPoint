"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        variant={"outline"}
        size={"icon"}
        className="rounded-full"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <IconSun
          className=" absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
          size={24}
        />
        <IconMoon
          className=" absolute rotate-90 scale-0 dark:-rotate-0 dark:scale-100"
          size={24}
        />
      </Button>
    </>
  );
}
