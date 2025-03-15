import { Icons } from "@/assets/icons";
import { AnimationContainer } from "@/components/global";
import { VStack } from "@/components/ui/v-stack";
import type { IPost } from "@/types/post.type";
import Link from "next/link";

type Props = {
   blogs: IPost[];
};

const BlogHeader = ({ blogs }: Props) => {
   const renderRedirectDashboard = () => {
      if (blogs.length) return null;
      return (
         <Link
            href="/dashboard"
            className="mt-6 text-center text-base text-muted-foreground md:text-lg"
         >
            <p className="flex items-center gap-2 text-muted-foreground text-sm hover:text-white hover:underline">
               <div>
                  <span>Go to Dashboard</span>
                  <Icons.arrowRight
                     width={16}
                     height={16}
                     className="ml-2"
                  />
               </div>
            </p>
         </Link>
      );
   };

   const renderHeading = () => {
      return (
         <h1 className="!leading-tight mt-2 text-center font-heading font-semibold text-2xl md:text-4xl lg:text-5xl">
            {blogs.length === 0
               ? "You have no blogs yet. Upload a video or audio to get started."
               : "Welcome to your blogs."}
         </h1>
      );
   };

   const renderSubHeading = () => {
      if (!blogs.length) return null;
      return (
         <p className="flex items-center gap-2 text-muted-foreground text-sm">
            Your blog posts
         </p>
      );
   };

   return (
      <AnimationContainer delay={0.1}>
         <VStack
            className="py-10 mx-auto max-w-4xl"
            align={"center"}
            justify={"center"}
            spacing={"none"}
         >
            {renderHeading()}
            {renderRedirectDashboard()}
            {renderSubHeading()}
         </VStack>
      </AnimationContainer>
   );
};

export default BlogHeader;
