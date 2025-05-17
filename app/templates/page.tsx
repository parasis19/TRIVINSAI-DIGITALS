"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ScrollAnimation from "@/components/scroll-animation"

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)

  // Template categories
  const categories = [
    { id: "all", name: "All Templates" },
    { id: "blog", name: "Blog" },
    { id: "portfolio", name: "Portfolio" },
    { id: "business", name: "Business" },
    { id: "landing", name: "Landing Page" },
    { id: "ecommerce", name: "eCommerce" },
  ]

  // Template data
  const templates: Template[] = Array.from({ length: 50 }, (_, i) => ({
    id: `template-${i + 1}`,
    title: `Template ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id,
    image: `/placeholder.svg?height=300&width=400&text=Template ${i + 1}`,
    description: `A beautiful ${
      categories[Math.floor(Math.random() * (categories.length - 1)) + 1].name
    } template with modern design and responsive layout.`,
  }))

  // Filter templates based on search query and category
  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || template.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Template Gallery</h1>
              <p className="text-xl text-muted-foreground">
                Browse our collection of professionally designed templates for your next project.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTemplates.map((template, index) => (
                <ScrollAnimation key={template.id} delay={(index % 4) * 100}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover-lift border border-border cursor-pointer"
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
                            <h3 className="font-semibold">{template.title}</h3>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {categories.find((c) => c.id === template.category)?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
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
                          <Button variant="outline">Preview</Button>
                          <Button className="bg-primary hover:bg-secondary text-white">Use This Template</Button>
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Can't find what you're looking for? We can create a custom design tailored to your specific needs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-secondary text-white">
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

// Template type definition
interface Template {
  id: string
  title: string
  category: string
  image: string
  description: string
}
