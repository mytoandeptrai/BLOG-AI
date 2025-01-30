import { Icons } from "@/assets/icons";

export const NAV_LINKS = [
   {
      title: "Features",
      href: "/features",
      menu: [
         {
            title: "SEO Strategy",
            tagline: "SEO optimization and track their performance.",
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
            tagline: "Secure your blogs with a password.",
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
            tagline: "Gain insights into who is clicking your posts.",
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
            tagline: "Use QR codes to reach your audience.",
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
            tagline: "Read articles on the latest trends in tech.",
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
            tagline: "Get answers to your questions.",
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
