import { Schema, model } from "mongoose";

export const Van = model(
	"Van",
	new Schema(
		{
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: false,
			},
			features: { type: String, required: true },
			price: {
				type: Number,
				required: true,
			},

			coverImage: {
				type: String,
				// required: true,
			},
			details: {
				type: {
					kilometersDetail: { type: Number, required: true },
					capacityDetail: { type: Number, required: true },
					city: { type: String, required: true },
					newOrUsed: { type: String, required: true },
					imagesDetail: [{ type: String, required: false }],
				},
			},
		},
		{
			timestamps: true,
		},
	),
);
