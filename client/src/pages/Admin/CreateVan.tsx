import { useState } from "react";
import type { VanType } from "../../types/VanType";
import { BiSolidImageAdd } from "react-icons/bi";

interface CreateVanProps {
	setIsCreateVanOpen: React.Dispatch<React.SetStateAction<boolean>>;
	createNewVan: (formData: FormData) => void;
}

export const CreateVan = ({
	setIsCreateVanOpen,
	createNewVan,
}: CreateVanProps) => {
	const [form, setForm] = useState<VanType>({
		name: "",
		price: 0,
		description: "",
		features: "",
		coverImage: "",
		details: {
			kilometersDetail: 0,
			city: "",
			newOrUsed: "New",
			capacityDetail: 1,
			imagesDetail: [],
		},
	});
	const [isMissingField, setIsMissingField] = useState(false);

	const handleChangeInput = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;

		if (
			name === "kilometersDetail" ||
			name === "city" ||
			name === "capacityDetail"
		) {
			setForm((prev) => ({
				...prev,
				details: {
					...prev.details,
					[name]: value,
				},
			}));
			return;
		}

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleCoverImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files.length > 0) {
			setForm((prev) => ({ ...prev, coverImage: files[0] }));
		}
	};

	const handleDetailImages = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (files && files.length > 0) {
			setForm((prev) => ({
				...prev,
				details: {
					...prev.details,
					imagesDetail: Array.from(files),
				},
			}));
		}
	};

	const isFormValid = () => {
		return Object.values(form).every((value) => {
			if (typeof value === "string") {
				return value.trim() !== "";
			}

			if (value instanceof File) {
				return true;
			}

			if (Array.isArray(value)) {
				return value.length > 0;
			}

			return value !== null && value !== undefined;
		});
	};

	const formSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const formData = new FormData();
		if (isFormValid()) {
			formData.append("name", form.name);
			formData.append("price", String(form.price));
			formData.append("description", form.description);
			formData.append("features", form.features);
			formData.append("coverImage", form.coverImage);
			formData.append(
				"kilometersDetail",
				String(form.details.kilometersDetail),
			);
			formData.append("newOrUsed", form.details.newOrUsed);
			formData.append("city", form.details.city);
			formData.append("capacityDetail", String(form.details.capacityDetail));
			// biome-ignore lint/complexity/noForEach: <explanation>
			form.details.imagesDetail.forEach((image) => {
				formData.append("imagesDetail", image);
			});
		} else {
			setIsMissingField(true);
			return;
		}

		createNewVan(formData);
	};
	return (
		<>
			<div className="absolute top-0 left-0 flex justify-center w-full py-10 px-4 backdrop-blur-lg">
				<div className="w-full py-6 px-2 bg-white rounded-2xl lg:w-[800px]">
					<h1 className="py-4 text-center font-semibold ">
						Fill the field below to create a new van
					</h1>
					<form onSubmit={formSubmit} className="flex flex-col gap-4">
						<div>
							<label
								htmlFor="coverImage"
								className="flex flex-col items-center justify-center gap-4 p-4 border border-dotted border-black rounded-2xl cursor-pointer"
							>
								<p>Select a cover image</p>
								<BiSolidImageAdd className="text-4xl text-zinc-700" />
								{form?.coverImage && (
									<p className="text-center">
										<strong>Selected:</strong> {form.coverImage.name}
									</p>
								)}
								<input
									type="file"
									id="coverImage"
									name="coverImage"
									className="w-full p-2 border border-zinc-500 rounded-lg outline-none hidden"
									onChange={handleCoverImage}
									// value={form?.name}
								/>
							</label>
						</div>
						<div>
							<label htmlFor="name">Name</label>
							<input
								required
								type="text"
								id="name"
								name="name"
								className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
								onChange={handleChangeInput}
								value={form?.name}
							/>
						</div>
						<div>
							<label htmlFor="price">Price</label>
							<input
								required
								type="number"
								id="price"
								name="price"
								className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
								onChange={handleChangeInput}
								value={form?.price > 0 ? form?.price : ""}
							/>
						</div>
						<div>
							<label htmlFor="kilometersDetail">Kilometers</label>
							<input
								required
								type="number"
								id="kilometersDetail"
								name="kilometersDetail"
								className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
								onChange={handleChangeInput}
								value={
									form?.details.kilometersDetail > 0
										? form?.details.kilometersDetail
										: ""
								}
							/>
						</div>
						<div>
							<label htmlFor="city">City</label>
							<input
								required
								id="city"
								name="city"
								className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
								onChange={handleChangeInput}
								value={form?.details.city}
							/>
						</div>
						<div>
							<label htmlFor="newOrUsed">New or Used</label>
							<select
								required
								name="newOrUsed"
								id="newOrUsed"
								className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
								onChange={handleChangeInput}
								value={form?.details.newOrUsed}
							>
								<option value="New">New</option>
								<option value="Used">Used</option>
							</select>
						</div>
						<div>
							<label htmlFor="capacityDetail">Capacity</label>
							<select
								required
								name="capacityDetail"
								id="capacityDetail"
								className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
								onChange={handleChangeInput}
								value={form?.details.capacityDetail}
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>

						<div>
							<label htmlFor="name">Description</label>
							<textarea
								required
								name="description"
								id="description"
								className="w-full min-h-[100px] p-2 border border-zinc-500 rounded-lg outline-none"
								onChange={handleChangeInput}
								value={form?.description}
							/>
						</div>
						<div>
							<label htmlFor="features">Features</label>
							<textarea
								required
								name="features"
								id="features"
								className="w-full min-h-[100px] p-2 border border-zinc-500 rounded-lg outline-none"
								onChange={handleChangeInput}
								value={form?.features}
							/>
						</div>
						<div>
							<label
								htmlFor="imagesDetail"
								className="flex flex-col items-center justify-center gap-4 p-4 border border-dotted border-black rounded-2xl cursor-pointer"
							>
								<p>Select details images</p>
								<BiSolidImageAdd className="text-4xl text-zinc-700" />
								{form?.details.imagesDetail.length > 0 && (
									<p className="text-center">
										<strong>Selected:</strong>{" "}
										{form.details.imagesDetail.map((item, index) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<span key={index}>{item.name}</span>
										))}
									</p>
								)}
								<input
									type="file"
									id="imagesDetail"
									name="imagesDetail"
									multiple
									className="w-full p-2 border border-zinc-500 rounded-lg outline-none hidden"
									onChange={handleDetailImages}
									// value={form?.name}
								/>
							</label>
						</div>
						<div className="flex gap-4 justify-end my-6">
							<button
								type="submit"
								className="py-2 px-4 bg-black text-white rounded-lg cursor-pointer"
							>
								Create
							</button>
							<button
								type="button"
								className="py-2 px-4 bg-red-500 text-white rounded-lg cursor-pointer"
								onClick={() => setIsCreateVanOpen(false)}
							>
								Cancel
							</button>
						</div>
					</form>
					{isMissingField && (
						<div>
							<p className="text-center text-2xl text-red-500">
								*All field is required
							</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
