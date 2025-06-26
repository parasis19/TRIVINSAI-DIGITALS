"use client"
import type React from "react"
import { IconExternalLink, IconMail } from "@tabler/icons-react"
import type { CardData } from "@/app/templates/data/cards-data"

interface TemplatePreviewProps {
  card: CardData
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({ card }) => {
  const { templatePreview } = card

  if (!templatePreview) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No template preview available</p>
      </div>
    )
  }

  const handlePreviewClick = () => {
    if (templatePreview.previewUrl) {
      window.open(templatePreview.previewUrl, "_blank")
    }
  }

  const handleGetQuoteClick = () => {
    const subject = `Quote Request for ${card.title} Template`
    const body = `Hi,

I'm interested in getting a quote for the following template:

Template Name: ${card.title}
Category: ${card.category}
Description: ${templatePreview.description}

Please provide me with:
- Pricing information
- Customization options
- Timeline for delivery
- Any additional features available

Thank you for your time. I look forward to hearing from you.

Best regards`

    const mailtoLink = `mailto:contact@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="space-y-4">
      {/* Mobile Layout (Vertical) */}
      <div className="block md:hidden space-y-4">
        {/* Preview Image */}
        <div className="w-full h-48 rounded-xl overflow-hidden">
          <img
            src={templatePreview.image || "/placeholder.svg"}
            alt="Template Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{templatePreview.description}</p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handlePreviewClick}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200"
          >
            <IconExternalLink className="h-5 w-5" />
            Preview Template
          </button>
          <button
            onClick={handleGetQuoteClick}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200"
          >
            <IconMail className="h-5 w-5" />
            Get Quote
          </button>
        </div>
      </div>

      {/* Desktop Layout (Horizontal) */}
      <div className="hidden md:flex gap-6">
        {/* Preview Image */}
        <div className="w-1/2 h-64 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={templatePreview.image || "/placeholder.svg"}
            alt="Template Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-1/2 flex flex-col justify-between">
          {/* Description */}
          <div className="mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{templatePreview.description}</p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handlePreviewClick}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200"
            >
              <IconExternalLink className="h-5 w-5" />
              Preview Template
            </button>
            <button
              onClick={handleGetQuoteClick}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200"
            >
              <IconMail className="h-5 w-5" />
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
