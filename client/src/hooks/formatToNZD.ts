export const formatToNZD = (value: number) => {
	return new Intl.NumberFormat("en-NZ", {
		style: "currency",
		currency: "NZD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(value);
};
