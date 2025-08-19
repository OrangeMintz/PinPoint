"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Support", href: "support" },
  { name: "Contact", href: "contact" },
];

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-50 bg-background/90 dark:bg-background/70 backdrop-blur-sm border-b border-border/50 ">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-3 lg:px-15"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">PinPoint</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
            <ThemeToggle />
            <Link
              href="/sign-in"
              className="text-sm/6 font-semibold text-foreground hover:text-primary transition-colors"
            >
              Sign in <span aria-hidden="true"></span>
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background/95 backdrop-blur-md p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">PinPoint</span>
                <Image
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  height={35}
                  width={35}
                />
              </Link>
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-foreground"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-secondary/50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-foreground hover:bg-secondary/50"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 py-10 sm:pt-24 lg:pt-22 min-h-screen">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/wallpaper.jpg"
            alt="World map background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
        </div>

        <div className="mx-auto max-w-2xl min-h-screen flex flex-col justify-center">
          {/* Announcement Banner */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-muted-foreground ring-1 ring-border backdrop-blur-sm bg-background/60 hover:ring-primary">
              Explore the world with PinPoint Geography.{" "}
              <a href="#" className="font-semibold text-primary">
                Play Now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="backdrop-blur-lg bg-card/70 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground">
                Master World Geography with PinPoint
              </h1>
              <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-muted-foreground">
                Challenge yourself to identify locations around the globe. Drop
                pins, guess countries, and explore the world from your browser.
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/play"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                >
                  Start Playing
                </Link>
                <Link
                  href="/about"
                  className="text-sm sm:text-base font-semibold text-foreground hover:text-accent transition-colors"
                >
                  Learn more →
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="backdrop-blur-sm bg-accent/30 rounded-lg p-4">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    195
                  </div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="backdrop-blur-sm bg-accent/30 rounded-lg p-4">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    10K+
                  </div>
                  <div className="text-sm text-muted-foreground">Locations</div>
                </div>
                <div className="backdrop-blur-sm bg-accent/30 rounded-lg p-4">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    Free
                  </div>
                  <div className="text-sm text-muted-foreground">To Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
