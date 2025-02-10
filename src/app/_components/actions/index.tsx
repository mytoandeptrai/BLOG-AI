import { Icons } from "@/assets/icons";
import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { VStack } from "@/components/ui/v-stack";
import type { FCC } from "@/types";
import Link from "next/link";

const ActionsSection: FCC = () => {
   return (
      <MaxWidthContainer className="scrollbar-hide mt-20 max-w-[100vw] overflow-x-hidden">
         <AnimationContainer delay={0.1}>
            <LampContainer>
               <VStack
                  align={"center"}
                  justify={"center"}
                  spacing={"none"}
                  className="w-full text-center"
               >
                  <h2 className="!leading-[1.15] mt-8 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text py-4 text-center font-heading font-medium text-4xl text-transparent tracking-tight md:text-7xl">
                     Step into the Future of AI <br />
                     Content Creation
                  </h2>
                  <p className="mx-auto mt-6 max-w-md text-muted-foreground">
                     Unlock the future of content creation with our
                     cutting-edge, AI-powered platform. Let AI do the heavy
                     lifting, so you can focus on what matters most—your ideas.
                  </p>
                  <div className="mt-6">
                     <Button>
                        <Link href="/sign-in">Get started for free</Link>
                        <Icons.arrowRight className="ml-2" />
                     </Button>
                  </div>
               </VStack>
            </LampContainer>
         </AnimationContainer>
      </MaxWidthContainer>
   );
};

export default ActionsSection;
