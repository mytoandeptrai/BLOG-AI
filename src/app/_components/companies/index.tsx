import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";
import { COMPANIES_LIST } from "@/config/misc";
import type { FCC } from "@/types";

type Props = {};

const CompaniesSection: FCC<Props> = (props: Props) => {
   return (
      <MaxWidthContainer className="overflow-hidden">
         <AnimationContainer delay={0.4}>
            <div className="py-14">
               <div className="mx-auto px-4 md:px-8">
                  <h2 className="text-center font-heading font-medium text-neutral-400 text-sm uppercase">
                     Relied on by the top professionals in the industry.
                  </h2>
                  <div className="mt-8">
                     <InfiniteMovingCards
                        items={COMPANIES_LIST}
                        direction="right"
                        speed="slow"
                     />
                  </div>
               </div>
            </div>
         </AnimationContainer>
      </MaxWidthContainer>
   );
};

export default CompaniesSection;
