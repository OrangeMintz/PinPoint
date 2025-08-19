import { Lightbulb, ListChecks, MessageCircleMore } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Feature() {
  return (
    <section className="py-32">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="flex w-full flex-col items-center mb-5">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <p className="text-sm text-muted-foreground">WHY WE ARE UNIQUE</p>
            <h2 className="text-3xl font-medium md:text-5xl">
              Bringing the best to you by the best in the industry
            </h2>

            <p className="text-muted-foreground md:max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              necessitatibus, culpa at vitae molestias tenetur explicabo.
              Voluptatum amet architecto suscipit pariatur eligendi repellendus
              mollitia dolore unde sint?
            </p>
          </div>
        </div>

        <Tabs defaultValue="feature-1">
          <TabsList className="flex h-auto w-full flex-col gap-2 bg-background md:flex-row my-5">
            <TabsTrigger
              value="feature-1"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                  <MessageCircleMore className="size-4 text-primary" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Get Started
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="feature-2"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                  <Lightbulb className="size-4 text-primary" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Get Ideas
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="feature-3"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10">
                  <ListChecks className="size-4 text-primary" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Build
                </p>
              </div>
              <p className="font-normal text-muted-foreground md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="feature-1">
            <img
              src="https://static.fanbyte.com/uploads/2022/04/geoguessr-flags.png"
              alt=""
              className="aspect-video rounded-md object-cover"
            />
          </TabsContent>
          <TabsContent value="feature-2">
            <img
              src="https://static.fanbyte.com/uploads/2022/04/google-street-view.png"
              alt=""
              className="aspect-video rounded-md object-cover"
            />
          </TabsContent>
          <TabsContent value="feature-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/World_alphabets_%26_writing_systems.svg/1920px-World_alphabets_%26_writing_systems.svg.png"
              alt=""
              className="aspect-video rounded-md object-cover"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
