"use client";

import { onTranscribeFileWithGemini } from "@/actions/ai-generate-action";
import { onGenerateBlogPostAction } from "@/actions/post-action";
import schema from "@/app/(home)/dashboard/_components/upload-form/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MagicBadge from "@/components/ui/magic-badge";
import { useUser } from "@clerk/nextjs";
import { useTransition } from "react";
import { toast } from "sonner";

type Props = {
   planTypeName: string;
};

const UploadForm = ({ planTypeName }: Props) => {
   const [isPending, startTransition] = useTransition();
   const { user } = useUser();

   const onAction = async (formData: FormData) => {
      const file = formData.get("file") as File;
      const validatedFields = schema.safeParse({ file });

      if (!validatedFields.success) {
         console.log(
            "validatedFields",
            validatedFields.error.flatten().fieldErrors
         );
         toast.error("Something went wrong", {
            description:
               validatedFields.error.flatten().fieldErrors.file?.[0] ??
               "Invalid file",
         });
      }

      const MAX_FILE_SIZE = 10 * 1024 * 1024;
      if (file.size > MAX_FILE_SIZE) {
         toast.error("File size exceeds the max limit of 10MB", {
            description: "Please try again with a smaller file",
         });
         return;
      }

      if (!file) return;

      toast.message("Generating AI blog post...", {
         description: "Please wait while we generate your blog post. ✨",
      });

      startTransition(async () => {
         try {
            const { data } = await onTranscribeFileWithGemini(file);
            if (!data) return;

            await onGenerateBlogPostAction(data.transcription, user?.id || "");

            toast.message("🎉 Woohoo! Your AI blog is created! 🎊", {
               description:
                  "Time to put on your editor hat, Click the post and edit it!",
            });
         } catch (error) {
            console.error("Error occurred", error);
         }
      });
   };

   return (
      <>
         <MagicBadge title={`${planTypeName} Plan Is Active`} />
         <h1 className="!leading-tight mt-6 text-center font-heading font-semibold text-2xl md:text-4xl lg:text-5xl">
            Start Creating Amazing Content
         </h1>
         <p className="mt-6 pb-5 text-center text-base text-muted-foreground md:text-lg">
            Upload your audio or video file and let our AI do the magic!
         </p>
         <form
            className="flex flex-col gap-6 pt-5"
            action={onAction}
         >
            <div className="flex items-center justify-end gap-1.5">
               <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="audio/*,video/*"
                  required
                  className="cursor-pointer"
               />
               <Button disabled={isPending || !user?.id}>Transcribe</Button>
            </div>
         </form>
      </>
   );
};

export default UploadForm;
