import Link from "next/link";
import { ImageIcon } from "lucide-react";

export function SiteFooter() {
	return (
		<footer className="border-t bg-muted/40">
			<div className="container m-auto py-8 md:py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<ImageIcon className="h-5 w-5 text-primary" />
							<span className="text-lg font-bold">ImageResizer</span>
						</div>
						<p className="text-sm text-muted-foreground">
							A simple, fast, and free image resizing tool.
						</p>
					</div>

					<div className="space-y-3">
						<h3 className="font-medium">Product</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#features"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="#faq"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-3">
						<h3 className="font-medium">Company</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Careers
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-3">
						<h3 className="font-medium">Legal</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-xs text-muted-foreground">
						© {new Date().getFullYear()} ImageResizer. All rights reserved.
					</p>
					<div className="flex items-center gap-4">
						<Link
							href="#"
							className="text-xs text-muted-foreground hover:text-foreground transition-colors"
						>
							Privacy
						</Link>
						<Link
							href="#"
							className="text-xs text-muted-foreground hover:text-foreground transition-colors"
						>
							Terms
						</Link>
						<Link
							href="#"
							className="text-xs text-muted-foreground hover:text-foreground transition-colors"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
