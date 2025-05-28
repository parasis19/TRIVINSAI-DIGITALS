"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

import { templates, categories } from "../app/templates/data/templates"
import type { Template } from "../app/templates/data/templates"

export default function TemplatesPreviewSection() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const previewTemplates = templates.slice(0, 8)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-orange-100 to-orange-200 dark:from-[#334155] dark:to-[#1E293B]">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="max-w-4xl mx-auto mb-12 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-orange-500">Templates</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our collection of professionally designed templates for various industries and purposes.
          </p>
        </div>

        {/* Template Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewTemplates.map((template, index) => {
            const categoryName = categories.find((c) => c.id === template.category)?.name || "General"
            const emailHref = `mailto:hello@example.com?subject=Using Template: ${template.title}&body=Hi,%0D%0A%0D%0AI would like to use the "${template.title}" template from the "${categoryName}" category.%0D%0A%0D%0AThank you.`

            return (
              <ScrollAnimation key={template.id} delay={(index % 4) * 100}>
                <Dialog
                  open={selectedTemplate === template}
                  onOpenChange={(open) => !open && setSelectedTemplate(null)}
                >
                  <DialogTrigger asChild>
                    <div
                      className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-border p-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <div className="relative h-40 w-full mb-3 rounded-md overflow-hidden">
                        <Image
                          src={template.image || "/placeholder.svg"}
                          alt={template.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                        {template.title}
                      </h3>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {categoryName}
                      </span>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl dark:bg-[#111827]">
                    <DialogHeader>
                      <DialogTitle>{template.title}</DialogTitle>
                      <DialogDescription>{template.description}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-6">
                        <Image
                          src={template.image || "/placeholder.svg"}
                          alt={template.title}
                          fill
                          className="object-cover"
                        />
                      </div>
<div className="flex justify-end gap-4">
  {template.previewUrl && (
    <a
      href={template.previewUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline">Preview</Button>
    </a>
  )}
  <a
    href={`mailto:your@email.com?subject=Request to Use ${template.title}&body=I would like to use the "${template.title}" template under "${categories.find(c => c.id === template.category)?.name}" category.`}
  >
    <Button className="bg-primary hover:bg-secondary text-white">
      Get Quote
    </Button>
  </a>
</div>
                    </div>
                  </DialogContent>
                </Dialog>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* Show More */}
        <div className="mt-10 text-center">
          <Link href="/templates">
            <Button size="lg" className="bg-primary hover:bg-secondary text-white">
              Show More Templates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
