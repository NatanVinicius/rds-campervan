import { useEffect, useState } from "react";
import { api } from "../lib/api";
import type { VanType } from "../types/VanType";

export const useVans = () => {
	const [vans, setVans] = useState<VanType[] | []>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchVans = async () => {
		setLoading(true);
		api
			.get("/vans")
			.then((res) => {
				if (!Array.isArray(res.data)) {
					console.error("Expected array but got:", res.data);
					return;
				}

				setVans(res.data);
			})
			.catch((_err) => setError("Failed to load vans"))
			.finally(() =>
				setTimeout(() => {
					setLoading(false);
				}, 1000),
			);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchVans();
	}, []);

	return { vans, loading, error, fetchVans, setLoading };
};
