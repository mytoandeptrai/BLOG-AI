import { Icons } from "@/assets/icons";
import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import { BorderAnimation } from "@/components/ui/border-animation";
import { Button } from "@/components/ui/button";
import { HStack } from "@/components/ui/h-stack";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { VStack } from "@/components/ui/v-stack";
import { COMPANIES_LIST } from "@/config/misc";
import type { FCC } from "@/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Analytics",
   description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
};

const AnalyticsPage: FCC = () => {
   return (
      <MaxWidthContainer>
         <AnimationContainer
            delay={0.1}
            className="w-full"
         >
            <VStack
               id="analytics-page"
               spacing={"none"}
               align={"center"}
               className="mx-auto max-w-xl"
            >
               <MagicBadge title="Analytics" />
               <h1 className="!leading-tight mt-6 text-center font-heading font-semibold text-2xl md:text-4xl lg:text-5xl">
                  Advanced analytics for your business
               </h1>
               <p className="mt-6 text-center text-base text-muted-foreground md:text-lg">
                  Gain deep insights into your content performance with
                  real-time analytics. Track record, device usage, and more to
                  optimize your strategy.
               </p>
               <HStack className="mt-8 flex items-center justify-center gap-x-4">
                  <Button
                     size="sm"
                     asChild
                  >
                     <Link href="/dashboard">Get started</Link>
                  </Button>
                  <Button
                     size="sm"
                     variant="outline"
                     asChild
                  >
                     <Link href="/blog">Learn more</Link>
                  </Button>
               </HStack>
            </VStack>
         </AnimationContainer>
         <AnimationContainer
            delay={0.2}
            className="relative w-full bg-transparent px-2 py-20 md:py-32"
         >
            <div className="gradient -translate-x-1/2 absolute inset-0 left-1/2 h-1/4 w-3/4 animate-image-glow blur-[5rem] md:top-[10%] md:h-1/3" />
            <div className="-m-2 lg:-m-4 rounded-xl bg-opacity-50 p-2 ring-1 ring-foreground/20 ring-inset backdrop-blur-3xl lg:rounded-2xl">
               <BorderAnimation
                  size={250}
                  duration={12}
                  delay={9}
               />
               <Image
                  src="/analytics.png"
                  alt="Analytics"
                  width={1500}
                  height={1500}
                  quality={100}
                  className="rounded-md bg-foreground/10 ring-1 ring-border lg:rounded-xl"
               />
               <div className="-bottom-4 absolute inset-x-0 z-40 h-1/2 w-full bg-gradient-to-t from-background" />
               <div className="md:-bottom-8 absolute inset-x-0 bottom-0 z-50 h-1/4 w-full bg-gradient-to-t from-background" />
            </div>
         </AnimationContainer>
         <AnimationContainer delay={0.3}>
            <div className="py-3">
               <div className="mx-auto px-4 md:px-8">
                  <h2 className="text-center font-heading font-medium text-neutral-400 text-sm uppercase">
                     Trusted by the best in the industry
                  </h2>
                  <div className="mt-8">
                     <ul className="flex flex-wrap items-center justify-center gap-6 py-8 md:gap-x-16">
                        {COMPANIES_LIST.map((company, index) => (
                           <li key={`analytics-${index}`}>
                              <Image
                                 src={company.href}
                                 alt={company.href}
                                 width={80}
                                 height={80}
                                 quality={100}
                                 className="h-auto w-28"
                              />
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </AnimationContainer>
         <AnimationContainer
            delay={0.4}
            className="pt-5 -mb-20 md:-mb-32 lg:-mb-40"
         >
            <LampContainer className="mx-auto max-w-2xl">
               <div className="relative flex w-full flex-col items-center justify-center text-center">
                  <h2 className="mt-8 bg-gradient-to-br from-neutral-300 to-neutral-500 bg-clip-text py-4 text-center font-heading font-semibold text-4xl text-transparent tracking-tight md:text-7xl">
                     Power up your content strategy
                  </h2>
                  <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
                     Take control of your content with advanced features and
                     real-time insights. Simplify your workflow and achieve
                     more.
                  </p>
                  <div className="mt-6">
                     <Button asChild>
                        <Link
                           href="/sign-in"
                           className="flex items-center"
                        >
                           Get started for free
                           <Icons.arrowRight
                              width={16}
                              height={16}
                              className="ml-2"
                           />
                        </Link>
                     </Button>
                  </div>
               </div>
            </LampContainer>
         </AnimationContainer>
      </MaxWidthContainer>
   );
};

export default AnalyticsPage;
