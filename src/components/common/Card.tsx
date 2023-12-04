import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLLIElement> & {
  asChild?: boolean;
};

export default function Card({ asChild, className, ...props }: CardProps) {
  const Comp = asChild ? Slot : "li";

  return (
    <Comp
      className={cn("bg-element-3 min-h-[300px] overflow-hidden rounded-md text-sm shadow-md", className)}
      {...props}
    />
  );
}
