import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
};

export default function Grid({ children }: GridProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-items-stretch gap-8 md:gap-16">
      {children}
    </ul>
  );
}
