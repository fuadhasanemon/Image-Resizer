"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Download, RefreshCw, Lock, Unlock } from "lucide-react";
import ImageDropzone from "@/components/image-dropzone";
import ImagePreview from "@/components/image-preview";
import { useImageStore } from "@/lib/store";
import { SiteHeader } from "@/components/site-header";
import { FeaturesSection } from "@/components/features-section";
import { FaqSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";
import { AdBanner } from "@/components/ad-banner";

export default function ImageResizer() {
	const [aspectRatioLocked, setAspectRatioLocked] = useState(true);
	const [resizeMethod, setResizeMethod] = useState<"dimensions" | "percentage">(
		"dimensions"
	);

	const {
		originalImage,
		resizedImage,
		width,
		height,
		percentage,
		setWidth,
		setHeight,
		setPercentage,
		resizeImage,
		resetImage,
		hasImage,
	} = useImageStore();

	const handleWidthChange = (value: string) => {
		const newWidth = Number.parseInt(value) || 0;
		setWidth(newWidth);

		if (aspectRatioLocked && originalImage) {
			const aspectRatio = originalImage.width / originalImage.height;
			setHeight(Math.round(newWidth / aspectRatio));
		}
	};

	const handleHeightChange = (value: string) => {
		const newHeight = Number.parseInt(value) || 0;
		setHeight(newHeight);

		if (aspectRatioLocked && originalImage) {
			const aspectRatio = originalImage.width / originalImage.height;
			setWidth(Math.round(newHeight * aspectRatio));
		}
	};

	const handlePercentageChange = (value: number[]) => {
		setPercentage(value[0]);
	};

	const handleDownload = () => {
		if (!resizedImage) return;

		const link = document.createElement("a");
		link.download = "resized-image.jpg";
		link.href = resizedImage;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		toast("Image downloaded");
	};

	return (
		<div className="flex flex-col m-auto min-h-screen">
			<SiteHeader />
			<main className="flex-1">
				<div className="container mx-auto py-8 px-4">
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold text-center mb-8 text-primary">
							Image Resizer
						</h1>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							A simple, fast, and free tool to resize your images while
							maintaining quality. No uploads required - everything happens in
							your browser.
						</p>
					</div>

					<AdBanner slot="1234567890" format="horizontal" className="mb-8" />

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<Card className="col-span-1">
							<CardContent className="pt-6">
								{!hasImage ? (
									<ImageDropzone />
								) : (
									<div className="space-y-6">
										<div className="flex justify-between items-center">
											<h2 className="text-xl font-semibold">Original Image</h2>
											<Button variant="outline" size="sm" onClick={resetImage}>
												<RefreshCw className="mr-2 h-4 w-4" />
												Reset
											</Button>
										</div>
										<ImagePreview
											src={originalImage?.url || "/placeholder.svg"}
											alt="Original image"
											width={originalImage?.width}
											height={originalImage?.height}
										/>
										<div className="text-sm text-muted-foreground text-center">
											{originalImage &&
												`${originalImage.width} × ${originalImage.height} pixels`}
										</div>
									</div>
								)}
							</CardContent>
						</Card>

						{hasImage && (
							<Card className="col-span-1">
								<CardContent className="pt-6">
									<div className="space-y-6">
										<h2 className="text-xl font-semibold">Resized Image</h2>

										<Tabs
											defaultValue="dimensions"
											onValueChange={(v) =>
												setResizeMethod(v as "dimensions" | "percentage")
											}
										>
											<TabsList className="grid w-full grid-cols-2">
												<TabsTrigger value="dimensions">Dimensions</TabsTrigger>
												<TabsTrigger value="percentage">Percentage</TabsTrigger>
											</TabsList>

											<TabsContent
												value="dimensions"
												className="space-y-4 pt-4"
											>
												<div className="flex items-center gap-4">
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="width">Width (px)</Label>
														<Input
															id="width"
															type="number"
															value={width}
															onChange={(e) =>
																handleWidthChange(e.target.value)
															}
														/>
													</div>

													<Button
														variant="ghost"
														size="icon"
														className="mt-6"
														onClick={() =>
															setAspectRatioLocked(!aspectRatioLocked)
														}
													>
														{aspectRatioLocked ? (
															<Lock className="h-4 w-4" />
														) : (
															<Unlock className="h-4 w-4" />
														)}
														<span className="sr-only">
															{aspectRatioLocked
																? "Unlock aspect ratio"
																: "Lock aspect ratio"}
														</span>
													</Button>

													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="height">Height (px)</Label>
														<Input
															id="height"
															type="number"
															value={height}
															onChange={(e) =>
																handleHeightChange(e.target.value)
															}
														/>
													</div>
												</div>
											</TabsContent>

											<TabsContent
												value="percentage"
												className="space-y-4 pt-4"
											>
												<div className="space-y-4">
													<div className="flex justify-between">
														<Label htmlFor="percentage">
															Scale: {percentage}%
														</Label>
													</div>
													<Slider
														id="percentage"
														min={1}
														max={200}
														step={1}
														value={[percentage]}
														onValueChange={handlePercentageChange}
													/>
												</div>
											</TabsContent>
										</Tabs>

										<Button
											className="w-full"
											onClick={() => resizeImage(resizeMethod)}
										>
											Resize Image
										</Button>

										{resizedImage && (
											<>
												<ImagePreview
													src={resizedImage || "/placeholder.svg"}
													alt="Resized image"
													width={width}
													height={height}
												/>
												<Button
													className="w-full"
													variant="secondary"
													onClick={handleDownload}
												>
													<Download className="mr-2 h-4 w-4" />
													Download Resized Image
												</Button>
											</>
										)}
									</div>
								</CardContent>
							</Card>
						)}
					</div>

					<FeaturesSection />
					<AdBanner slot="3456789012" format="rectangle" className="mb-16" />
					<FaqSection />
					<AdBanner slot="4567890123" format="horizontal" className="my-16" />
				</div>
			</main>
			<SiteFooter />
		</div>
	);
}
