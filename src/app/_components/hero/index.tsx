import { Icons } from "@/assets/icons";
import {
   AnimationContainer,
   MaxWidthContainer,
   TextTyping,
} from "@/components/global";
import { VStack } from "@/components/ui/v-stack";
import type { FCC } from "@/types";

const HeroSection: FCC = () => {
   return (
      <MaxWidthContainer>
         <VStack
            id="hero"
            justify={"center"}
            align={"center"}
            className="bg-gradient-to-t from-background text-center"
         >
            <AnimationContainer className="flex flex-col w-full items-center justify-center text-center">
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
            </AnimationContainer>
         </VStack>
      </MaxWidthContainer>
   );
};

export default HeroSection;
