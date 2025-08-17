import { IconExclamationCircle } from "@tabler/icons-react";
import Navigation from "./404/navigation";

export default function page404() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
              <IconExclamationCircle />
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              The page you are looking for doesn&apos;t exist. Here are some
              helpful links:
            </p>
            <Navigation />
          </div>
        </div>
      </section>
    </>
  );
}
