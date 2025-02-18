import { Blogs } from "./_components";
import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import MagicBadge from "@/components/ui/magic-badge";
import { VStack } from "@/components/ui/v-stack";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "List of blogs",
   description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
};

const BlogPage = () => {
   return (
      <MaxWidthContainer>
         <AnimationContainer delay={0.1}>
            <VStack
               id="blog-page"
               spacing={"none"}
               align={"center"}
               className="py-10 mx-auto max-w-3xl"
            >
               <MagicBadge title="Blog" />
               <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-2xl text-foreground md:text-3xl lg:text-center">
                  Latest news and updates.
               </h2>
            </VStack>
         </AnimationContainer>
         <AnimationContainer
            delay={0.2}
            className="w-full py-10 md:py-15"
         >
            <Blogs />
         </AnimationContainer>
      </MaxWidthContainer>
   );
};

export default BlogPage;
