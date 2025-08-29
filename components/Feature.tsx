export default function Feature() {
  return (
    <>
      <section className="py-32">
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="flex flex-col overflow-clip rounded-xl md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="Feature 1"
                  className="aspect-16/9 h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-extrabold md:mb-4 md:text-2xl lg:mb-6">
                  Feature 1
                </h3>
                <p className="lg:text-lg font-semibold">
                  Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                  imperdiet magna nec massa consectetur, id interdum ante
                  congue.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-extrabold md:mb-4 md:text-2xl lg:mb-6">
                  Feature 2
                </h3>
                <p className="lg:text-lg font-semibold">
                  Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                  imperdiet magna nec massa consectetur, id interdum ante
                  congue.
                </p>
              </div>
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt="Feature 2"
                  className="aspect-16/9 h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="Feature 1"
                  className="aspect-16/9 h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-extrabold md:mb-4 md:text-2xl lg:mb-6">
                  Feature 1
                </h3>
                <p className="lg:text-lg font-semibold">
                  Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                  imperdiet magna nec massa consectetur, id interdum ante
                  congue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
