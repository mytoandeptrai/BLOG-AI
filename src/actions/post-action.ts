"use server";

import { generateBlogPostWithGemini } from "@/actions/ai-generate-action";
import onDbConnection from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function onSavePost(userId: string, title: string, content: string) {
   try {
      const sql = await onDbConnection();
      const [insertedPost] = await sql`
      INSERT INTO posts (user_id, title, content)
      VALUES (${userId}, ${title}, ${content})
      RETURNING id
      `;
      return insertedPost.id;
   } catch (error) {
      console.error("Error saving blog post", error);
      throw error;
   }
}

async function onGetUserBlogPosts(userId: string) {
   try {
      const sql = await onDbConnection();
      const posts = await sql`
       SELECT content FROM posts 
       WHERE user_id = ${userId} 
       ORDER BY created_at DESC 
       LIMIT 3
     `;
      return posts.map((post) => post.content).join("\n\n");
   } catch (error) {
      console.error("Error getting user blog posts", error);
      throw error;
   }
}

export async function onGenerateBlogPostAction(
   transcriptions: string,
   userId: string
) {
   const userPosts = await onGetUserBlogPosts(userId);

   const blogPost = await generateBlogPostWithGemini({
      transcriptions,
      userPosts,
   });

   if (!blogPost) {
      return {
         success: false,
         message: "Blog post generation failed, please try again...",
      };
   }

   const [title, ...contentParts] = blogPost?.split("\n\n") || [];
   const existedPostId = await onSavePost(userId, title, blogPost);

   revalidatePath(`/blogs/${existedPostId}`);
   redirect(`/blogs/${existedPostId}`);
}

export async function onUpdatePost(payload: {
   postId: number;
   content: string;
}) {
   const { postId, content } = payload;
   const user = await currentUser();
   if (!user) {
      redirect("/sign-in");
   }

   try {
      const sql = await onDbConnection();
      const [title, ...contentParts] = content?.split("\n\n") || [];
      let updatedTitle = title;
      if (title.includes("#")) {
         updatedTitle = title.split("#")[1].trim();
      }

      await sql`UPDATE posts SET content = ${content}, title = ${updatedTitle} where id = ${postId}`;
      revalidatePath(`/blogs/${postId}`);
      return {
         success: true,
      };
   } catch (error) {
      console.log(error);
      return {
         success: false,
      };
   }
}
