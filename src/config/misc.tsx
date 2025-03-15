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
      description: "Craft blog posts that are simple to recall and share.",
      href: "#",
      cta: "Learn more",
      background: (
         <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md border border-border border-r-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105">
            <CardHeader>
               <CardTitle>Create blog posts</CardTitle>
               <CardDescription>
                  Craft blog posts that are simple to recall and share.
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
         "Rapidly produce the blog posts you require using AI-driven search.",
      href: "#",
      cta: "Learn more",
      background: (
         <Command className="group-hover:-translate-x-10 absolute top-10 right-10 w-[70%] origin-to translate-x-0 border border-border p-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
            <Input placeholder="Type to search..." />
            <div className="mt-1 cursor-pointer">
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Michael handsome boy/hdf00c
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Michael handsome boy/sdv0n0
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Michael handsome boy/03gndo
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Michael handsome boy/09vmmw
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Michael handsome boy/s09vws
               </div>
               <div className="rounded-md px-4 py-2 hover:bg-muted">
                  Michael handsome boy/sd8fv5
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
      description: "Connect seamlessly with the apps and services you love.",
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
      description: "Monitor your blog posts using our intuitive calendar view.",
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
         "Effortlessly organize your scripts and enhance the media to produce top-notch blog posts.",
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
         "Generate SEO-friendly blog posts that are simple to tailor and share.",
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
         "The content is available in Markdown format, making it easy to export.",
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
      name: "Michael Tran",
      username: "@michaelTran",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      review:
         "This app is amazing! It provides all the tools I need to organize and manage my blog content smoothly.",
   },
   {
      name: "Emily Tran",
      username: "@emilyTran",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 4,
      review:
         "This platform has been a real time-saver and has boosted the quality of our content. The AI recommendations are extremely useful!",
   },
   {
      name: "Daniel Tran",
      username: "@danielTran",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      review:
         "I've been using this app every day for months. The insights and analytics it offers are priceless. I highly recommend it!",
   },
   {
      name: "Sophia Tran",
      username: "@sophiaTran",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      review:
         "Fantastic app with so much potential. It's already saved me a great deal of time. I’m excited for future updates and enhancements",
   },
   {
      name: "James Tran",
      username: "@jamesTran",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      review:
         "I absolutely adore this app! It's easy to use and packed with features. It has greatly enhanced how I manage and produce content.",
   },
   {
      name: "Olivia Tran",
      username: "@oliviaTran",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
      review:
         "This app is a total game-changer for post generation. It’s simple to use, very powerful, and I highly recommend it!",
   },
   {
      name: "William Tran",
      username: "@williamTran",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      review:
         "Blogging has never been easier thanks to the amazing SEO tools. This platform has made our content strategy much more effective.",
   },
   {
      name: "Mia Tran",
      username: "@miaTran",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 4,
      review:
         "I've tested multiple content generation tools, but this one really stands out. It’s straightforward and efficient.",
   },
   {
      name: "Henry Tran",
      username: "@henryTran",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 5,
      review:
         "This app has revolutionized my workflow. Managing and analyzing links has become effortless. I can’t imagine working without it.",
   },
] as const;
