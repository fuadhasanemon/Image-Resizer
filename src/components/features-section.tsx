import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowUpDown, Maximize2, Zap, Shield } from "lucide-react";

export function FeaturesSection() {
	return (
		<section id="features" className="container py-12 md:py-16">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold mb-3">Powerful Features</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					Our image resizer comes packed with everything you need to resize your
					images quickly and efficiently.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<Card>
					<CardHeader className="pb-2">
						<Zap className="h-6 w-6 text-primary mb-2" />
						<CardTitle>Fast Processing</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Resize your images instantly with our client-side processing
							technology.
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="pb-2">
						<ArrowUpDown className="h-6 w-6 text-primary mb-2" />
						<CardTitle>Maintain Aspect Ratio</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Keep your images looking perfect with our aspect ratio lock
							feature.
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="pb-2">
						<Maximize2 className="h-6 w-6 text-primary mb-2" />
						<CardTitle>Custom Dimensions</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Resize by exact dimensions or percentage to fit your specific
							needs.
						</CardDescription>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="pb-2">
						<Shield className="h-6 w-6 text-primary mb-2" />
						<CardTitle>Privacy First</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Your images never leave your browser. All processing happens
							locally.
						</CardDescription>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
