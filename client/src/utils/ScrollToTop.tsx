import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
	const { pathname } = useLocation();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);
	return null;
};
