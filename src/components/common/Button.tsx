import { AsChildProps } from "@/types/AsChildProps.type";
import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, CSSProperties, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex disabled:cursor-not-allowed disabled:opacity-50 items-center gap-1 md:gap-2 outline-dashed outline-2 outline-offset-4 outline-transparent focus:outline-current transition-transform active:scale-[99%]",
  {
    variants: {
      variant: {
        primary: "bg-element-3 shadow-md font-light",
        ghost: "hover:bg-element-2 active:bg-element-1 disabled:bg-element-3",
      },
      size: {
        sm: "px-1 py-0.5 md:px-2 md:py-1",
        md: "px-2 py-1 md:px-4, md:py-2",
        lg: "px-4 py-2",
      },
      shape: {
        rectangle: "rounded-md",
        circle: "p-2 rounded-full aspect-square w-8 h-8",
      },
      content: {
        spaced: "justify-between",
        center: "justify-center",
        start: "justify-start",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "rectangle",
      content: "center",
    },
  },
);

type ButtonProps = AsChildProps<ButtonHTMLAttributes<HTMLButtonElement>> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    style?: CSSProperties;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant, size, content, shape, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, content, shape, className }))} {...props} />;
  },
);

export default Button;
