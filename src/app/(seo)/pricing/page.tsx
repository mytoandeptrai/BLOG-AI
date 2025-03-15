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
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Pricing",
   description:
      "Discover our simple and clear pricing plans, tailored to suit your needs.",
};

const PricingPage = () => {
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
                  Clear and straightforward pricing
               </h2>
               <p className="mt-6 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                  Select a plan that fits your needs. No hidden costs, no
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
                     Common Questions
                  </h2>
                  <p className="mt-6 max-w-lg text-center text-neutral-500">
                     Here are some of the most frequently asked questions. If
                     you have any other inquiries, don’t hesitate to reach out.
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
