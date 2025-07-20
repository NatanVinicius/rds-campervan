import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import logo from "../../assets/logo-black.png";
import { useState } from "react";
import { useVans } from "../../hooks/useVans";
import { CreateVan } from "./CreateVan";
import { api } from "../../lib/api";
import { LoadingSpin } from "../../components/LoadingSpin";
import { EditVan } from "./EditVan";
import type { VanType } from "../../types/VanType";
import { DeleteVan } from "./DeleteVan";

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

export const Painel = () => {
	const { vans, loading, fetchVans, setLoading } = useVans();
	const [success, setSuccess] = useState(false);
	const [isCreateVanOpen, setIsCreateVanOpen] = useState(false);
	const [isEditVanModalOpen, setIsEditVanModalOpen] = useState(false);
	const [isDeleteVanModalOpen, setIsDeleteVanModalOpen] = useState(false);
	const [vanBeenEdit, setVanBeenEdit] = useState<VanType>();
	const [vanBeenDelete, setVanBeenDelete] = useState<string | "">();

	const createNewVan = async (formData: FormData) => {
		setLoading(true);
		setIsCreateVanOpen(false);
		try {
			const res = await api.post("/van", formData);
			if (res.data) {
				setSuccess(true);
				fetchVans();
			}
		} catch (error) {
			console.log(error);
		} finally {
			setTimeout(() => {
				setSuccess(false);
			}, 5000);
		}
	};

	const editVan = async (vanEditNew: VanEditType) => {
		setLoading(true);
		setIsEditVanModalOpen(false);
		try {
			const res = await api.put(`/vans/${vanEditNew._id}`, vanEditNew);
			if (res.data) {
				setSuccess(true);
				fetchVans();
			}
		} catch (error) {
			console.log(error);
		} finally {
			setTimeout(() => {
				setSuccess(false);
			}, 5000);
		}
	};

	const deleteVan = async () => {
		setLoading(true);
		setIsDeleteVanModalOpen(false);
		try {
			const res = await api.delete(`vans/${vanBeenDelete}`);
			if (res.data) {
				setSuccess(true);
				fetchVans();
			}
		} catch (error) {
			console.log(error);
		} finally {
			setTimeout(() => {
				setSuccess(false);
			}, 5000);
		}
	};

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center">
			<div className="w-full flex flex-col mx-auto py-4 px-2 md:w-[800px]">
				<header className="flex flex-col gap-2 items-center">
					<img src={logo} alt="" />
					<p className="text-2xl">Admin Control</p>
				</header>
				<div className="w-full flex justify-end my-6">
					<button
						type="button"
						className="py-4 px-6 text-white bg-[#569DF7] rounded-lg cursor-pointer"
						onClick={() => setIsCreateVanOpen(true)}
					>
						Create
					</button>
				</div>
				{success && (
					<div>
						<p className="my-6 text-2xl text-center font-semibold text-green-500">
							Success!
						</p>
					</div>
				)}
				<div className="flex items-center justify-center overflow-x-auto rounded-2xl">
					{loading ? (
						<LoadingSpin />
					) : (
						<table className="w-full table-fixed bg-white">
							<thead>
								<tr className="font-semibold text-lg bg-zinc-800  text-white">
									<th className="p-2 text-start">Name</th>
									<th className="p-2 text-start">Price</th>
									<th className="p-2 text-start">Kms</th>
									<th className="p-2 text-center">Actions</th>
								</tr>
							</thead>
							<tbody>
								{vans?.map((van, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<tr key={index} className="w-full">
										<td className="p-2">{van.name}</td>
										<td className="p-2">{van.price}</td>
										<td className="p-2">{van.details.kilometersDetail}</td>
										<td className="flex gap-2 items-center justify-center text-2xl p-2">
											<div className="flex gap-2 items-center justify-start text-2xl p-2">
												<FaEdit
													className="cursor-pointer"
													onClick={() => {
														setIsEditVanModalOpen((prev) => !prev);
														setVanBeenEdit(van);
													}}
												/>
												<MdDelete
													className="text-red-500 cursor-pointer"
													onClick={() => {
														setIsDeleteVanModalOpen((prev) => !prev);
														setVanBeenDelete(van._id);
													}}
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
			{isCreateVanOpen && (
				<CreateVan
					setIsCreateVanOpen={setIsCreateVanOpen}
					createNewVan={createNewVan}
				/>
			)}
			{isEditVanModalOpen && vanBeenEdit && (
				<EditVan
					vanBeenEdit={vanBeenEdit}
					setIsEditVanModalOpen={setIsEditVanModalOpen}
					editVan={editVan}
				/>
			)}
			{isDeleteVanModalOpen && (
				<DeleteVan
					setIsDeleteVanModalOpen={setIsDeleteVanModalOpen}
					deleteVan={deleteVan}
				/>
			)}
		</div>
	);
};
