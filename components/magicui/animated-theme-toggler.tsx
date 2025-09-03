"use client";

// import { Moon, SunDim } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useRef } from "react";

export const AnimatedThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const newTheme = theme === "light" ? "dark" : "light";

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 400,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <>
      {/* <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
        {isDarkMode ? <SunDim /> : <Moon />}
      </button> */}
      <Button
        size="theme"
        ref={buttonRef}
        onClick={changeTheme}
        className="rounded-full bg-inherit ring-1 ring-foreground/30 dark:ring-foreground/20 text-foreground hover:bg-foreground/85 dark:hover:bg-foreground/85 hover:text-background dark:hover:text-background transition ease-in-out duration-300"
      >
        <IconSun className="absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        <IconMoon className="absolute rotate-90 scale-0 dark:-rotate-0 dark:scale-100" />
      </Button>
    </>
  );
};
