import { useEffect, useRef } from "react";

export default function useEventListener<K extends keyof DocumentEventMap>(
	type: K,
	handler: (this: Document, event: DocumentEventMap[K]) => any
) {
	const savedhandler = useRef(handler);
	useEffect(() => {
		const eventhandler = savedhandler.current;
		document.addEventListener(type, eventhandler);
		return () => {
			document.removeEventListener(type, eventhandler);
		};
	}, [type]);
}
