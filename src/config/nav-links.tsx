import { Icons } from "@/assets/icons";

export const NAV_LINKS = [
   {
      title: "Features",
      href: "/features",
      menu: [
         {
            title: "SEO Strategy",
            tagline: "Optimize for SEO and monitor their performance.",
            href: "/features/seo-strategy",
            icon: (
               <Icons.link
                  width={16}
                  height={16}
               />
            ),
         },
         {
            title: "Password Protection",
            tagline: "Protect your blogs with password security.",
            href: "/features/password-protection",
            icon: (
               <Icons.lock
                  width={16}
                  height={16}
               />
            ),
         },
         {
            title: "Advanced Analytics",
            tagline: "Discover who is engaging with your posts.",
            href: "/features/analytics",
            icon: (
               <Icons.lineChart
                  width={16}
                  height={16}
               />
            ),
         },
         {
            title: "Custom QR Codes",
            tagline: "Leverage QR codes to connect with your audience.",
            href: "/features/qr-codes",
            icon: (
               <Icons.qr
                  width={16}
                  height={16}
               />
            ),
         },
      ],
   },
   {
      title: "Pricing",
      href: "/pricing",
   },
   {
      title: "Enterprise",
      href: "/enterprise",
   },
   {
      title: "Resources",
      href: "/resources",
      menu: [
         {
            title: "Blog",
            tagline: "Stay updated with articles about the latest tech trends.",
            href: "/resources/blog",
            icon: (
               <Icons.noteBook
                  width={16}
                  height={16}
               />
            ),
         },
         {
            title: "Help",
            tagline: "Find solutions to your queries.",
            href: "/resources/help",
            icon: (
               <Icons.helpCircle
                  width={16}
                  height={16}
               />
            ),
         },
      ],
   },
   {
      title: "Changelog",
      href: "/changelog",
   },
];
