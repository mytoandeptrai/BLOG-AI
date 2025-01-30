"use client";
import { useInView, motion } from "framer-motion";
import React, { forwardRef } from "react";

type PolymorphicComponentRef<C extends React.ElementType> =
   React.ComponentPropsWithRef<C>["ref"];

type AsProps<C extends React.ElementType> = {
   as?: C;
};

type PolymorphicComponentProps<
   C extends React.ElementType,
   P
> = React.PropsWithChildren<AsProps<C> & P> &
   Omit<React.ComponentPropsWithoutRef<C>, keyof (AsProps<C> & P)>;

type PolymorphicComponentPropsWithRef<
   C extends React.ElementType,
   P
> = PolymorphicComponentProps<C, P> & {
   ref?: PolymorphicComponentRef<C>;
};

type TextTypingProps<C extends React.ElementType> = {
   text?: string;
   subText?: string;
   className?: React.ComponentPropsWithRef<C>["className"];
};

type Props = <C extends React.ElementType>(
   props: PolymorphicComponentPropsWithRef<C, TextTypingProps<C>>
) => React.ReactNode | null;

const TextTyping: Props = forwardRef(
   <C extends React.ElementType>(
      {
         text,
         subText,
         as,
         className,
         ...rest
      }: PolymorphicComponentPropsWithRef<C, TextTypingProps<C>>,
      ref?: PolymorphicComponentRef<C>
   ) => {
      const currentRef = React.useRef(null);
      const isInView = useInView(currentRef, { once: true });
      const Component = as || "p";

      if (!text) return null;

      return (
         <Component
            ref={currentRef}
            className="!leading-[1.15] w-full text-balance py-6 text-center font-heading font-medium text-5xl text-foreground tracking-normal sm:text-6xl md:text-7xl lg:text-8xl"
            {...rest}
         >
            {text.split("").map((char, index) => (
               <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  key={`text-${index}`}
                  className={className}
               >
                  {char}
               </motion.span>
            ))}
         </Component>
      );
   }
);

export default TextTyping;
