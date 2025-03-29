import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageIcon, Github } from "lucide-react";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center m-auto justify-between">
				<div className="flex items-center gap-2">
					<ImageIcon className="h-6 w-6 text-primary" />
					<Link href="/" className="flex items-center">
						<span className="text-xl font-bold">ImageResizer</span>
						<span className="ml-1 text-xs bg-primary text-white px-1.5 py-0.5 rounded-md">
							Beta
						</span>
					</Link>
				</div>

				<nav className="hidden md:flex items-center gap-6 text-sm">
					<Link
						href="/"
						className="font-medium transition-colors hover:text-primary"
					>
						Home
					</Link>
					<Link
						href="#features"
						className="font-medium text-muted-foreground transition-colors hover:text-primary"
					>
						Features
					</Link>
					<Link
						href="#faq"
						className="font-medium text-muted-foreground transition-colors hover:text-primary"
					>
						FAQ
					</Link>
				</nav>

				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon" asChild>
						<Link href="https://github.com" target="_blank" rel="noreferrer">
							<Github className="h-5 w-5" />
							<span className="sr-only">GitHub</span>
						</Link>
					</Button>
					<Button variant="outline" size="sm" className="hidden md:flex">
						Contact Us
					</Button>
				</div>
			</div>
		</header>
	);
}
