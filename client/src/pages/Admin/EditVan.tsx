import { useState } from "react";
import type { VanType } from "../../types/VanType";

type VanEditType = {
	_id: string | undefined;
	name: string;
	description: string;
	features: string;
	price: number;
	city: string;
	kilometersDetail: number;
	capacityDetail: number;
};

interface EditVanProps {
	vanBeenEdit: VanType;
	setIsEditVanModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	editVan: (vanEditNew: VanEditType) => void;
}

export const EditVan = ({
	vanBeenEdit,
	setIsEditVanModalOpen,
	editVan,
}: EditVanProps) => {
	const [vanEditNew, setVanEditNew] = useState<VanEditType>({
		_id: vanBeenEdit._id,
		name: vanBeenEdit.name,
		description: vanBeenEdit.description,
		features: vanBeenEdit.features,
		price: vanBeenEdit.price,
		city: vanBeenEdit.details.city,
		kilometersDetail: vanBeenEdit.details.kilometersDetail,
		capacityDetail: vanBeenEdit.details.capacityDetail,
	});

	const handleChangeInput = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;

		setVanEditNew((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFormSubmit = () => {
		if (vanEditNew) {
			editVan(vanEditNew);
		}
	};

	return (
		<div className="absolute top-0 left-0 flex justify-center w-full h-full py-10 px-4 backdrop-blur-lg">
			<div className="w-full h-fit py-6 px-2 bg-white rounded-2xl lg:w-[800px]">
				<h1 className="py-4 text-center font-semibold">
					Fill all field to edit
				</h1>
				<form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
					<div>
						<label htmlFor="name">Name</label>
						<input
							required
							type="text"
							id="name"
							name="name"
							className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
							value={vanEditNew.name || ""}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<label htmlFor="price">Price</label>
						<input
							required
							type="text"
							id="price"
							name="price"
							className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
							onChange={handleChangeInput}
							value={vanEditNew.price}
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
							value={vanEditNew.kilometersDetail}
						/>
					</div>
					<div>
						<label htmlFor="capacityDetail">Capacity</label>
						<select
							required
							id="capacityDetail"
							name="capacityDetail"
							className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
							onChange={handleChangeInput}
							value={vanEditNew.capacityDetail}
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
					<div>
						<label htmlFor="city">City</label>
						<input
							required
							type="text"
							id="city"
							name="city"
							className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
							onChange={handleChangeInput}
							value={vanEditNew.city}
						/>
					</div>
					<div>
						<label htmlFor="description">Description</label>
						<input
							required
							type="text"
							id="description"
							name="description"
							className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
							onChange={handleChangeInput}
							value={vanEditNew.description}
						/>
					</div>
					<div>
						<label htmlFor="features">Features</label>
						<textarea
							required
							id="features"
							name="features"
							className="w-full p-2 border border-zinc-500 rounded-lg outline-none"
							onChange={handleChangeInput}
							value={vanEditNew.features}
						/>
					</div>
					<div className="flex gap-4 justify-end my-6">
						<button
							type="submit"
							className="py-2 px-4 bg-black text-white rounded-lg cursor-pointer"
						>
							Edit
						</button>
						<button
							type="button"
							className="py-2 px-4 bg-red-500 text-white rounded-lg cursor-pointer"
							onClick={() => setIsEditVanModalOpen((prev) => !prev)}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
