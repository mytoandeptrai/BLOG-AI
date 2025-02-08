import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

import file from "./svg/file.svg";
import github from "./svg/github.svg";
import link from "./svg/link.svg";
import lock from "./svg/lock.svg";
import lineChart from "./svg/line-chart.svg";
import helpCircle from "./svg/help-circle.svg";
import arrowRight from "./svg/arrow-right.svg";
import noteBook from "./svg/note-book.svg";
import qr from "./svg/qr.svg";
import cat from "./svg/cat.svg";
import zap from "./svg/zap.svg";
import search from "./svg/search.svg";

const IconList = {
   github,
   file,
   arrowRight,
   link,
   lock,
   lineChart,
   helpCircle,
   qr,
   noteBook,
   zap,
   cat,
   search,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
   size?: string | number;
   absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as unknown as Record<keyof typeof IconList, Icon>;
