import { SAMPLE_BLOGS } from "@/app/(seo)/resources/blog/constant";
import { AnimationContainer } from "@/components/global";
import { VStack } from "@/components/ui/v-stack";
import type { FCC } from "@/types";

interface Props {
   params: {
      slug: string;
   };
}

const BlogPage: FCC<Props> = ({ params }) => {
   const blog = SAMPLE_BLOGS.find((blog) => blog.slug === params.slug);
   return (
      <VStack
         align={"center"}
         justify={"center"}
         spacing={"none"}
         className="mx-auto max-w-6xl px-4 pb-40 md:px-0"
      >
         <AnimationContainer delay={0.3}>
            <VStack
               align={"center"}
               justify={"center"}
               spacing={"none"}
            >
               <h1 className="!leading-tight mt-6 text-center font-heading font-semibold text-2xl md:text-4xl lg:text-5xl">
                  {blog?.title}
               </h1>
               <p className="mt-6 text-center text-base text-muted-foreground md:text-lg">
                  {blog?.description}
               </p>
            </VStack>
         </AnimationContainer>
      </VStack>
   );
};

export default BlogPage;
