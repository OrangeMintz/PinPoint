import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <>
      <footer className="w-full">
        <div className="px-6 py-8">
          <hr className="my-6  md:my-10 border-muted-foreground" />
          <div className="px-4 sm:px-15">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
              <p className="text-sm text-muted-foreground">
                © Copyright 2025. All Rights Reserved.
              </p>

              <a
                href="https://orangemint-portfolio.vercel.app"
                className="hidden sm:flex items-center justify-center lg:ml-[-5rem]"
              >
                <img
                  className="h-7 object-contain"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt="portfolio"
                />
              </a>

              <div className="flex space-x-2 mt-4 sm:mt-0">
                <a
                  href="https://github.com/OrangeMintz"
                  className="mx-1 transition-colors duration-300"
                  aria-label="Github"
                >
                  <Button
                    className="flex items-center justify-center"
                    variant={"social"}
                    size={"social"}
                  >
                    <IconBrandGithub />
                  </Button>
                </a>

                <a
                  href="https://www.facebook.com/OrangeMintz"
                  className="mx-1 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Button
                    className="flex items-center justify-center"
                    variant={"social"}
                    size={"social"}
                  >
                    <IconBrandFacebook />
                  </Button>
                </a>

                <a
                  href="https://discord.com/users/505809822239948806"
                  className="mx-1 transition-colors duration-300"
                  aria-label="Discord"
                >
                  <Button
                    className="flex items-center justify-center"
                    variant={"social"}
                    size={"social"}
                  >
                    <IconBrandDiscord />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
