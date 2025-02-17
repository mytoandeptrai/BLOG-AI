import { SAMPLE_BLOGS } from "@/app/(seo)/resources/blog/constant";
import {
   Card,
   CardContent,
   CardDescription,
   CardTitle,
} from "@/components/ui/card";
import MagicCard from "@/components/ui/magic-card";
import { VStack } from "@/components/ui/v-stack";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
   return (
      <VStack
         align={"center"}
         justify={"center"}
         spacing={"none"}
         className="mx-auto px-4 md:px-0 w-full"
      >
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_BLOGS.map((blog, index) => (
               <MagicCard
                  key={`blog-${index}`}
                  className="relative !p-0 "
               >
                  <Link
                     href={`/resources/blog/${blog.slug}`}
                     className="-z-1 absolute inset-0 h-full w-full"
                  />
                  <Card className="group border-0">
                     <CardContent className="p-4 lg:p-6">
                        <VStack
                           align={"center"}
                           justify={"center"}
                           spacing={"none"}
                           className="h-40 overflow-hidden lg:h-52"
                        >
                           <Image
                              src={blog.image}
                              alt={blog.title}
                              width={1024}
                              height={1024}
                              unoptimized
                              className="h-full w-full rounded-lg object-cover"
                           />
                        </VStack>
                        <VStack
                           justify={"start"}
                           align={"start"}
                           spacing={"none"}
                           className="mt-4"
                        >
                           <CardTitle className="font-semibold text-foreground/80 text-lg transition-all duration-300 group-hover:text-foreground">
                              {blog.title}
                           </CardTitle>
                           <CardDescription className="mt-2">
                              {blog.description.length > 100
                                 ? `${blog.description.substring(0, 100)}...`
                                 : blog.description}
                           </CardDescription>
                        </VStack>
                     </CardContent>
                  </Card>
               </MagicCard>
            ))}
         </div>
      </VStack>
   );
};

export default Blogs;
