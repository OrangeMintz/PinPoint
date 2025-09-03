import Navigation from "./404/navigation";

export default function page404() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center ">
            <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
              <img src="/compass.gif" alt="compass" className="w-15" />
            </p>
            <h1 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-5xl">
              Lost in the Jungle?
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Oops, it looks like the page you&apos;re looking for doesn&apos;t
              exist.
            </p>
            <Navigation />
          </div>
        </div>
      </section>
    </>
  );
}
