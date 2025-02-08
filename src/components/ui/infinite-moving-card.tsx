"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
   items,
   direction = "left",
   speed = "fast",
   pauseOnHover = true,
   className,
}: {
   items: {
      href: string;
   }[];
   direction?: "left" | "right";
   speed?: "fast" | "normal" | "slow";
   pauseOnHover?: boolean;
   className?: string;
}) => {
   const containerRef = React.useRef<HTMLDivElement>(null);
   const scrollerRef = React.useRef<HTMLUListElement>(null);

   useEffect(() => {
      addAnimation();
   }, []);

   const [start, setStart] = useState(false);
   function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
         const scrollerContent = Array.from(scrollerRef.current.children);

         for (const item of scrollerContent) {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
               scrollerRef.current.appendChild(duplicatedItem);
            }
         }

         getDirection();
         getSpeed();
         setStart(true);
      }
   }
   const getDirection = () => {
      if (containerRef.current) {
         if (direction === "left") {
            containerRef.current.style.setProperty(
               "--animation-direction",
               "forwards"
            );
         } else {
            containerRef.current.style.setProperty(
               "--animation-direction",
               "reverse"
            );
         }
      }
   };
   const getSpeed = () => {
      if (containerRef.current) {
         if (speed === "fast") {
            containerRef.current.style.setProperty(
               "--animation-duration",
               "20s"
            );
         } else if (speed === "normal") {
            containerRef.current.style.setProperty(
               "--animation-duration",
               "40s"
            );
         } else {
            containerRef.current.style.setProperty(
               "--animation-duration",
               "80s"
            );
         }
      }
   };
   console.log(items);
   return (
      <div
         ref={containerRef}
         className={cn(
            "relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            className
         )}
      >
         <ul
            ref={scrollerRef}
            className={cn(
               "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4",
               start && "animate-scroll",
               pauseOnHover && "hover:[animation-play-state:paused]"
            )}
         >
            {items.map((item, idx) => (
               <Image
                  src={item.href}
                  alt={item.href}
                  width={80}
                  height={80}
                  quality={100}
                  className="relative w-28 rounded-2xl object-contain opacity-50"
                  key={item.href}
               />
            ))}
         </ul>
      </div>
   );
};
