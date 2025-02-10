import { Icons } from "@/assets/icons";
import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import { buttonVariants } from "@/components/ui/button";
import { HStack } from "@/components/ui/h-stack";
import MagicBadge from "@/components/ui/magic-badge";
import { VStack } from "@/components/ui/v-stack";
import { cn } from "@/lib/utils";
import type { FCC } from "@/types";
import Link from "next/link";
import {} from "@/components/ui/card";
import { FEATURES_LIST } from "@/config/misc";

type Props = {};

const FeaturesSection: FCC<Props> = (props: Props) => {
   return (
      <MaxWidthContainer className="pt-10">
         <AnimationContainer delay={0.1}>
            <VStack
               id="features"
               spacing={"none"}
               align={"center"}
               className="py-8"
            >
               <MagicBadge title="Features" />
               <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                  Manage Blogs Like a Pro
               </h2>
               <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                  Blog AI is a cutting-edge blog generation tool that delivers
                  content-driven blogs in just seconds.
               </p>
            </VStack>
         </AnimationContainer>
         <AnimationContainer delay={0.2}>
            <div className="grid w-full auto-rows-[22rem] grid-cols-3 gap-4 py-8">
               {FEATURES_LIST.map((feature) => {
                  const { Icon, background, cta, description, href, name } =
                     feature;

                  const classNameMapping = {
                     "Blog posts": "lg:col-span-1",
                     "Search your blogs": "lg:col-span-2",
                     "Calendar picker": "col-span-3 lg:col-span-1",
                     "Connect your apps":
                        "lg:col-span-2 max-w-full overflow-hidden",
                  };

                  return (
                     <VStack
                        key={name}
                        justify={"between"}
                        spacing={"none"}
                        className={cn(
                           "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border border-border/60",
                           "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                           classNameMapping[name]
                        )}
                     >
                        <div>{background}</div>
                        <div className="group-hover:-translate-y-10 pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300">
                           {Icon}
                           <h3 className="font-semibold text-neutral-300 text-xl">
                              {name}
                           </h3>
                           <p className="max-w-lg text-neutral-400">
                              {description}
                           </p>
                        </div>
                        <HStack
                           align={"center"}
                           spacing={"none"}
                           className={cn(
                              "absolute bottom-0 w-full translate-y-10 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                           )}
                        >
                           <Link
                              href={href}
                              className={buttonVariants({
                                 size: "sm",
                                 variant: "ghost",
                                 className: "cursor-pointer",
                              })}
                           >
                              {cta}
                              <Icons.arrowRight
                                 size={16}
                                 className="ml-2"
                              />
                           </Link>
                        </HStack>
                        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
                     </VStack>
                  );
               })}
            </div>
         </AnimationContainer>
      </MaxWidthContainer>
   );
};

export default FeaturesSection;
