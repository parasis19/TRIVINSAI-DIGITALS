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
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#edeef0] to-[#afc7ff] dark:from-[#334155] dark:to-[#1E293B]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-orange-500">Templates</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-orange-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our collection of professionally designed templates for various industries and purposes.
          </p>
        </div>

        {/* Product Slider */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-1 md:px-2 w-max">
            {[...previewTemplates, "more"].map((templateOrMore, index) => {
              const isMoreCard = templateOrMore === "more"

              if (isMoreCard) {
                return (
                  <Link href="/templates" key="browse-more">
                    <div className="bg-white dark:bg-gray-800 border border-border rounded-xl shadow-md p-6 flex items-center justify-center text-center text-lg font-semibold text-primary hover:text-white hover:bg-primary transition-all duration-300 cursor-pointer min-w-[220px] h-[300px] flex-shrink-0">
                      Browse More →
                    </div>
                  </Link>
                )
              }

              const template = templateOrMore as Template
              const categoryName = categories.find((c) => c.id === template.category)?.name || "General"

              return (
                <ScrollAnimation key={template.id} delay={(index % 4) * 100}>
                  <Dialog
                    open={selectedTemplate === template}
                    onOpenChange={(open) => !open && setSelectedTemplate(null)}
                  >
                    <DialogTrigger asChild>
                      <div
                        onClick={() => setSelectedTemplate(template)}
                        className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-border p-4 transition-all hover:shadow-xl hover:scale-[1.03] min-w-[220px] h-[300px] flex-shrink-0 flex flex-col"
                      >
                        <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
                          <Image
                            src={template.image || "/placeholder.svg"}
                            alt={template.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 mb-1">
                            {template.title}
                          </h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full w-fit">
                            {categoryName}
                          </span>
                        </div>
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
                            <a href={template.previewUrl} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline">Preview</Button>
                            </a>
                          )}
                          <a
                            href={`mailto:marketing@trivinsai.com?subject=Request to Use ${template.title}&body=I would like to use the "${template.title}" template under "${categoryName}" category.`}
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
        </div>
      </div>
    </section>
  )
}
