import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import ContentEditor from "@/components/shared/content-editor";
import onDbConnection from "@/lib/db";
import type { IPost } from "@/types/post.type";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { cache } from "react";

const onGetBlog = async (id: string, userId: string): Promise<IPost[]> => {
   const sql = await onDbConnection();
   const blog = await sql`
      SELECT * FROM posts
      WHERE id = ${id} AND user_id = ${userId}
   `;

   return blog as IPost[];
};

type Props = {
   params: { id: string };
};

const getBlogData = cache(async (id: string) => {
   const user = await currentUser();
   if (!user) return { blog: null, user: null };

   const blog = await onGetBlog(id, user.id);
   return { blog, user };
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { id } = await params;
   const { blog } = await getBlogData(id);

   return {
      title: blog?.[0]?.title || "Blog Detail",
      description: blog?.[0]?.content?.slice(0, 155) || "Blog Detail",
      alternates: {
         canonical: `/blogs/${id}`,
      },
   };
}

const BlogDetailPage = async ({ params }: Props) => {
   const { id } = await params;
   const { blog, user } = await getBlogData(id);

   if (!user) {
      return redirect("/sign-in");
   }

   return (
      <MaxWidthContainer className="mb-40">
         <AnimationContainer delay={0.1}>
            <ContentEditor posts={blog} />
         </AnimationContainer>
      </MaxWidthContainer>
   );
};

export default BlogDetailPage;
