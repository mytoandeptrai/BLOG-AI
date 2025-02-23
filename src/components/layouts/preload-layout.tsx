"use client";
import { cn } from "@/lib/utils";
import { usePreLoadContext } from "@/providers/preload-provider";
import type { FCC } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const CHARACTERS = [
   { src: "/svg/j.svg", alt: "j", w: 20, h: 20, pr: 3 },
   { src: "/svg/a.svg", alt: "a", w: 20, h: 20, pr: 3 },
   { src: "/svg/c.svg", alt: "c", w: 20, h: 20, pr: 3 },
   { src: "/svg/o.svg", alt: "o", w: 20, h: 20, pr: 3 },
   { src: "/svg/b.svg", alt: "b", w: 20, h: 20, pr: 3 },
];

const PreloadLayout: FCC = (props) => {
   const { loaded, percent } = usePreLoadContext();

   return (
      <>
         <AnimatePresence>
            <motion.div
               key="container-motion"
               initial={{ display: "flex" }}
               animate={{ display: loaded ? "none" : "flex" }}
               transition={{ duration: 0.3, delay: 0.7 }}
               className="fixed inset-0 z-[999999] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex min-h-screen items-center justify-center !overflow-hidden"
            >
               <div className="bg-white absolute top-0 z-10 w-full">
                  <div
                     className={cn(
                        "bg-gradient-to-r from-violet-500 to-fuchsia-500 slide-left-right duration-300 h-1"
                     )}
                     style={{ width: `${percent}%` }}
                  />
               </div>
               <motion.div
                  key="content-motion"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: loaded ? 0 : 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="relative z-10 flex items-center gap-2"
               >
                  <motion.div
                     initial={{ x: 100 }}
                     animate={{ x: 0 }}
                     transition={{ duration: 0.3, delay: 0.3 }}
                  >
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                     >
                        <Image
                           src="vercel.svg"
                           alt="logo"
                           width={40.54}
                           height={46.94}
                        />
                     </motion.div>
                  </motion.div>
                  <motion.div className="flex items-end">
                     {CHARACTERS.map(({ src, alt, w, h, pr }, i) => (
                        <motion.div
                           initial={{ scale: 0 }}
                           animate={{ scale: 1, willChange: "scale" }}
                           transition={{
                              duration: 0.15,
                              delay: (i + 10) * 0.05,
                           }}
                           key={`${i}-${src}`}
                           className="text-white"
                           style={{ paddingRight: pr }}
                        >
                           <Image
                              src={src}
                              alt={alt}
                              width={w}
                              height={h}
                           />
                        </motion.div>
                     ))}
                  </motion.div>
               </motion.div>
               {/* {percent === 100 && (
                  <div className="absolute flex h-full w-full">
                     {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                           initial={{ scaleX: "100%" }}
                           animate={loaded ? { scaleX: 0 } : {}}
                           transition={{ duration: 0.5, delay: 0.5 }}
                           className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full flex-1 origin-right"
                           key={`${i}-sub-content`}
                        />
                     ))}
                  </div>
               )} */}
            </motion.div>
         </AnimatePresence>
         {props.children}
      </>
   );
};

export default PreloadLayout;
