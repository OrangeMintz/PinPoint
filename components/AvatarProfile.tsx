"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function AvatarProfile() {
  return (
    <>
      <div className="flex items-center gap-4 w-full max-w-xs font-extrabold text-foreground/90">
        <HoverCard openDelay={100} closeDelay={50}>
          <HoverCardTrigger className="cursor-pointer">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/avatar.jpg" alt="avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="hidden lg:block flex-1">
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="font-extrabold text-yellow-500">Lv. 12</span>
                  <Separator orientation="vertical" className="h-4 mx-1" />
                  <span className="font-extrabold">2450 / 3000 XP</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
            </div>
          </HoverCardTrigger>

          <HoverCardContent className="w-full max-w-xs bg-background font-extrabold">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/avatar.jpg" alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="w-full ">
                <h4 className="text-sm font-extrabold ">OrangeMint</h4>
                <p className="text-sm text-muted-foreground font-semibold">
                  Nickzgacus@gmail.com
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-1 px-2 py-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="font-extrabold text-yellow-500">Level 12</span>
                <span className="font-extrabold">2450 / 3000 XP</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>

            <div className="mt-2 space-y-1 text-sm">
              <Link
                href="/profile"
                className="block rounded px-2 py-1 hover:bg-primary/50 hover:text-white transition-colors"
              >
                Profile
              </Link>

              <Link
                href="/account"
                className="block rounded px-2 py-1 hover:bg-primary/50 hover:text-white transition-colors"
              >
                Account Details
              </Link>

              <Link
                href="/settings"
                className="block rounded px-2 py-1 hover:bg-primary/50 hover:text-white transition-colors"
              >
                Settings
              </Link>

              <Separator className="my-2" />

              <button className="w-full text-left rounded px-2 py-1 text-red-500 hover:bg-primary/50 hover:text-white transition-colors">
                Sign Out
              </button>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  );
}
