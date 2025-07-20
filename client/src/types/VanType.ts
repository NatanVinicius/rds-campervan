export interface VanType {
	_id?: string;
	name: string;
	price: number;
	description: string;
	features: string;
	coverImage: File | "";
	details: {
		kilometersDetail: number;
		city: string;
		capacityDetail: number;
		newOrUsed: string;
		imagesDetail: File[] | [];
	};
}
