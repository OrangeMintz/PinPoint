"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  IconBell,
  IconUserPlus,
  IconHeart,
  IconAlertCircle,
} from "@tabler/icons-react";

export function NotificationMenu() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full hover:bg-muted"
        >
          <IconBell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-72 p-0 rounded-xl overflow-hidden shadow-lg"
      >
        <DropdownMenuLabel className="px-4 py-2 text-base font-semibold bg-background/80">
          Notifications
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-64 overflow-y-auto bg-background/80">
          {/* Notification item */}
          <div className="flex items-start gap-3 px-4 py-3 hover:bg-muted/70 cursor-pointer">
            <IconUserPlus className="h-5 w-5 text-blue-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">Alice</span> sent you a friend
                request
              </p>
              <span className="text-xs text-muted-foreground">2m ago</span>
            </div>
          </div>

          <div className="flex items-start gap-3 px-4 py-3 hover:bg-muted/70 cursor-pointer">
            <IconHeart className="h-5 w-5 text-pink-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">Bob</span> liked your post
              </p>
              <span className="text-xs text-muted-foreground">10m ago</span>
            </div>
          </div>

          <div className="flex items-start gap-3 px-4 py-3 hover:bg-muted/70 cursor-pointer">
            <IconAlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm">Server maintenance scheduled tonight</p>
              <span className="text-xs text-muted-foreground">1h ago</span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />
        <button className="w-full px-4 py-2 text-center text-sm text-muted-foreground bg-background/80 hover:bg-muted/70">
          View all
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
