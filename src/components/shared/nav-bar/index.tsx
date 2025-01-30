"use client";
import { cn } from "@/lib/utils";
import { useNavbar } from "./hooks";
import type { FCC } from "@/types";
import { AnimationContainer, MaxWidthContainer } from "@/components/global";
import { HStack } from "@/components/ui/h-stack";
import Link from "next/link";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS } from "@/config/nav-links";
import { NavbarItem } from "./nav-bar-item";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/assets/icons";

const Navbar: FCC = () => {
   const { pathname, scroll, user } = useNavbar();

   return (
      <header
         className={cn(
            "sticky inset-x-0 top-0 z-[999] h-14 w-full select-none border-transparent border-b",
            {
               "border-background/80 bg-background/40 backdrop-blur-md shadow-md":
                  scroll,
            }
         )}
      >
         <AnimationContainer
            reverse
            delay={0.1}
            className="size-full"
         >
            <MaxWidthContainer className="flex items-center justify-between">
               <HStack
                  noWrap
                  align="center"
                  className="space-x-12"
               >
                  <Link href="/">
                     <span className="!leading-none font-bold font-heading text-lg">
                        Blog AI
                     </span>
                  </Link>

                  <NavigationMenu className="hidden lg:flex">
                     <NavigationMenuList>
                        {NAV_LINKS.map((link) => (
                           <NavigationMenuItem key={link.title}>
                              {link.menu ? (
                                 <>
                                    <NavigationMenuTrigger>
                                       {link.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                       <ul
                                          className={cn(
                                             "grid gap-1 lg:grid-cols-2 rounded-xl p-4 md:w-[400px] lg:w-[500px]",
                                             {
                                                "lg:grid-cols-[.75fr_1fr]":
                                                   link.title === "Features",
                                             }
                                          )}
                                       >
                                          {link.title === "Features" && (
                                             <li className="relative row-span-4 overflow-hidden rounded-lg pr-2">
                                                <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
                                                <NavigationMenuLink
                                                   asChild
                                                   className="relative z-20"
                                                >
                                                   <Link
                                                      href="/"
                                                      className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                                                   >
                                                      <h6 className="mt-4 mb-2 font-medium text-lg">
                                                         All Features
                                                      </h6>
                                                      <p className="text-muted-foreground text-sm leading-tight">
                                                         Manage Blogs, track
                                                         performance, and more.
                                                      </p>
                                                   </Link>
                                                </NavigationMenuLink>
                                             </li>
                                          )}
                                          {link.menu.map((menuItem) => (
                                             <NavbarItem
                                                key={menuItem.title}
                                                title={menuItem.title}
                                                href={menuItem.href}
                                                icon={menuItem.icon}
                                             >
                                                {menuItem.tagline}
                                             </NavbarItem>
                                          ))}
                                       </ul>
                                    </NavigationMenuContent>
                                 </>
                              ) : (
                                 <Link
                                    href={link.href}
                                    legacyBehavior
                                    passHref
                                 >
                                    <NavigationMenuLink
                                       className={navigationMenuTriggerStyle()}
                                    >
                                       {link.title}
                                    </NavigationMenuLink>
                                 </Link>
                              )}
                           </NavigationMenuItem>
                        ))}
                     </NavigationMenuList>
                  </NavigationMenu>
               </HStack>

               <HStack
                  className="hidden lg:flex"
                  align={"center"}
               >
                  {user ? (
                     <SignedIn>
                        <div className="flex items-center gap-3">
                           <Link
                              href={
                                 pathname === "/dashboard"
                                    ? "/posts"
                                    : "/dashboard"
                              }
                              className={`${buttonVariants({
                                 size: "sm",
                              })} font-semibold`}
                           >
                              {pathname === "/dashboard"
                                 ? "Your Posts"
                                 : "Upload a video"}
                           </Link>
                           <UserButton />
                        </div>
                     </SignedIn>
                  ) : (
                     <div className="flex items-center gap-x-4">
                        <SignedOut>
                           <SignInButton>
                              <Link
                                 href="/sign-in"
                                 className={buttonVariants({ size: "sm" })}
                              >
                                 Get Started
                                 <Icons.zap
                                    width={14}
                                    height={14}
                                    className="ml-1.5 !fill-red-500 !text-red-500"
                                 />
                              </Link>
                           </SignInButton>
                        </SignedOut>
                     </div>
                  )}
               </HStack>
            </MaxWidthContainer>
         </AnimationContainer>
      </header>
   );
};

export default Navbar;
