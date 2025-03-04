import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

export const ourFileRouter = {
   videoOrAudioUploader: f({ video: { maxFileSize: "32MB" } })
      .middleware(async ({ req }) => {
         const user = await currentUser();

         console.log({ user });

         if (!user) throw new UploadThingError("Unauthorized");

         return { userId: user.id };
      })
      .onUploadComplete(async ({ metadata, file }) => {
         // This code RUNS ON YOUR SERVER after upload
         console.log("Upload complete for userId:", metadata.userId);
         console.log("file url", file.url);
         // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
         return { uploadedBy: metadata.userId, fileUrl: file.ufsUrl };
      }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
