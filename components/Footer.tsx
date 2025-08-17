import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 w-full">
        <div className="px-6 py-8">
          <div className="flex flex-col items-center text-center"></div>

          <hr className="my-6  border-gray-200 md:my-10 dark:border-gray-700" />
          <div className="px-4 sm:px-15">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                © Copyright 2025. All Rights Reserved.
              </p>

              <a
                href="https://orangemint-portfolio.vercel.app"
                className="hidden sm:block"
              >
                <img
                  className="w-auto h-7 "
                  src="https://merakiui.com/images/full-logo.svg"
                  alt="portfolio"
                />
              </a>

              <div className="flex space-x-2 mt-4 sm:mt-0">
                <a
                  href="github.com/OrangeMintz"
                  className="mx-1 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800">
                    <IconBrandGithub size={20} color="white" />
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/OrangeMintz"
                  className="mx-1 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800">
                    <IconBrandFacebook size={20} color="white" />
                  </div>
                </a>

                <a
                  href="https://discord.com/users/505809822239948806"
                  className="mx-1 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800">
                    <IconBrandDiscord size={20} color="white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
