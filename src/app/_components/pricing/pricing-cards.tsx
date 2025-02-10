"use client";
import { Icons } from "@/assets/icons";
import { BorderAnimation } from "@/components/ui/border-animation";
import { buttonVariants } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { HStack } from "@/components/ui/h-stack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip";
import { PLAN_MONTHLY_LIST } from "@/config/pricing";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Tab = "monthly" | "yearly";

const PricingCards = () => {
   const MotionTabTrigger = motion(TabsTrigger);

   const [activeTab, setActiveTab] = useState<Tab>("monthly");

   const plan = {
      id: "pro",
      name: "Pro",
      info: "For small businesses",
      price: {
         monthly: 17.99,
         yearly: Math.round(17.99 * 12 * (1 - 0.12)),
      },
      features: [
         { text: "Up to 500 Blog Posts", limit: "500 tags" },
         { text: "Up to 500 Transcriptions" },
         { text: "Up to 500 Posts stored" },
         {
            text: "Unlimited Markdown support",
            tooltip: "Export content in Markdown format",
         },
         { text: "SEO optimization tools" },
         { text: "Priority support", tooltip: "Get 24/7 chat support" },
         {
            text: "AI powered suggestions",
            tooltip: "Get up to 500 AI powered suggestions",
         },
      ],
      btn: {
         text: "Get started",
         href: "https://buy.stripe.com/test_cN26qF9dg9yI9YQ3ci",
         variant: "purple",
      },
      priceId: process.env.STRIPE_PRICE_ID_PRO_PLAN,
   };

   return (
      <Tabs
         defaultValue="monthly"
         className="flex w-full flex-col items-center justify-center"
      >
         <TabsList>
            <MotionTabTrigger
               value="monthly"
               onClick={() => setActiveTab("monthly")}
               className="relative"
            >
               {activeTab === "monthly" && (
                  <motion.div
                     layoutId="active-tab-indicator"
                     transition={{
                        type: "spring",
                        bounce: 0.6,
                     }}
                     className="absolute top-0 left-0 z-10 h-full w-full rounded-md bg-background shadow-sm"
                  />
               )}
               <span className="z-20">Monthly</span>
            </MotionTabTrigger>
            <MotionTabTrigger
               value="yearly"
               onClick={() => setActiveTab("yearly")}
               className="relative"
            >
               {activeTab === "yearly" && (
                  <motion.div
                     layoutId="active-tab-indicator"
                     transition={{
                        type: "spring",
                        bounce: 0.6,
                     }}
                     className="absolute top-0 left-0 z-10 h-full w-full rounded-md bg-background shadow-sm"
                  />
               )}
               <span className="z-20">Yearly</span>
            </MotionTabTrigger>
         </TabsList>
         <TabsContent
            value="monthly"
            className="mx-auto grid w-full max-w-5xl grid-cols-1 lg:grid-cols-3 pt-8 gap-5 md:gap-8"
         >
            {PLAN_MONTHLY_LIST.map((plan, index) => {
               const { name, features, info, price } = plan;
               return (
                  <Card
                     key={`${name}-${index}`}
                     className={cn(
                        "flex flex-col w-full rounded-xl border-border relative"
                     )}
                  >
                     {name === "Pro" && (
                        <BorderAnimation
                           size={150}
                           duration={12}
                           delay={3}
                        />
                     )}
                     <CardHeader
                        className={cn(
                           "border-border border-b bg-foreground/[0.03]",
                           {
                              "bg-purple-500/[0.07]": name === "Pro",
                           }
                        )}
                     >
                        <CardTitle
                           className={cn("font-medium text-lg", {
                              "text-muted-foreground": name !== "Pro",
                           })}
                        >
                           {name}
                        </CardTitle>
                        <CardDescription>{info}</CardDescription>
                        <h5 className="font-semibold text-3xl">
                           ${price.monthly}
                           <span className="font-normal text-base text-muted-foreground">
                              /month
                           </span>
                        </h5>
                     </CardHeader>
                     <CardContent className="space-y-4 pt-6">
                        {features.map((feature, index) => {
                           const { text, tooltip = undefined } = feature;
                           return (
                              <HStack
                                 key={`feature-pricing-${index}`}
                                 noWrap
                                 align={"center"}
                                 spacing={2}
                              >
                                 <Icons.circleCheck
                                    width={20}
                                    height={20}
                                    className="text-purple-500"
                                 />
                                 <TooltipProvider>
                                    <Tooltip delayDuration={0}>
                                       <TooltipTrigger asChild>
                                          <p
                                             className={cn("ml-2", {
                                                "!border-dashed cursor-pointer border-border border-b truncate":
                                                   !!tooltip,
                                             })}
                                          >
                                             {text}
                                          </p>
                                       </TooltipTrigger>
                                       {tooltip && (
                                          <TooltipContent>
                                             <p>{tooltip}</p>
                                          </TooltipContent>
                                       )}
                                    </Tooltip>
                                 </TooltipProvider>
                              </HStack>
                           );
                        })}
                     </CardContent>
                     <CardFooter className="mt-auto w-full">
                        <Link
                           href={plan.btn.href}
                           className={buttonVariants({
                              className: cn("w-full", {
                                 "bg-purple-500 text-white hover:bg-purple-500/80":
                                    plan.name === "Pro",
                              }),
                           })}
                        >
                           {plan.btn.text}
                        </Link>
                     </CardFooter>
                  </Card>
               );
            })}
         </TabsContent>
         <TabsContent
            value="yearly"
            className="mx-auto grid w-full max-w-5xl grid-cols-1 lg:grid-cols-3 pt-8 gap-5 md:gap-8"
         >
            {PLAN_MONTHLY_LIST.map((plan, index) => {
               const { name, features, info, price } = plan;
               return (
                  <Card
                     key={`${name}-yearly-${index}`}
                     className={cn(
                        "flex flex-col w-full rounded-xl border-border",
                        {
                           "border-2 border-purple-500": name === "Pro",
                        }
                     )}
                  >
                     <CardHeader
                        className={cn(
                           "border-border border-b bg-foreground/[0.03]",
                           {
                              "bg-purple-500/[0.07]": name === "Pro",
                           }
                        )}
                     >
                        <CardTitle
                           className={cn("font-medium text-lg", {
                              "text-muted-foreground": name !== "Pro",
                           })}
                        >
                           {name}
                        </CardTitle>
                        <CardDescription>{info}</CardDescription>
                        <h5 className="flex items-end font-semibold text-3xl">
                           ${price.yearly}
                           <div className="font-normal text-base text-muted-foreground">
                              {name !== "Free" ? "/year" : ""}
                           </div>
                           {name !== "Free" && (
                              <motion.span
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 exit={{ opacity: 0, y: 10 }}
                                 transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.25,
                                 }}
                                 className="ml-2 rounded-md bg-purple-500 px-2 py-0.5 font-medium text-foreground text-sm"
                              >
                                 -12%
                              </motion.span>
                           )}
                        </h5>
                     </CardHeader>
                     <CardContent className="space-y-4 pt-6">
                        {features.map((feature, index) => {
                           const { text, tooltip = false } = feature;
                           return (
                              <HStack
                                 key={`feature-pricing-${index}`}
                                 noWrap
                                 align={"center"}
                                 spacing={2}
                              >
                                 <Icons.circleCheck
                                    width={20}
                                    height={20}
                                    className="text-purple-500"
                                 />
                                 <TooltipProvider>
                                    <Tooltip delayDuration={0}>
                                       <TooltipTrigger asChild>
                                          <p
                                             className={cn("ml-2", {
                                                "!border-dashed cursor-pointer border-border border-b truncate":
                                                   !!tooltip,
                                             })}
                                          >
                                             {text}
                                          </p>
                                       </TooltipTrigger>
                                       {tooltip && (
                                          <TooltipContent>
                                             <p>{tooltip}</p>
                                          </TooltipContent>
                                       )}
                                    </Tooltip>
                                 </TooltipProvider>
                              </HStack>
                           );
                        })}
                     </CardContent>
                     <CardFooter className="mt-auto w-full">
                        <Link
                           href={plan.btn.href}
                           className={buttonVariants({
                              className: cn("w-full", {
                                 "bg-purple-500 text-white hover:bg-purple-500/80":
                                    plan.name === "Pro",
                              }),
                           })}
                        >
                           {plan.btn.text}
                        </Link>
                     </CardFooter>
                  </Card>
               );
            })}
         </TabsContent>
      </Tabs>
   );
};

export default PricingCards;
