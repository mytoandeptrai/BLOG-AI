import { Icons } from "@/assets/icons";
import { Calendar } from "@/components/ui/calendar";
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
   {
      Icon: (
         <Icons.calendar
            width={48}
            height={48}
            className="origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
         />
      ),
      name: "Connect your apps",
      description: "Integrate with your favorite apps and services.",
      href: "#",
      cta: "Learn more",
      background: (
         <div className="absolute top-4 right-2 h-[300px] w-[600px] border-none pl-28 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 md:pl-0" />
      ),
   },
   {
      Icon: (
         <Icons.calendar
            width={48}
            height={48}
            className="origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
         />
      ),
      name: "Calendar picker",
      description: "Keep track of your blog posts with our calendar view.",
      href: "#",
      cta: "Learn more",
      background: (
         <Calendar
            mode="single"
            selected={new Date(2022, 4, 11, 0, 0, 0)}
            className="absolute top-10 right-0 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
         />
      ),
   },
] as const;

export const PROCESS_LIST = [
   {
      title: "Upload Your Video",
      description:
         "Easily categorize the scripts and optimize the media to create high-quality blog posts.",
      Icon: (
         <Icons.upload
            width={36}
            height={36}
            className="origin-left text-foreground transition-all duration-300 ease-in-out group-hover:scale-75"
         />
      ),
      id: 1,
   },
   {
      title: "AI Magic",
      description:
         "Create SEO-optimized blog posts that are easy to customize and share.",
      Icon: (
         <Icons.pencil
            width={36}
            height={36}
            className="origin-left text-foreground transition-all duration-300 ease-in-out group-hover:scale-75"
         />
      ),
      id: 2,
   },
   {
      title: "Optimize and Export",
      description:
         "Content is provided in Markdown format and can be easily exported.",
      Icon: (
         <Icons.scrollText
            width={36}
            height={36}
            className="origin-left text-foreground transition-all duration-300 ease-in-out group-hover:scale-75"
         />
      ),
      id: 3,
   },
] as const;

export const REVIEW_LIST = [
   {
      name: "Michael Smith",
      username: "@michaelsmith",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      review:
         "This app is fantastic! It offers everything I need to manage my blog contents efficiently.",
   },
   {
      name: "Emily Johnson",
      username: "@emilyjohnson",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 4,
      review:
         "This platform saved us time and improved our content quality. The AI suggestions are incredibly helpful!”",
   },
   {
      name: "Daniel Williams",
      username: "@danielwilliams",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      review:
         "I've been using this app daily for months. The insights and analytics it provides are invaluable. Highly recommend it!",
   },
   {
      name: "Sophia Brown",
      username: "@sophiabrown",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      review:
         "Great app with a lot of potential. It has already saved me a lot of time. Looking forward to future updates and improvements.",
   },
   {
      name: "James Taylor",
      username: "@jamestaylor",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      review:
         "Absolutely love this app! It's intuitive and feature-rich. Has significantly improved how I manage and create content.",
   },
   {
      name: "Olivia Martinez",
      username: "@oliviamartinez",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
      review:
         "This app is a game-changer for generate posts. It's easy to use, extremely powerful and highly recommended!",
   },
   {
      name: "William Garcia",
      username: "@williamgarcia",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      review:
         "Effortless blogging with amazing SEO tools. This platform made our content strategy more effective.",
   },
   {
      name: "Mia Rodriguez",
      username: "@miarodriguez",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 4,
      review:
         "I've tried several content generator tools, but this one stands out. It's simple, effective.",
   },
   {
      name: "Henry Lee",
      username: "@henrylee",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 5,
      review:
         "This app has transformed my workflow. Managing and analyzing links is now a breeze. I can't imagine working without it.",
   },
] as const;
