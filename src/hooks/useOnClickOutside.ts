import { RefObject, useEffect } from "react";

export default function useOnClickOutside(ref: RefObject<HTMLElement>, handler: () => void) {
	useEffect(() => {
		const handleClick = (e: MouseEvent | TouchEvent) => {
			const element = ref.current;
			if (!element || element?.contains(e.target as Node)) return;
			handler();
		};
		document.addEventListener("click", handleClick);
		document.addEventListener("touchstart", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
			document.removeEventListener("touchstart", handleClick);
		};
	}, []);
}
