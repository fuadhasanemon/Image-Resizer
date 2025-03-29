import { create } from "zustand";

interface ImageData {
	url: string;
	width: number;
	height: number;
	aspectRatio: number;
}

interface ImageStore {
	originalImage: ImageData | null;
	resizedImage: string | null;
	width: number;
	height: number;
	percentage: number;
	hasImage: boolean;

	setOriginalImage: (image: ImageData) => void;
	setWidth: (width: number) => void;
	setHeight: (height: number) => void;
	setPercentage: (percentage: number) => void;
	resizeImage: (method: "dimensions" | "percentage") => void;
	resetImage: () => void;
}

export const useImageStore = create<ImageStore>((set, get) => ({
	originalImage: null,
	resizedImage: null,
	width: 0,
	height: 0,
	percentage: 100,
	hasImage: false,

	setOriginalImage: (image: ImageData) => {
		set({
			originalImage: image,
			width: image.width,
			height: image.height,
			resizedImage: null,
			hasImage: true,
		});
	},

	setWidth: (width: number) => set({ width }),

	setHeight: (height: number) => set({ height }),

	setPercentage: (percentage: number) => {
		const { originalImage } = get();
		if (originalImage) {
			set({
				percentage,
				width: Math.round(originalImage.width * (percentage / 100)),
				height: Math.round(originalImage.height * (percentage / 100)),
			});
		} else {
			set({ percentage });
		}
	},

	resizeImage: (method: "dimensions" | "percentage") => {
		const { originalImage, width, height, percentage } = get();

		if (!originalImage) return;

		let targetWidth = width;
		let targetHeight = height;

		if (method === "percentage") {
			targetWidth = Math.round(originalImage.width * (percentage / 100));
			targetHeight = Math.round(originalImage.height * (percentage / 100));
		}

		const canvas = document.createElement("canvas");
		canvas.width = targetWidth;
		canvas.height = targetHeight;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const img = new Image();
		img.onload = () => {
			ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
			const resizedImageUrl = canvas.toDataURL("image/jpeg", 0.9);
			set({
				resizedImage: resizedImageUrl,
				width: targetWidth,
				height: targetHeight,
			});
		};
		img.src = originalImage.url;
	},

	resetImage: () => {
		set({
			originalImage: null,
			resizedImage: null,
			width: 0,
			height: 0,
			percentage: 100,
			hasImage: false,
		});
	},
}));
