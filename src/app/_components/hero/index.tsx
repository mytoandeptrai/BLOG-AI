import { Icons } from "@/assets/icons";
import {
   AnimationContainer,
   MaxWidthContainer,
   TextTyping,
} from "@/components/global";
import { BorderAnimation } from "@/components/ui/border-animation";
import { Button } from "@/components/ui/button";
import { HStack } from "@/components/ui/h-stack";
import { VStack } from "@/components/ui/v-stack";
import type { FCC } from "@/types";
import type { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

type Props = {
   user: User | null;
};

const HeroSection: FCC<Props> = ({ user }) => {
   return (
      <MaxWidthContainer>
         <VStack
            id="hero"
            justify={"center"}
            align={"center"}
            className="bg-gradient-to-t from-background text-center"
         >
            <AnimationContainer
               delay={0.1}
               className="flex flex-col w-full items-center justify-center text-center"
            >
               <button
                  type="button"
                  className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
               >
                  <span>
                     <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                  </span>
                  <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                  <span className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-tr from-primary/20 blur-md" />
                  <span className="z-10 flex items-center justify-center gap-1 py-0.5 text-neutral-100 text-sm">
                     Welcome to Blog AI ✨
                     <Icons.arrowRight className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </span>
               </button>
               <TextTyping
                  as={"h1"}
                  text="AI-Powered Blogs With Media..."
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent"
               />
               <p className="mb-12 text-balance text-lg text-muted-foreground tracking-tight md:text-xl">
                  Make high-quality web journal posts with recordings,
                  <br className="hidden md:block" />
                  <span className="hidden md:block">
                     customize substance, and send out in Markdown organize
                     easily!
                  </span>
               </p>
               <HStack
                  noWrap
                  pos={"center"}
                  align={"center"}
                  className="whitespace-nowrap"
               >
                  <Button asChild>
                     <Link
                        href={user ? "/dashboard" : "/sign-in"}
                        className="flex items-center"
                     >
                        Begin creating at no cost.
                        <Icons.arrowRight
                           width={16}
                           height={16}
                           className="ml-2"
                        />
                     </Link>
                  </Button>
               </HStack>
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
                     src="/dashboard-dark.png"
                     alt="Dashboard"
                     width={1500}
                     height={1500}
                     quality={100}
                     className="rounded-md bg-foreground/10 ring-1 ring-border lg:rounded-xl"
                  />
                  <div className="-bottom-4 absolute inset-x-0 z-40 h-1/2 w-full bg-gradient-to-t from-background" />
                  <div className="md:-bottom-8 absolute inset-x-0 bottom-0 z-50 h-1/4 w-full bg-gradient-to-t from-background" />
               </div>
            </AnimationContainer>
         </VStack>
      </MaxWidthContainer>
   );
};

export default HeroSection;
