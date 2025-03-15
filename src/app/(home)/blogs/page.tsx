import { redirect } from "next/navigation";

import { currentUser } from "@clerk/nextjs/server";
import onDbConnection from "@/lib/db";
import { MaxWidthContainer } from "@/components/global";
import { BlogHeader, BlogContent } from "./_components";
import type { IPost } from "@/types/post.type";

const onGetBlogs = async (userId: string): Promise<IPost[]> => {
   const sql = await onDbConnection();
   const blogs = await sql`
      SELECT * FROM posts
      WHERE user_id = ${userId}
   `;
   return blogs as IPost[];
};

const BlogsPage = async () => {
   const user = await currentUser();
   if (!user) {
      redirect("/sign-in");
   }

   const blogs = await onGetBlogs(user.id);

   return (
      <MaxWidthContainer className="mb-10">
         <BlogHeader blogs={blogs} />
         <BlogContent blogs={blogs} />
      </MaxWidthContainer>
   );
};

export default BlogsPage;
