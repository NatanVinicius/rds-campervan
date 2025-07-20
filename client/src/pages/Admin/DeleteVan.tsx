interface DeleteVanProps {
	setIsDeleteVanModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	deleteVan: () => void;
}

export const DeleteVan = ({
	setIsDeleteVanModalOpen,
	deleteVan,
}: DeleteVanProps) => {
	return (
		<div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen backdrop-blur-xl">
			<div className="bg-white p-6 rounded-2xl">
				<p className="my-6">Please confirm if you want to delete this.</p>
				<div className="flex w-full justify-end gap-4">
					<button
						type="button"
						className="py-2 px-4 bg-black text-white rounded-lg cursor-pointer"
						onClick={deleteVan}
					>
						Confirm
					</button>
					<button
						type="button"
						className="py-2 px-4 bg-red-500 text-white rounded-lg cursor-pointer"
						onClick={() => setIsDeleteVanModalOpen((prev) => !prev)}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};
