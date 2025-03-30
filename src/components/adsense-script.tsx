"use client";

import { useEffect } from "react";
import Script from "next/script";

export function AdsenseScript() {
	useEffect(() => {
		// Initialize AdSense when the component mounts
		try {
			if (window.adsbygoogle) {
				window.adsbygoogle.push({
					google_ad_client: "ca-pub-4347100586192898", // Replace with your AdSense publisher ID
				});
			}
		} catch (error) {
			console.error("AdSense initialization error:", error);
		}
	}, []);

	return (
		<script
			async
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4347100586192898"
			crossorigin="anonymous"
		></script>
	);
}
