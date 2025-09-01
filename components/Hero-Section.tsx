import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <Image
              src="/wallpaper.jpg"
              alt="background"
              className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
              width="3276"
              height="4095"
            />
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <Link
                  href="#link"
                  className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                >
                  <span className="text-foreground text-sm font-bold font-mono">
                    v2.1.0 • New features and improvements available
                  </span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                  <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="mt-8 text-balance text-5xl md:text-7xl lg:mt-16 xl:text-[5rem] font-bold font-mono">
                  Explore the World!
                </div>
                <div className="mx-auto mt-8 max-w-2xl text-balance text-lg font-bold font-mono">
                  Get dropped anywhere from the busy streets of New York to the
                  beautiful beaches of Bali. Join 100 million players today!
                </div>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row gap-x-6">
                  <Link
                    href="/play"
                    className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:text- hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                  >
                    Try now!
                  </Link>

                  <Link
                    href="/about"
                    className="text-sm sm:text-base font-semibold text-foreground hover:text-foreground/70 transition-colors  duration-200"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20 ">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="relative aspect-15/8 max-w-6xl mx-auto overflow-hidden rounded-2xl border p-4 shadow-lg ring-1 ring-background dark:inset-shadow-white/20">
                <Image
                  src="https://static.fanbyte.com/uploads/2022/04/geoguessr-flags.png"
                  alt="app screen"
                  fill
                  className="hidden rounded-2xl object-cover dark:block"
                />
                <Image
                  src="https://static.fanbyte.com/uploads/2022/04/google-street-view.png"
                  alt="app screen"
                  fill
                  className="rounded-2xl object-cover dark:hidden"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
