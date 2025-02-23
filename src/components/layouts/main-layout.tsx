"use client";

import PreloadLayout from "./preload-layout";
import type { FCC } from "@/types";

const MainLayout: FCC = (props) => {
   return <PreloadLayout>{props.children}</PreloadLayout>;
};

export default MainLayout;
