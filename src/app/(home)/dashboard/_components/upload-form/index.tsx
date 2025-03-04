"use client";

import { onTranscribeFile } from "@/actions/upload-action";
import schema from "@/app/(home)/dashboard/_components/upload-form/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MagicBadge from "@/components/ui/magic-badge";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";

type Props = {
   planTypeName: string;
};

const UploadForm = ({ planTypeName }: Props) => {
   const { startUpload, isUploading, routeConfig } = useUploadThing(
      "videoOrAudioUploader",
      {
         onClientUploadComplete: () => {
            toast("uploaded successfully!");
         },
         onUploadError: (err) => {
            console.error("Error occurred", err);
         },
         onUploadBegin: () => {
            toast("Upload has begun 🚀!");
         },
      }
   );

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

      if (!file) return;

      const resp = (await startUpload([file])) as unknown as {
         serverData: { userId: string; fileUrl: string };
      }[];
      const result = await onTranscribeFile(resp);
      const { data = null, message = null } = result || {};

      if (!resp) {
         toast.error("Something went wrong", {
            description: "Please use a different file",
         });
      }
      toast.info("Transcription is in progress...", {
         description:
            "Hang tight! Our digital wizards are sprinkling magic dust on your file! ✨",
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
               <Button disabled={isUploading}>Transcribe</Button>
            </div>
         </form>
      </>
   );
};

export default UploadForm;
