import { Icons } from "@/assets/icons";
import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { VStack } from "@/components/ui/v-stack";
import { REVIEW_LIST } from "@/config/misc";
import type { FCC } from "@/types";

const CustomersSection: FCC = () => {
   return (
      <MaxWidthContainer className="pt-10">
         <AnimationContainer delay={0.1}>
            <VStack
               id="features"
               spacing={"none"}
               align={"center"}
               className="py-8"
            >
               <MagicBadge title="Our Customers" />
               <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                  What our users are saying
               </h2>
               <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                  Here&apos;s what some of our users have to say about Blog AI.
               </p>
            </VStack>
         </AnimationContainer>
         <div className="grid grid-cols-1 place-items-start gap-4 py-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <div className="flex h-min flex-col items-start gap-6">
               {REVIEW_LIST.slice(0, 3).map((review, index) => (
                  <AnimationContainer
                     delay={0.3 * index}
                     key={`review-first-${index}`}
                  >
                     <MagicCard
                        key={index}
                        className="md:p-0"
                     >
                        <Card className="flex h-min w-full flex-col border-none">
                           <CardHeader className="space-y-0  flex-shrink-0">
                              <CardTitle className="font-medium text-lg text-muted-foreground">
                                 {review.name}
                              </CardTitle>
                              <CardDescription>
                                 {review.username}
                              </CardDescription>
                           </CardHeader>
                           <CardContent className="space-y-4 pb-4 flex-1">
                              <p className="text-muted-foreground">
                                 {review.review}
                              </p>
                           </CardContent>
                           <CardFooter className="mt-auto w-full space-x-1">
                              {Array.from({ length: review.rating }, (_, i) => (
                                 <Icons.star
                                    key={`${i}-star`}
                                    width={20}
                                    height={20}
                                    className="fill-yellow-500 text-yellow-500"
                                 />
                              ))}
                           </CardFooter>
                        </Card>
                     </MagicCard>
                  </AnimationContainer>
               ))}
            </div>
            <div className="flex h-min flex-col items-start gap-6">
               {REVIEW_LIST.slice(3, 6).map((review, index) => (
                  <AnimationContainer
                     delay={0.4 * index}
                     key={`review-second-${index}`}
                  >
                     <MagicCard
                        key={index}
                        className="md:p-0"
                     >
                        <Card className="flex h-min w-full flex-col border-none">
                           <CardHeader className="space-y-0  flex-shrink-0">
                              <CardTitle className="font-medium text-lg text-muted-foreground">
                                 {review.name}
                              </CardTitle>
                              <CardDescription>
                                 {review.username}
                              </CardDescription>
                           </CardHeader>
                           <CardContent className="space-y-4 pb-4 flex-1">
                              <p className="text-muted-foreground">
                                 {review.review}
                              </p>
                           </CardContent>
                           <CardFooter className="mt-auto w-full space-x-1">
                              {Array.from({ length: review.rating }, (_, i) => (
                                 <Icons.star
                                    key={`${i}-star`}
                                    width={20}
                                    height={20}
                                    className="fill-yellow-500 text-yellow-500"
                                 />
                              ))}
                           </CardFooter>
                        </Card>
                     </MagicCard>
                  </AnimationContainer>
               ))}
            </div>
            <div className="flex h-min flex-col items-start gap-6">
               {REVIEW_LIST.slice(6, 9).map((review, index) => (
                  <AnimationContainer
                     delay={0.5 * index}
                     key={`review-third-${index}`}
                  >
                     <MagicCard
                        key={index}
                        className="md:p-0"
                     >
                        <Card className="flex h-min w-full flex-col border-none">
                           <CardHeader className="space-y-0  flex-shrink-0">
                              <CardTitle className="font-medium text-lg text-muted-foreground">
                                 {review.name}
                              </CardTitle>
                              <CardDescription>
                                 {review.username}
                              </CardDescription>
                           </CardHeader>
                           <CardContent className="space-y-4 pb-4 flex-1">
                              <p className="text-muted-foreground">
                                 {review.review}
                              </p>
                           </CardContent>
                           <CardFooter className="mt-auto w-full space-x-1">
                              {Array.from({ length: review.rating }, (_, i) => (
                                 <Icons.star
                                    key={`${i}-star`}
                                    width={20}
                                    height={20}
                                    className="fill-yellow-500 text-yellow-500"
                                 />
                              ))}
                           </CardFooter>
                        </Card>
                     </MagicCard>
                  </AnimationContainer>
               ))}
            </div>
         </div>
      </MaxWidthContainer>
   );
};

export default CustomersSection;
