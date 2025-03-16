export const PLAN_MONTHLY_LIST = [
   {
      id: "basic",
      name: "Basic",
      info: "Ideal for individual users",
      price: {
         monthly: 7,
         yearly: Math.round(7 * 12 * (1 - 0.12)),
      },
      features: [
         { text: "Up to 3 blog posts", limit: "100 tags" },
         { text: "Up to 3 transcriptions" },
         { text: "Up to 3 posts stored" },
         {
            text: "Markdown support",
            tooltip: "Export your content as Markdown files",
         },
         {
            text: "Community assistance",
            tooltip: "Get support from the community on Discord",
         },
         {
            text: "AI-driven recommendations",
            tooltip: "Receive up to 100 AI-generated suggestions",
         },
      ],
      btn: {
         text: "Start Your Free Trial",
         href: "/",
         variant: "default",
      },
      priceId: process.env.STRIPE_PRICE_ID_BASIC_PLAN,
   },
   {
      id: "pro",
      name: "Pro",
      info: "Best for small businesses",
      price: {
         monthly: 17.99,
         yearly: Math.round(17.99 * 12 * (1 - 0.12)),
      },
      features: [
         { text: "Up to 500 blog posts", limit: "500 tags" },
         { text: "Up to 500 transcriptions" },
         { text: "Up to 500 posts stored" },
         {
            text: "Unlimited Markdown support",
            tooltip: "Export your content as Markdown files",
         },
         { text: "SEO optimization tools" },
         { text: "Priority support", tooltip: "Access 24/7 chat support" },
         {
            text: "AI-driven recommendations",
            tooltip: "Receive up to 500 AI-powered suggestions",
         },
      ],
      btn: {
         text: "Get started",
         href: "https://buy.stripe.com/test_cN26qF9dg9yI9YQ3ci",
         variant: "purple",
      },
      priceId: process.env.STRIPE_PRICE_ID_PRO_PLAN,
   },
   {
      name: "Business",
      info: "Tailored for large organizations",
      price: {
         monthly: 69.99,
         yearly: Math.round(49.99 * 12 * (1 - 0.12)),
      },
      features: [
         { text: "Unlimited blog posts", tooltip: undefined },
         { text: "Unlimited transcriptions", tooltip: undefined },
         { text: "Unlimited posts stored", tooltip: undefined },
         { text: "Unlimited Markdown support", tooltip: undefined },
         {
            text: "SEO optimization tools",
            tooltip: "Advanced SEO optimization tools included",
         },
         { text: "Priority support", tooltip: "24/7 chat support available" },
         {
            text: "AI-driven recommendations",
            tooltip: "Receive up to 500 AI-powered suggestions",
         },
      ],
      btn: {
         text: "Contact my team",
         href: "mytoandn@gmail.com",
         variant: "default",
      },
   },
];

export const PRICING_FEATURES = [
   {
      text: "Shorten links",
      tooltip: "Generate shortened versions of your links",
   },
   {
      text: "Track clicks",
      tooltip: "Monitor the number of clicks on your links",
   },
   {
      text: "See top countries",
      tooltip: "View the countries with the most clicks on your links",
   },
   {
      text: "Upto 10 tags",
      tooltip: "Assign up to 10 tags to your links",
   },
   {
      text: "Community support",
      tooltip: "Free users can access support from the community",
   },
   {
      text: "Priority support",
      tooltip: "Receive priority assistance from our team",
   },
   {
      text: "AI powered suggestions",
      tooltip: "Receive smart suggestions powered by AI for your links",
   },
] as const;
