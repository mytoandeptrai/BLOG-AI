import { z } from "zod";

const schema = z.object({
   file: z
      .instanceof(File, { message: "Invalid file" })
      .refine(
         (file) => file.size <= 20 * 1024 * 1024,
         "File size must not exceed 20MB"
      )
      .refine((file) => {
         return (
            file.type.startsWith("audio/") || file.type.startsWith("video/")
         );
      }, "File must be an audio or a video file"),
});

export default schema;
