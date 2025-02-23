"use client";

import type { FCC } from "@/types";
import { useEffect, useState, createContext, useContext } from "react";
import { flushSync } from "react-dom";

const sources: string[] = [
   "a.svg",
   "b.svg",
   "c.svg",
   "j.svg",
   "n.svg",
   "o.svg",
   "t.svg",
   "company-01.svg",
];

function onLoadAll(onProgress?: (val: number) => void) {
   const totalImages = sources.length;
   let loadedImages = 0;

   const promises = sources.map((source) => {
      return new Promise((resolve) => {
         const img = new window.Image();
         img.src = `/svg/${source}`;
         img.onload = () => {
            loadedImages++;
            onProgress?.((loadedImages / totalImages) * 100);
            resolve(true);
         };
      });
   });

   return Promise.allSettled(promises);
}

const PreloadContext = createContext({ loaded: false, percent: 0 });

export const PreloadProvider: FCC = (props) => {
   const [loaded, setLoaded] = useState(false);
   const [percent, setPercent] = useState(0);

   const handleSetPercent = (percent: number) => {
      flushSync(() => {
         setPercent(percent);
      });
   };

   useEffect(() => {
      (async () => {
         await onLoadAll(handleSetPercent);
         setTimeout(() => {
            setLoaded(true);
         }, 1000);
      })();
   }, []);

   return (
      <PreloadContext.Provider value={{ loaded, percent }}>
         {props.children}
      </PreloadContext.Provider>
   );
};

export const usePreLoadContext = () => {
   const context = useContext(PreloadContext);
   if (!context) {
      throw new Error("usePreLoad must be used within a PreLoadContext");
   }
   return context;
};
