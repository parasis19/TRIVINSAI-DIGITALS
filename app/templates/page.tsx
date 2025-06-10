"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ScrollAnimation from "@/components/scroll-animation"

import { templates, categories, Template } from "./data/templates"

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || template.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-20 bg-gradient-to-r from-orange-200 via-orange-50 to-orange-200 dark:from-[#1E293B] dark:via-[#334155] dark:to-[#1E293B] ">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-900  bg-gradient-to-r from-orange-200 via-orange-50 to-orange-200 dark:from-[#1E293B] dark:via-[#334155] dark:to-[#1E293B]">
        <div className="container mx-auto px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl dark:text-white text-[#111827] font-bold mb-6">Template Gallery</h1>
              <p className="text-xl dark:text-white text-[#111827]">
                Browse our collection of professionally designed templates for your next project.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b bg-orange-100 dark:bg-[#111827]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex-1 relative">
              <Search className="absolute text-white dark:text-[#111827] left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-orange-100 dark:bg-[#5d6f98] dark:text-white text-[#111827]"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const isActive = categoryFilter === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setCategoryFilter(category.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors
                    ${
                      isActive
                        ? "bg-primary text-white dark:bg-orange-600"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-orange-700"
                    }`}
                >
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 md:py-24 bg-orange-100 dark:bg-[#111827]">
        <div className="container mx-auto px-4">
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTemplates.map((template, index) => (
                <ScrollAnimation key={template.id} delay={(index % 4) * 100}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform border border-border cursor-pointer"
                        onClick={() => setSelectedTemplate(template)}
                      >
                        <div className="relative h-48 w-full">
                          <Image
                            src={template.image || "/placeholder.svg"}
                            alt={template.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-base font-normal text-gray-900 dark:text-white truncate">
                              {template.title}
                            </h3>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                              {categories.find((c) => c.id === template.category)?.name}
                            </span>
                          </div>
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
                          <a
                            href={template.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline">Preview</Button>
                          </a>
                          <a
                            href={`mailto:your@email.com?subject=Request Template: ${template.title}&body=Hi,%0D%0A%0D%0AI would like to use the template "${template.title}" from the "${template.category}" category.`}
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
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No templates found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-200 dark:bg-[#6D819C]">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl dark:text-white font-bold mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-muted-foreground dark:text-white mb-8">
                Can't find what you're looking for? We can create a custom design tailored to your specific needs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary dark:bg-[#111827] hover:bg-secondary dark:hover:bg-[#374151] text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
