import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  IconBrandDiscordFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form
        action=""
        className="bg-muted m-auto h-fit w-full max-w-md overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6">
          <div className="text-center">
            <Link
              href="/"
              aria-label="go home"
              className="mx-auto block w-fit"
            ></Link>
            <h1 className="mb-1 mt-4 text-lg font-semibold">
              Create a PinPoint Account
            </h1>
            <p className="text-sm">Welcome! Create an account to get started</p>
          </div>

          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="email" className="block text-sm">
                  Username
                </Label>
                <Input type="username" required name="username" id="username" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="block text-sm">
                  Email
                </Label>
                <Input type="email" required name="email" id="email" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className="block text-sm">
                Password
              </Label>
              <Input type="password" required name="password" id="password" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="block text-sm">
                Confirm Password
              </Label>
              <Input type="password" required name="password" id="password" />
            </div>

            <Button className="w-full">Sign In</Button>
          </div>

          <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <hr className="border-dashed" />
            <span className="text-muted-foreground text-xs">
              Or continue With
            </span>
            <hr className="border-dashed" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              <IconBrandDiscordFilled />
              Discord
            </Button>
            <Button variant="outline" className="w-full">
              <IconBrandGoogleFilled />
              Google
            </Button>
          </div>
        </div>

        <div className="p-4">
          <p className="text-center text-sm">
            Already have an account ?
            <a className="px-2 underline underline-offset-4" href="sign-in">
              Sign in
            </a>
          </p>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
