import { HeroSection } from "./HeroSection";
import { SearchFilter } from "./SearchFilter";
import { useState } from "react";
import { VansContent } from "./VansContent";
import { Footer } from "../../components/Footer";
import type { filtersType } from "../../hooks/useVans";

export const HomePage = () => {
	const [filters, setFilters] = useState<filtersType>({
		capacityDetail: "",
		maxPrice: "",
		newOrUsed: "",
		sortingBy: "",
	});

	return (
		<div className="relative">
			<HeroSection />
			<main className="py-6 xl:w-[1100px] mx-auto">
				<SearchFilter setFilters={setFilters} />
				<VansContent filters={filters} />
			</main>
			<Footer />
		</div>
	);
};
