import { templates, categories } from "../templates"
import { notFound } from "next/navigation"
import Image from "next/image"

export default function TemplatePage({ params }: { params: { id: string } }) {
  const template = templates.find((t) => t.id === params.id)

  if (!template) return notFound()

  const categoryName = categories.find((c) => c.id === template.category)?.name || "Unknown"

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-primary dark:text-white">{template.title}</h1>
      <Image
        src={template.image || "/placeholder.svg"}
        alt={template.title}
        width={800}
        height={400}
        className="rounded-lg object-cover mb-6"
      />
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{template.description}</p>
      <p className="text-sm text-gray-400">
        Category: <strong>{categoryName}</strong>
      </p>
    </section>
  )
}
