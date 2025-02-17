import type { Config } from "tailwindcss";

export default {
   darkMode: ["class"],
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/config/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            tertiary: {
               DEFAULT: "hsl(var(--tertiary))",
               foreground: "hsl(var(--tertiary-foreground))",
            },
            subtle: {
               DEFAULT: "hsl(var(--subtle))",
               foreground: "hsl(var(--subtle-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         fontFamily: {
            heading: ["var(--font-poppins)"],
            default: ["var(--font-poppins)"],
         },
         keyframes: {
            scroll: {
               to: {
                  transform: "translate(calc(-50% - 0.5rem))",
               },
            },
            "accordion-down": {
               from: {
                  height: "0",
               },
               to: {
                  height: "var(--radix-accordion-content-height)",
               },
            },
            "accordion-up": {
               from: {
                  height: "var(--radix-accordion-content-height)",
               },
               to: {
                  height: "0",
               },
            },
            grid: {
               "0%": {
                  transform: "translateY(-50%)",
               },
               "100%": {
                  transform: "translateY(0)",
               },
            },
            wiggle: {
               "0%, 100%": {
                  transform: "translateX(0%)",
                  transformOrigin: "50% 50%",
               },
               "15%": {
                  transform: "translateX(-4px) rotate(-4deg)",
               },
               "30%": {
                  transform: "translateX(6px) rotate(4deg)",
               },
               "45%": {
                  transform: "translateX(-6px) rotate(-2.4deg)",
               },
               "60%": {
                  transform: "translateX(2px) rotate(1.6deg)",
               },
               "75%": {
                  transform: "translateX(-1px) rotate(-0.8deg)",
               },
            },
            spinner: {
               "0%": {
                  opacity: "1",
               },
               "100%": {
                  opacity: "0",
               },
            },
            blink: {
               "0%": {
                  opacity: "0.2",
               },
               "20%": {
                  opacity: "1",
               },
               "100%": {
                  opacity: "0.2",
               },
            },
            shimmer: {
               "0%, 90%, 100%": {
                  "background-position": "calc(-100% - var(--shimmer-width)) 0",
               },
               "30%, 60%": {
                  "background-position": "calc(100% + var(--shimmer-width)) 0",
               },
            },
            "image-glow": {
               "0%": {
                  opacity: "0",
                  "animation-timing-function": "cubic-bezier(.74, .25, .76, 1)",
               },
               "10%": {
                  opacity: "0.5",
                  "animation-timing-function":
                     "cubic-bezier(.12, .01, .08, .99)",
               },
               "100%": {
                  opacity: "0.7",
               },
            },
            "border-beam": {
               "100%": {
                  "offset-distance": "100%",
               },
            },
            marquee: {
               from: {
                  transform: "translateX(0)",
               },
               to: {
                  transform: "translateX(calc(-100% - var(--gap)))",
               },
            },
            flip: {
               to: {
                  transform: "rotate(360deg)",
               },
            },
            rotate: {
               to: {
                  transform: "rotate(90deg)",
               },
            },
            "caret-blink": {
               "0%,70%,100%": {
                  opacity: "1",
               },
               "20%,50%": {
                  opacity: "0",
               },
            },
            loading: {
               "0%": {
                  transform: "rotate(0deg)",
               },
               "100%": {
                  transform: "rotate(360deg)",
               },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            grid: "grid 15s linear infinite",
            wiggle: "wiggle 0.75s infinite",
            spinner: "spinner 1.2s linear infinite",
            blink: "blink 1.4s infinite both",
            shimmer: "shimmer 5s infinite",
            "border-beam":
               "border-beam calc(var(--duration)*1s) infinite linear",
            "image-glow": "image-glow 4s ease-out 0.6s forwards",
            marquee: "marquee var(--duration) linear infinite",
            flip: "flip 6s infinite steps(2, end)",
            rotate: "rotate 3s linear infinite both",
            "caret-blink": "caret-blink 1.25s ease-out infinite",
            loading: "loading 0.5s linear infinite",
            scroll:
               "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
         },
      },
   },
   plugins: [
      require("tailwindcss-animate"),
      require("tailwind-scrollbar-hide"),
   ],
} satisfies Config;
