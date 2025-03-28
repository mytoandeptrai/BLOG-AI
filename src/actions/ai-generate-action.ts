"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function onTranscribeFileWithGemini(file: File) {
   if (!file) {
      return {
         success: false,
         message: "No file provided",
         data: null,
      };
   }

   try {
      // Convert File to base64
      const buffer = await file.arrayBuffer();
      const base64Data = Buffer.from(buffer).toString("base64");

      const model = genAI.getGenerativeModel({
         model: "gemini-2.0-flash",
      });

      // Generate content using the audio file
      const result = await model.generateContent([
         {
            inlineData: {
               mimeType: file.type,
               data: base64Data,
            },
         },
         { text: "Generate a transcript of the speech." },
      ]);

      const transcription = result.response.text();

      return {
         success: true,
         message: "File transcribed successfully!",
         data: { transcription },
      };
   } catch (error) {
      console.error("Transcription error:", error);
      return {
         success: false,
         message:
            error instanceof Error ? error.message : "Error processing file",
         data: null,
      };
   }
}

export async function generateBlogPostWithGemini({
   transcriptions,
   userPosts,
}: {
   transcriptions: string;
   userPosts: string;
}) {
   try {
      const model = genAI.getGenerativeModel({
         model: "gemini-1.5-flash", // Using gemini-pro as it's better for text generation
      });

      // Create the prompt
      const prompt = `You are a skilled content writer that converts audio transcriptions into well-structured, engaging blog posts in Markdown format. Create a comprehensive blog post with a catchy title, introduction, main body with multiple sections, and a conclusion. Analyze the user's writing style from their previous posts and emulate their tone and style in the new post. Keep the tone casual and professional.

      Here are some previous blog posts for reference:

      ${userPosts}

      Please convert the following transcription into a well-structured blog post using Markdown formatting. Follow this structure:

      1. Start with a SEO friendly catchy title on the first line.
      2. Add two newlines after the title.
      3. Write an engaging introduction paragraph.
      4. Create multiple sections for the main content, using appropriate headings (##, ###).
      5. Include relevant subheadings within sections if needed.
      6. Use bullet points or numbered lists where appropriate.
      7. Add a conclusion paragraph at the end.
      8. Ensure the content is informative, well-organized, and easy to read.
      9. Emulate my writing style, tone, and any recurring patterns you notice from my previous posts.

      Here's the transcription to convert: ${transcriptions}`;

      // Generate content
      const result = await model.generateContent(prompt);
      const blogPost = result.response.text();

      return blogPost;
   } catch (error) {
      console.error("Blog post generation error:", error);
      throw error;
   }
}
