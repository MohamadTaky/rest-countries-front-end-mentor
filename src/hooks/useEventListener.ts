import { useEffect, useRef } from "react";

export default function useEventListener<K extends keyof DocumentEventMap>(
	type: K,
	handler: (this: Document, event: DocumentEventMap[K]) => any
) {
	const savedhandler = useRef(handler);
	useEffect(() => {
		document.addEventListener(type, savedhandler.current);
		return () => {
			document.removeEventListener(type, savedhandler.current);
		};
	}, [type]);
}
