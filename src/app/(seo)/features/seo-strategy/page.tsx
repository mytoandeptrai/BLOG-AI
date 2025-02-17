import { AnimationContainer } from "@/components/global";
import MagicBadge from "@/components/ui/magic-badge";
import { VStack } from "@/components/ui/v-stack";
import type { FCC } from "@/types";

const SeoCategoryPage: FCC = () => {
   return (
      <AnimationContainer delay={0.1}>
         <VStack
            id="seo-category-page"
            spacing={"none"}
            align={"center"}
            className="py-10 mx-auto max-w-3xl"
         >
            <MagicBadge title="Seo Category" />
            <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-2xl text-foreground md:text-3xl lg:text-center">
               Get in touch with us to learn more about our enterprise
               solutions.
            </h2>
            <p className="mt-6 pb-10 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
               We are developing...
            </p>
         </VStack>
      </AnimationContainer>
   );
};

export default SeoCategoryPage;
