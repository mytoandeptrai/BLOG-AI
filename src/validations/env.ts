import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
   server: {
      APP_URL: z.string().url().min(1),
      CLERK_SECRET_KEY: z.string().min(1),
   },

   client: {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
   },

   runtimeEnv: {
      APP_URL: process.env.APP_URL,
      CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
         process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
   },
});
