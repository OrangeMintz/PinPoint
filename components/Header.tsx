"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import React from "react";
import { buttonVariants } from "@/components/ui/button";

const menuItems = [
  { name: "Play", href: "/" },
  { name: "Leaderboards", href: "leaderboard" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import AvatarProfile from "./AvatarProfile";

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background/80 fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto w-full px-12 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-[10px] lg:gap-0 lg:py-[10px]">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
              <div className="flex items-center gap-4 lg:hidden">
                <AvatarProfile />

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-foreground/90 hover:text-accent-foreground block duration-150 font-extrabold"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base text-center">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150 font-extrabold"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 md:flex-row md:gap-4 md:space-y-0 md:w-fit md:mx-auto">
                <div className="flex justify-center">
                  <AnimatedThemeToggler />
                </div>
                <Link
                  href="sign-in"
                  className="text-white italic bg-play-gradient text-shadow-play shadow-play transition-transform duration-200 hover:scale-[1.04] px-3 py-1.5 has-[>svg]:px-2.5 inline-flex items-center rounded-full text-sm font-black justify-center"
                >
                  Play Now
                </Link>
                <div className="hidden lg:flex justify-center">
                  <AvatarProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
