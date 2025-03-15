import PricingCards from "./pricing-cards";
import { Icons } from "@/assets/icons";
import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import { HStack } from "@/components/ui/h-stack";
import MagicBadge from "@/components/ui/magic-badge";
import { VStack } from "@/components/ui/v-stack";
import type { FCC } from "@/types";

type Props = {};

const PricingSection: FCC<Props> = (props) => {
   return (
      <MaxWidthContainer className="py-10">
         <AnimationContainer delay={0.1}>
            <VStack
               id="pricing"
               align={"center"}
               justify={"center"}
               spacing={"none"}
               className="mx-auto w-full max-w-xl py-8 lg:items-center"
            >
               <MagicBadge title="Simple Pricing" />
               <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                  Select the plan that suits you best.
               </h2>
               <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                  Start using Blog AI today and unlock additional features with
                  our pro plans.
               </p>
            </VStack>
         </AnimationContainer>
         <AnimationContainer delay={0.2}>
            <PricingCards />
         </AnimationContainer>
         <AnimationContainer delay={0.3}>
            <HStack
               pos={"center"}
               align={"start"}
               spacing={6}
               className="mx-auto mt-10 w-full max-w-5xl md:items-center lg:justify-evenly"
            >
               <div className="flex items-center gap-2">
                  <Icons.creditCard
                     width={20}
                     height={20}
                     className="text-foreground"
                  />
                  <span className="text-muted-foreground">
                     No credit card required
                  </span>
               </div>
            </HStack>
         </AnimationContainer>
      </MaxWidthContainer>
   );
};

export default PricingSection;
