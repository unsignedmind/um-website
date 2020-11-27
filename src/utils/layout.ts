export function isMobile(width: number) {
	return width < 768;
}

export function isTablet(width: number) {
	return width > 768 && width >= 360;
}

export function isContentBreakPoint(width: number) {
	return width < 1440 && width >= 768;
}