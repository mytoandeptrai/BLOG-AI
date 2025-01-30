import { useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DEFAULT_SCROLL_Y = 10;

export const useNavbar = () => {
   const { user } = useClerk();
   const pathname = usePathname();

   const [scroll, setScroll] = useState(false);

   const handleScroll = () => {
      const isScroll = window.scrollY > DEFAULT_SCROLL_Y;
      setScroll(isScroll);
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return {
      user,
      pathname,
      scroll,
   };
};
