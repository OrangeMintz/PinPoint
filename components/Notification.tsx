"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  IconBell,
  IconUserPlus,
  IconHeart,
  IconAlertCircle,
  IconCheck,
  IconCircleCheckFilled,
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
        className="w-80 p-0 rounded-xl overflow-hidden shadow-lg"
      >
        {/* Header */}
        <div className="px-4 py-3 border-b bg-background">
          <h3 className=" text-foreground font-extrabold">Notifications</h3>
          <p className="text-sm text-muted-foreground font-bold">
            You have 3 unread messages.
          </p>
        </div>

        <div className="max-h-64 overflow-y-auto">
          <div className="flex items-start gap-3 px-4 py-3 hover:bg-muted/70 cursor-pointer bg-background">
            <IconUserPlus className="h-5 w-5 text-blue-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-bold">
                <span>Alice</span> sent you a friend request
              </p>
              <span className="text-xs text-muted-foreground ">2m ago</span>
            </div>
          </div>

          <div className="flex items-start gap-3 px-4 py-3 hover:bg-muted/70 cursor-pointer bg-background">
            <IconHeart className="h-5 w-5 text-pink-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-bold">
                <span>Bob</span> liked your post
              </p>
              <span className="text-xs text-muted-foreground">10m ago</span>
            </div>
          </div>

          <div className="flex items-start gap-3 px-4 py-3 hover:bg-muted/70 cursor-pointer bg-background">
            <IconAlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-bold">
                Server maintenance scheduled tonight
              </p>
              <span className="text-xs text-muted-foreground">1h ago</span>
            </div>
          </div>
        </div>

        {/* Footer button */}
        <div className="p-3 bg-background">
          <Button
            variant="default"
            className="w-full flex items-center justify-center"
          >
            <IconCheck className="!h-5 !w-5" />
            Mark all as read
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
