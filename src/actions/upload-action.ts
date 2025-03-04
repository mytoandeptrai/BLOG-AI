"use server";
import OpenAI from "openai";

const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

export async function onTranscribeFile(
   resp: {
      serverData: { userId: string; fileUrl: string };
   }[]
) {
   if (!resp) {
      return {
         success: false,
         message: "File upload failed",
         data: null,
      };
   }

   const {
      serverData: { userId, fileUrl },
   } = resp[0];

   if (!fileUrl) {
      return {
         success: false,
         message: "File upload failed",
         data: null,
      };
   }

   try {
      const response = await fetch(fileUrl);

      const transcriptions = await openai.audio.transcriptions.create({
         model: "whisper-1",
         file: response,
      });

      return {
         success: true,
         message: "File uploaded successfully!",
         data: { transcriptions, userId },
      };
   } catch (error) {
      if (error instanceof OpenAI.APIError && error.status === 413) {
         return {
            success: false,
            message: "File size exceeds the max limit of 20MB",
            data: null,
         };
      }

      return {
         success: false,
         message:
            error instanceof Error ? error.message : "Error processing file",
         data: null,
      };
   }
}
