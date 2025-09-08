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
        className="w-80 p-6 rounded-lg shadow-xl border bg-card text-card-foreground"
      >
        {/* Header */}
        <div className="mb-5">
          <p className="text-xl font-extrabold text-foreground">
            Notifications
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            You have 3 unread messages.
          </p>
        </div>

        {/* Switch-like notification setting */}
        <div className="flex items-center gap-4 rounded-lg border p-4 mb-5 bg-background">
          <IconBell className="h-6 w-6" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground mb-1">
              Push Notifications
            </p>
            <p className="text-xs text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked="true"
            className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
          >
            <span className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-md transition-transform translate-x-5"></span>
          </button>
        </div>

        {/* Notification items */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Your call has been confirmed.
              </p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
            <div>
              <p className="text-sm font-medium text-foreground">
                You have a new message!
              </p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Your subscription is expiring soon!
              </p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
        </div>

        {/* Mark all button */}
        <Button
          variant="default"
          className="mt-6 w-full flex items-center justify-center"
        >
          <IconCheck className="h-5 w-5 mr-2" />
          Mark all as read
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
