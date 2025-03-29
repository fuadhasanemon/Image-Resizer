"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import { useImageStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export default function ImageDropzone() {
	const [isDragging, setIsDragging] = useState(false);

	const { setOriginalImage } = useImageStore();

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			const file = acceptedFiles[0];

			if (!file) return;

			if (!file.type.startsWith("image/")) {
				toast("Invalid file type");
				return;
			}

			const reader = new FileReader();
			reader.onload = () => {
				const img = new Image();
				img.onload = () => {
					setOriginalImage({
						url: img.src,
						width: img.width,
						height: img.height,
						aspectRatio: img.width / img.height,
					});
				};
				img.src = reader.result as string;
			};
			reader.readAsDataURL(file);
		},
		[setOriginalImage, toast]
	);

	const { getRootProps, getInputProps, open } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
		},
		maxFiles: 1,
		onDragEnter: () => setIsDragging(true),
		onDragLeave: () => setIsDragging(false),
		onDropAccepted: () => setIsDragging(false),
		onDropRejected: () => setIsDragging(false),
	});

	return (
		<div
			{...getRootProps()}
			className={`
        border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center
        transition-colors cursor-pointer
        ${
					isDragging
						? "border-primary bg-primary/5"
						: "border-muted-foreground/25 hover:border-primary/50"
				}
      `}
		>
			<input {...getInputProps()} />
			<Upload className="h-10 w-10 text-muted-foreground mb-4" />
			<p className="text-center mb-4 font-medium">
				Drag & drop an image here, or click to select
			</p>
			<Button type="button" onClick={open} variant="secondary">
				Select Image
			</Button>
			<p className="text-xs text-muted-foreground mt-4 text-center">
				Supports JPG, PNG, GIF, and WebP
			</p>
		</div>
	);
}
