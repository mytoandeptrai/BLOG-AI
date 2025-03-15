"use client";

import {
   initialState,
   type UploadState,
} from "@/components/shared/content-editor/hooks";
import type { IPost } from "@/types/post.type";
import { onUpdatePost } from "@/actions/post-action";
import { useActionState, useState } from "react";
import { toast } from "sonner";

export const useContentEditor = (blogs: IPost[]) => {
   const [content, setContent] = useState<string>(blogs[0].content);

   const [_, formAction] = useActionState<UploadState, FormData>(
      async (state) => {
         const payload = {
            postId: blogs[0]?.id,
            content,
         };
         const response = await onUpdatePost(payload);
         const { success } = response;

         if (success) {
            toast.message("🎉 Wow! Your blog is updated! 🎊", {
               description:
                  "You can now share it with your friends and family.",
            });
         } else {
            toast.error("An unexpected error occurred", {
               description:
                  "An error occurred during editing. Please try again.",
            });
         }

         return response;
      },
      initialState
   );

   const handleContentChange = (content: string) => {
      setContent(content);
   };

   const handleExport = () => {
      const filename = `${blogs[0].title || "blog-post"}.md`;

      const blob = new Blob([content], {
         type: "text/markdown;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
   };

   return { content, handleContentChange, handleExport, formAction };
};
