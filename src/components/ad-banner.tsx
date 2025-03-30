"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface AdBannerProps {
	slot: string;
	format?: "auto" | "horizontal" | "vertical" | "rectangle";
	className?: string;
}

export function AdBanner({
	slot,
	format = "auto",
	className = "",
}: AdBannerProps) {
	const adRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Only run this in the browser
		if (typeof window === "undefined") return;

		try {
			// Check if AdSense is loaded
			if (window.adsbygoogle) {
				// Push the ad to AdSense for rendering
				(window.adsbygoogle = window.adsbygoogle || []).push({});
			}
		} catch (error) {
			console.error("AdSense error:", error);
		}
	}, []);

	return (
		<Card className={`overflow-hidden ${className}`}>
			<div className="text-xs text-center text-muted-foreground py-1 border-b">
				Advertisement
			</div>
			<div ref={adRef} className="flex justify-center">
				<ins
					className="adsbygoogle"
					style={{
						display: "block",
						minHeight: format === "horizontal" ? "90px" : "250px",
					}}
					data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense publisher ID
					data-ad-slot={slot}
					data-ad-format={format}
					data-full-width-responsive="true"
				></ins>
			</div>
		</Card>
	);
}
