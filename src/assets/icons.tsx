import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

import file from "./svg/file.svg";
import github from "./svg/github.svg";

const IconList = {
   github,
   file,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
   size?: string | number;
   absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as unknown as Record<keyof typeof IconList, Icon>;
