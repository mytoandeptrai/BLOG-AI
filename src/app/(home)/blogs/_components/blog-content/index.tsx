import { Icons } from "@/assets/icons";
import { AnimationContainer } from "@/components/global";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import MagicCard from "@/components/ui/magic-card";
import { VStack } from "@/components/ui/v-stack";
import type { IPost } from "@/types/post.type";
import Link from "next/link";
import removeMd from "remove-markdown";

type Props = {
   blogs: IPost[];
};

const BlogContent = (props: Props) => {
   if (!props.blogs.length) return null;

   return (
      <>
         {props.blogs.map((blog) => (
            <VStack
               className="pb-20"
               spacing={"none"}
               justify={"center"}
               align={"center"}
               key={blog.id}
            >
               <AnimationContainer
                  delay={0.2}
                  className="pt-20 w-full"
               >
                  <VStack
                     spacing={"none"}
                     className="w-full mx-auto max-w-6xl px-4 md:px-0"
                     justify={"center"}
                     align={"center"}
                  >
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <MagicCard className="relative p-0">
                           <Card className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                              <CardHeader>
                                 <CardTitle
                                    className="text-lg sm:text-xl md:text-2xl truncate"
                                    title={blog.title}
                                 >
                                    {removeMd(blog.title)}
                                 </CardTitle>
                              </CardHeader>
                              <CardContent>
                                 <p className="line-clamp-3 text-muted-foreground text-xs sm:text-sm md:text-base">
                                    {blog.content
                                       .split("\n")
                                       .slice(1)
                                       .join("\n")}
                                 </p>
                              </CardContent>
                              <CardFooter className="mt-2 flex justify-end sm:mt-4">
                                 <Link href={`/blogs/${blog.id}`}>
                                    <div className="flex h-auto items-center p-0 text-primary text-xs hover:underline sm:text-sm">
                                       Read More
                                       <Icons.arrowRight className="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
                                    </div>
                                 </Link>
                              </CardFooter>
                           </Card>
                        </MagicCard>
                     </div>
                  </VStack>
               </AnimationContainer>
            </VStack>
         ))}
      </>
   );
};

export default BlogContent;
