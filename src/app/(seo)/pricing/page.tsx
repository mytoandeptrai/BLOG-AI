import { PRICING_FAQS } from "@/app/(seo)/pricing/constant";
import PricingCards from "@/app/_components/pricing/pricing-cards";
import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import MagicBadge from "@/components/ui/magic-badge";
import { VStack } from "@/components/ui/v-stack";
import type { FCC } from "@/types";

const PricingPage: FCC = () => {
   return (
      <MaxWidthContainer>
         <AnimationContainer delay={0.1}>
            <VStack
               id="pricing-page"
               spacing={"none"}
               align={"center"}
               className="py-10 mx-auto max-w-lg"
            >
               <MagicBadge title="Pricing" />
               <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-2xl text-foreground md:text-5xl lg:text-center">
                  Simple and transparent pricing
               </h2>
               <p className="mt-6 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                  Choose a suitable plan that works for you. No hidden fees. No
                  surprises.
               </p>
            </VStack>
         </AnimationContainer>
         <AnimationContainer delay={0.2}>
            <PricingCards />
         </AnimationContainer>
         <AnimationContainer delay={0.3}>
            <div className="mt-20 w-full pb-10">
               <VStack
                  spacing={"none"}
                  justify={"center"}
                  align={"center"}
                  className="w-full pt-12"
               >
                  <h2 className="mt-6 text-center font-semibold text-2xl lg:text-3xl xl:text-4xl">
                     Frequently Asked Questions
                  </h2>
                  <p className="mt-6 max-w-lg text-center text-neutral-500">
                     Here are some of the most common questions we get asked. If
                     you have a question that isn&apos;t answered here, feel
                     free to reach out to us.
                  </p>
               </VStack>
               <div className="mx-auto mt-20 w-full max-w-3xl">
                  <Accordion
                     type="single"
                     collapsible
                  >
                     {PRICING_FAQS.map((faq) => (
                        <AccordionItem
                           key={faq.id}
                           value={faq.id}
                        >
                           <AccordionTrigger>{faq.question}</AccordionTrigger>
                           <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                     ))}
                  </Accordion>
               </div>
            </div>
         </AnimationContainer>
      </MaxWidthContainer>
   );
};

export default PricingPage;
