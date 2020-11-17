import { useLayoutEffect, useState } from 'react';

interface WindowSize {
	width: number;
	height: number;
}

export function useWindowSize(): WindowSize {
	const initState: WindowSize = { width: 0, height:0 }
	const [size, setSize] = useState(initState);
	useLayoutEffect(() => {
		function updateSize() {
			setSize({ width: window.innerWidth, height: window.innerHeight },);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}