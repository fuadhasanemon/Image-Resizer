import Image from "next/image";

interface ImagePreviewProps {
	src?: string;
	alt: string;
	width?: number;
	height?: number;
}

export default function ImagePreview({
	src,
	alt,
	width,
	height,
}: ImagePreviewProps) {
	if (!src) return null;

	return (
		<div className="relative w-full h-64 bg-muted/30 rounded-lg overflow-hidden flex items-center justify-center">
			<Image
				src={src || "/placeholder.svg"}
				alt={alt}
				fill
				sizes="(max-width: 768px) 100vw, 50vw"
				style={{ objectFit: "contain" }}
				priority
			/>
		</div>
	);
}
