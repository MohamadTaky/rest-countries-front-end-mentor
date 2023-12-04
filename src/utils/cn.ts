import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export default function cn(...classes: ClassValue[]) {
	return twMerge(clsx(...classes));
}