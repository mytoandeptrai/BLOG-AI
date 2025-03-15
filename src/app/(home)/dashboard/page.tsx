import { UploadForm } from "@/app/(home)/dashboard/_components";
import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import { VStack } from "@/components/ui/v-stack";
import onDbConnection from "@/lib/db";
import { onCreateUser } from "@/lib/user-db";
import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
   title: "Dashboard",
   description:
      "Manage your audio transcription process here. Upload audio files to transcribe them into text, making your content more SEO-friendly and accessible.",
};

const DashboardPage = async () => {
   const clerkUser = await currentUser();
   if (!clerkUser) return redirect("/sign-in");

   const email = clerkUser?.emailAddresses?.[0]?.emailAddress ?? "";
   const userId = clerkUser?.id;

   const sql = await onDbConnection();
   await onCreateUser(sql, userId, email);

   const posts = await sql`SELECT * FROM posts WHERE user_id = ${userId}`;

   return (
      <MaxWidthContainer className="mb-10">
         <AnimationContainer delay={0.1}>
            <VStack
               spacing={"none"}
               align={"center"}
               justify={"center"}
               className="mx-auto max-w-4xl py-10"
            >
               <UploadForm planTypeName="Basic" />
            </VStack>
         </AnimationContainer>
      </MaxWidthContainer>
   );
};

export default DashboardPage;
