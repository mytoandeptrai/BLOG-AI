import type { Metadata } from "next";
import "./globals.css";
import { poppinsFont } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { APP_URL, siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";
import { Footer, Navbar } from "@/components/shared";
import { ClerkProvider } from "@clerk/nextjs";
import { PreloadLayout } from "@/components/layouts";
import { PreloadProvider } from "@/providers";

export const metadata: Metadata = {
   title: siteConfig.name,
   description: siteConfig.description,
   metadataBase: new URL(APP_URL),
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body
               suppressHydrationWarning
               className={cn(
                  "min-h-screen overflow-x-hidden bg-background text-foreground antialiased",
                  poppinsFont.variable
               )}
            >
               <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-neutral-950" />
               <PreloadProvider>
                  <PreloadLayout>
                     <Navbar />
                     <main className="relative z-0 mx-auto mt-20 w-full">
                        {children}
                     </main>
                     <Footer />
                     <Toaster
                        richColors
                        position="top-right"
                     />
                  </PreloadLayout>
               </PreloadProvider>
            </body>
         </html>
      </ClerkProvider>
   );
}
