import axios from "axios";

// export const api = axios.create({
// 	baseURL: import.meta.env.VITE_API_URL,
// });

console.log(
	"DEBUG: import.meta.env.VITE_API_URL",
	import.meta.env.VITE_API_URL,
);

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "https://www.rdscampervan.co.nz/api",
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
