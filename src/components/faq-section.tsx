import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
	return (
		<section
			id="faq"
			className="container py-12 md:py-16 bg-muted/30 rounded-lg"
		>
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					Find answers to common questions about our image resizer tool.
				</p>
			</div>

			<div className="max-w-3xl mx-auto">
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>Is this tool completely free?</AccordionTrigger>
						<AccordionContent>
							Yes, our basic image resizing tool is completely free to use with
							no limitations. We may introduce premium features in the future,
							but the core functionality will always remain free.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger>
							What image formats are supported?
						</AccordionTrigger>
						<AccordionContent>
							Our tool supports all common image formats including JPG, PNG,
							GIF, and WebP. The resized images are currently downloaded as JPG
							files.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger>
							Are my images stored on your servers?
						</AccordionTrigger>
						<AccordionContent>
							No, all image processing happens directly in your browser. Your
							images are never uploaded to our servers, ensuring complete
							privacy and security.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger>
							Is there a maximum file size limit?
						</AccordionTrigger>
						<AccordionContent>
							Since all processing happens in your browser, the file size limit
							depends on your device&apos;s memory. Generally, most modern
							browsers can handle images up to 50MB without issues.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-5">
						<AccordionTrigger>
							Can I resize multiple images at once?
						</AccordionTrigger>
						<AccordionContent>
							Currently, our tool supports resizing one image at a time.
							We&apos;re working on a batch processing feature that will be
							available in a future update.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
}
