import { ReactNode } from "react";

export type AsChildProps<DefaultElementProps> =
	| ({ asChild?: false } & DefaultElementProps)
	| { asChild: true; children: ReactNode };
