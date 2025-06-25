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
    title: string
    description: string
    features: string[]
    demoUrl?: string
    githubUrl?: string
  }
  isTemplateCard?: boolean
}

export const cardsData: CardData[] = [
  {
    id: "ai-dashboard",
    category: "Artificial Intelligence",
    title: "AI Analytics Dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    websiteUrl: "https://openai.com",
    emailSubject: "AI Dashboard Template Inquiry",
    emailBody:
      "Hi, I'm interested in the AI Analytics Dashboard template and would like to know more about its features.",
    description:
      "A comprehensive AI-powered analytics dashboard that provides real-time insights, predictive analytics, and machine learning visualizations for data-driven decision making.",
    templatePreview: {
      title: "AI Analytics Dashboard Template",
      description:
        "Modern dashboard with AI-powered insights, real-time data visualization, and predictive analytics capabilities.",
      features: [
        "Real-time data visualization",
        "Machine learning predictions",
        "Customizable widgets",
        "Dark/Light mode support",
        "Responsive design",
        "Export functionality",
      ],
      demoUrl: "https://ai-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/example/ai-dashboard",
    },
  },
  {
    id: "productivity-app",
    category: "Productivity",
    title: "Task Management Suite",
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2039&auto=format&fit=crop",
    websiteUrl: "https://notion.so",
    emailSubject: "Task Management Template Inquiry",
    emailBody: "Hello, I'd like to learn more about the Task Management Suite template and its productivity features.",
    description:
      "Streamline your workflow with this comprehensive task management suite featuring project tracking, team collaboration, and productivity analytics.",
    templatePreview: {
      title: "Task Management Suite Template",
      description:
        "Complete productivity solution with task tracking, team collaboration, and project management features.",
      features: [
        "Kanban board interface",
        "Team collaboration tools",
        "Time tracking",
        "Project analytics",
        "Calendar integration",
        "Mobile responsive",
      ],
      demoUrl: "https://task-manager-demo.vercel.app",
      githubUrl: "https://github.com/example/task-manager",
    },
  },
  {
    id: "ecommerce-store",
    category: "E-commerce",
    title: "Modern Online Store",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
    websiteUrl: "https://shopify.com",
    emailSubject: "E-commerce Template Inquiry",
    emailBody: "Hi, I'm interested in the Modern Online Store template for my business.",
    description:
      "Launch your online business with this feature-rich e-commerce template including payment processing, inventory management, and customer analytics.",
    templatePreview: {
      title: "Modern E-commerce Store Template",
      description: "Full-featured online store with payment integration, inventory management, and customer dashboard.",
      features: [
        "Product catalog",
        "Shopping cart & checkout",
        "Payment integration",
        "Order management",
        "Customer accounts",
        "Admin dashboard",
      ],
      demoUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/example/ecommerce-store",
    },
  },
  {
    id: "portfolio-website",
    category: "Portfolio",
    title: "Creative Portfolio",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    websiteUrl: "https://behance.net",
    emailSubject: "Portfolio Template Inquiry",
    emailBody: "Hello, I'd like to know more about the Creative Portfolio template for showcasing my work.",
    description:
      "Showcase your creative work with this stunning portfolio template featuring smooth animations, project galleries, and contact forms.",
    templatePreview: {
      title: "Creative Portfolio Template",
      description: "Elegant portfolio website to showcase your creative work with smooth animations and modern design.",
      features: [
        "Project galleries",
        "Smooth animations",
        "Contact forms",
        "Blog integration",
        "SEO optimized",
        "Fast loading",
      ],
      demoUrl: "https://portfolio-demo.vercel.app",
      githubUrl: "https://github.com/example/creative-portfolio",
    },
  },
  {
    id: "saas-landing",
    category: "SaaS",
    title: "SaaS Landing Page",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    websiteUrl: "https://stripe.com",
    emailSubject: "SaaS Landing Page Template Inquiry",
    emailBody: "Hi, I'm interested in the SaaS Landing Page template for my startup.",
    description:
      "Convert visitors into customers with this high-converting SaaS landing page featuring pricing tables, testimonials, and lead capture forms.",
    templatePreview: {
      title: "SaaS Landing Page Template",
      description:
        "High-converting landing page designed specifically for SaaS products with pricing, testimonials, and CTAs.",
      features: [
        "Hero section with CTA",
        "Pricing tables",
        "Customer testimonials",
        "Feature highlights",
        "Lead capture forms",
        "Analytics integration",
      ],
      demoUrl: "https://saas-landing-demo.vercel.app",
      githubUrl: "https://github.com/example/saas-landing",
    },
  },
  {
    id: "blog-platform",
    category: "Blog",
    title: "Modern Blog Platform",
    src: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?q=80&w=2072&auto=format&fit=crop",
    websiteUrl: "https://medium.com",
    emailSubject: "Blog Platform Template Inquiry",
    emailBody: "Hello, I'd like to learn more about the Modern Blog Platform template.",
    description:
      "Share your thoughts with the world using this modern blog platform featuring rich text editing, social sharing, and SEO optimization.",
    templatePreview: {
      title: "Modern Blog Platform Template",
      description: "Feature-rich blogging platform with content management, social sharing, and SEO optimization.",
      features: [
        "Rich text editor",
        "Content management",
        "Social sharing",
        "SEO optimization",
        "Comment system",
        "Newsletter signup",
      ],
      demoUrl: "https://blog-demo.vercel.app",
      githubUrl: "https://github.com/example/blog-platform",
    },
  },
]
