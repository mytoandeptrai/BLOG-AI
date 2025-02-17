import { AnimationContainer } from "@/components/global";
import MagicBadge from "@/components/ui/magic-badge";
import { VStack } from "@/components/ui/v-stack";
import type { FCC } from "@/types";

const ChangelogPage: FCC = () => {
   return (
      <AnimationContainer delay={0.1}>
         <VStack
            id="changelog-page"
            spacing={"none"}
            align={"center"}
            className="py-10 mx-auto max-w-3xl"
         >
            <MagicBadge title="Changelog" />
            <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-2xl text-foreground md:text-3xl lg:text-center">
               Stay up to date with the latest changes to our platform.
            </h2>
            <p className="mt-6 pb-10 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
               We are developing...
            </p>
         </VStack>
      </AnimationContainer>
   );
};

export default ChangelogPage;
