"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface AdBannerProps {
	slot: string;
	format?: "auto" | "horizontal" | "vertical" | "rectangle";
	className?: string;
}

// Extend the window interface safely
declare global {
	interface Window {
		adsbygoogle: unknown[];
	}
}

console.log("==========>", process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID); // For debugging

export function AdBanner({
	slot,
	format = "auto",
	className = "",
}: AdBannerProps) {
	const adRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (adRef.current) {
			const timeout = setTimeout(() => {
				try {
					window.adsbygoogle = window.adsbygoogle || [];
					window.adsbygoogle.push({});
				} catch (e) {
					console.error("AdSense error", e);
				}
			}, 500); // short delay to ensure layout is ready

			return () => clearTimeout(timeout);
		}
	}, []);

	return (
		<Card className={`overflow-hidden ${className}`}>
			<div className="text-xs text-center text-muted-foreground py-1 border-b">
				Advertisement
			</div>
			<div
				ref={adRef}
				style={{ minWidth: "320px" }}
				className="flex justify-center"
			>
				<ins
					className="adsbygoogle"
					style={{
						display: "block",
						minHeight: format === "horizontal" ? "90px" : "250px",
					}}
					data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
					data-ad-slot={slot}
					data-ad-format={format}
					data-full-width-responsive="true"
				></ins>
			</div>
		</Card>
	);
}
