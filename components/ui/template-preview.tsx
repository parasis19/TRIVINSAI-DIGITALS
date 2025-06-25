"use client"
import type React from "react"
import { IconExternalLink, IconBrandGithub, IconCheck } from "@tabler/icons-react"
import type { CardData } from "@/data/cards-data"

interface TemplatePreviewProps {
  card: CardData
  onWebsiteClick: () => void
  onEmailClick: () => void
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({ card, onWebsiteClick, onEmailClick }) => {
  const { templatePreview } = card

  if (!templatePreview) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No template preview available</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Template Hero */}
      <div className="relative">
        <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
          <img
            src={card.src || "/placeholder.svg"}
            alt={templatePreview.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg p-3">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{templatePreview.title}</h3>
          </div>
        </div>
      </div>

      {/* Template Description */}
      <div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{templatePreview.description}</p>
      </div>

      {/* Features List */}
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {templatePreview.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <IconCheck className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        {templatePreview.demoUrl && (
          <button
            onClick={() => window.open(templatePreview.demoUrl, "_blank")}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200 flex-1"
          >
            <IconExternalLink className="h-4 w-4" />
            Live Demo
          </button>
        )}
        {templatePreview.githubUrl && (
          <button
            onClick={() => window.open(templatePreview.githubUrl, "_blank")}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-medium transition-colors duration-200 flex-1"
          >
            <IconBrandGithub className="h-4 w-4" />
            View Code
          </button>
        )}
      </div>

      {/* Secondary Actions */}
      <div className="border-t border-gray-200 dark:border-neutral-700 pt-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Need Help?</h4>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={onWebsiteClick}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200 text-sm flex-1"
          >
            <IconExternalLink className="h-3 w-3" />
            Visit Website
          </button>
          <button
            onClick={onEmailClick}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200 text-sm flex-1"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Website Description */}
      <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-xl p-4">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">About This Solution</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
      </div>
    </div>
  )
}
