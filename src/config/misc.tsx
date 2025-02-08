import { Icons } from "@/assets/icons";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Command } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const COMPANIES_LIST: { href: string }[] = [
   {
      href: "/svg/company-01.svg",
   },
   {
      href: "/svg/company-02.svg",
   },
   {
      href: "/svg/company-03.svg",
   },
   {
      href: "/svg/company-04.svg",
   },
   {
      href: "/svg/company-05.svg",
   },
   {
      href: "/svg/company-06.svg",
   },
] as const;

export const FEATURES_LIST = [
   {
      Icon: (
         <Icons.link
            width={48}
            height={48}
            className="origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
         />
      ),
      name: "Blog posts",
      description: "Create blog posts that are easy to remember and share.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 !lg:col-span-1",
      background: (
         <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md border border-border border-r-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105">
            <CardHeader>
               <CardTitle>Create blog posts</CardTitle>
               <CardDescription>
                  Create blog posts that are easy to remember and share.
               </CardDescription>
            </CardHeader>
            <CardContent className="-mt-4">
               <Label>export your posts</Label>
               <Input
                  type="text"
                  placeholder="export your blog posts..."
                  className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
               />
            </CardContent>
         </Card>
      ),
   },
   {
      Icon: (
         <Icons.search
            width={48}
            height={48}
            className="origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
         />
      ),
      name: "Search your blogs",
      description:
         "Quickly generate the blog posts you need with AI-powered search.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
         <Command className="group-hover:-translate-x-10 absolute top-10 right-10 w-[70%] origin-to translate-x-0 border border-border p-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
            <Input placeholder="Type to search..." />
            <div className="mt-1 cursor-pointer">
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Writora.xyz/hdf00c
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Writora.xyz/sdv0n0
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Writora.xyz/03gndo
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Writora.xyz/09vmmw
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Writora.xyz/s09vws
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Writora.xyz/sd8fv5
               </div>
            </div>
         </Command>
      ),
   },
] as const;
