export interface CardData {
  id: string
  category: string
  title: string
  src: string
  websiteUrl: string
  emailSubject: string
  emailBody: string
  description: string
  templatePreview?: {
    image: string
    description: string
    previewUrl: string
  }
  isTemplateCard?: boolean
}

export const cardsData: CardData[] = [
  {
    id: "ai-dashboard",
    category: "Artificial Intelligence",
    title: "Brainwave AI Analytics",
    src: "/templates/brainwave.png",
    websiteUrl: "https://brainwave-ai-hub.netlify.app/",
    emailSubject: "AI Dashboard Template Inquiry",
    emailBody:
      "Hi, I'm interested in the AI Analytics Dashboard template and would like to know more about its features.",
    description:
      "A comprehensive AI-powered analytics dashboard that provides real-time insights, predictive analytics, and machine learning visualizations for data-driven decision making.",
    templatePreview: {
      image: "/templates/brainwave.png",
      description:
        "Modern dashboard template with clean design, data visualization charts, and responsive layout perfect for AI and analytics applications.",
      previewUrl: "https://brainwave-ai-hub.netlify.app/",
    },
  },
  {
    id: "bussiness-app",
    category: "Bussiness",
    title: "Disha Acroplast ",
    src: "/templates/disha.png",
    websiteUrl: "http://disha-acroplast.vercel.app/",
    emailSubject: "Task Management Template Inquiry",
    emailBody: "Hello, I'd like to learn more about the Task Management Suite template and its productivity features.",
    description:
      "Streamline your workflow with this comprehensive task management suite featuring project tracking, team collaboration, and productivity analytics.",
    templatePreview: {
      image: "/templates/disha.png",
      description:
        "Clean and intuitive task management interface with kanban boards, project timelines, and team collaboration features.",
      previewUrl: "http://disha-acroplast.vercel.app/",
    },
  },
  {
    id: "bussiness-website",
    category: "Manufaturer",
    title: "Parshwa Plastics",
    src: "/templates/parshwa.png",
    websiteUrl: "https://parshwaplastics.com",
    emailSubject: "E-commerce Template Inquiry",
    emailBody: "Hi, I'm interested in the Modern Online Store template for my business.",
    description:
      "Launch your online business with this feature-rich e-commerce template including payment processing, inventory management, and customer analytics.",
    templatePreview: {
      image:  "/templates/parshwa.png",
      description:
        "Professional e-commerce template with product galleries, shopping cart, checkout process, and mobile-responsive design.",
      previewUrl: "https://parshwaplastics.com",
    },
  },
  {
    id: "bussiness-website",
    category: "bussiness",
    title: "Paper Board",
    src: "/templates/paper.png",
    websiteUrl: "https://paperboard.net.in",
    emailSubject: "Portfolio Template Inquiry",
    emailBody: "Hello, I'd like to know more about the Creative Portfolio template for showcasing my work.",
    description:
      "Showcase your creative work with this stunning portfolio template featuring smooth animations, project galleries, and contact forms.",
    templatePreview: {
      image: "/templates/paper.png",
      description:
        "Elegant portfolio layout with image galleries, project showcases, and smooth scrolling animations perfect for creatives.",
      previewUrl:  "https://paperboard.net.in",
    },
  },
  {
    id: "bussines landing page",
    category: "manufacturer",
    title: "Print QC",
    src: "/templates/pqc.png",
    websiteUrl:" https://print-qc-55uv.vercel.app/",
    emailSubject: "PQC bussiness Landing Page Template Inquiry",
    emailBody: "Hi, I'm interested in the SaaS Landing Page template for my startup.",
    description:
      "Convert visitors into customers with this high-converting SaaS landing page featuring pricing tables, testimonials, and lead capture forms.",
    templatePreview: {
      image: "/templates/pqc.png",
      description:
        "High-converting landing page design with hero sections, pricing tables, testimonials, and call-to-action buttons optimized for SaaS products.",
      previewUrl:" https://print-qc-55uv.vercel.app/",
    },
  },
  {
    id: "e-commerce",
    category: "e-commerce",
    title: "SmileX ",
    src: "/templates/smilex.png",
    websiteUrl: "https://smilex.net.in",
    emailSubject: "Blog Platform Template Inquiry",
    emailBody: "Hello, I'd like to learn more about the Modern Blog Platform template.",
    description:
      "Share your thoughts with the world using this modern blog platform featuring rich text editing, social sharing, and SEO optimization.",
    templatePreview: {
      image:  "/templates/smilex.png",
      description:
        "Clean blog template with article layouts, reading progress indicators, and social sharing features for content creators.",
      previewUrl:  "https://smilex.net.in",
    },
  },
]
