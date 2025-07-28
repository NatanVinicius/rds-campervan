import { useEffect, useState } from "react";
import { api } from "../lib/api";
import type { VanType } from "../types/VanType";

export type filtersType = {
	capacityDetail: string;
	maxPrice: string;
	newOrUsed: string;
	sortingBy: string;
};

export const useVans = (filters?: filtersType) => {
	const [vans, setVans] = useState<VanType[] | []>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	console.log(filters);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchVans();
	}, [filters]);

	useEffect(() => {
		console.log(vans);
	}, [vans]);

	const fetchVans = async () => {
		setLoading(true);
		api
			.get("/vans", {
				params: {
					...filters,
				},
			})
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
