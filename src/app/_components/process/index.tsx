import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { PROCESS_LIST } from "@/config/misc";
import type { FCC } from "@/types";

type Props = {};

const ProcessSection: FCC<Props> = (props) => {
   return (
      <MaxWidthContainer className="py-10">
         <AnimationContainer delay={0.1}>
            <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center py-8 lg:items-center">
               <MagicBadge title="The Process" />
               <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                  Generate content effortlessly in 3 steps
               </h2>
               <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                  Easily repurpose your content into SEO focused blog posts
               </p>
            </div>
         </AnimationContainer>
         <div className="grid w-full grid-cols-1 gap-4 py-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {PROCESS_LIST.map((process, index) => {
               return (
                  <AnimationContainer
                     delay={0.2 * index}
                     key={`process-${index}`}
                  >
                     <MagicCard className="group md:py-8">
                        <div className="flex w-full flex-col items-start justify-center">
                           {process.Icon}
                           <div className="relative flex flex-col items-start">
                              <span className="-top-8 group-hover:scale-75 transition-all duration-300 ease-in-out absolute right-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border pt-0.5 font-medium text-2xl text-foreground">
                                 {index + 1}
                              </span>
                              <h3 className="mt-6 font-medium text-base text-foreground">
                                 {process.title}
                              </h3>
                              <p className="mt-2 text-muted-foreground text-sm">
                                 {process.description}
                              </p>
                           </div>
                        </div>
                     </MagicCard>
                  </AnimationContainer>
               );
            })}
         </div>
      </MaxWidthContainer>
   );
};

export default ProcessSection;
