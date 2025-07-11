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
  id: "beauty-ecommerce",
  category: "E-commerce",
  title: "GlowUp Beauty Store",
  src: "/templates/luxe.png",
  websiteUrl: "https://beauty-cosmetics-ten.vercel.app/",
  emailSubject: "Beauty Store Template Inquiry",
  emailBody:
    "Hi, I'm interested in the Beauty E-commerce template and would like to know more about its features.",
  description:
    "A sleek and user-friendly beauty e-commerce platform designed to showcase cosmetics and skincare products with style. Includes product galleries, shopping cart, and seamless checkout.",
  templatePreview: {
    image: "/templates/luxe.png",
    description:
      "Modern e-commerce template with an elegant design, responsive product pages, and smooth shopping experience — perfect for beauty and cosmetic brands.",
    previewUrl: "https://beauty-cosmetics-ten.vercel.app/",
  }
},
 {
  id: "it-solutions-landing",
  category: "IT Solutions",
  title: "PixelNova Tech",
  src: "/templates/tech.png",
  websiteUrl: "https://pixelnova-tech-landing.vercel.app/",
  emailSubject: "IT Solutions Landing Page Inquiry",
  emailBody: "Hello, I'm interested in the IT Solutions landing page and would like to know more about its features and customization options.",
  description:
    "A modern and professional landing page for IT service providers, showcasing technology solutions, company expertise, and service offerings in a sleek layout.",
  templatePreview: {
    image: "/templates/tech.png",
    description:
      "Stylish and responsive IT services landing page featuring solution overviews, feature highlights, and client-focused design — ideal for tech startups and service companies.",
    previewUrl: "https://pixelnova-tech-landing.vercel.app/",
  }
},
 {
  id: "personal-portfolio",
  category: "Portfolio",
  title: "Creative Portfolio",
  src: "/templates/meport.png",
  websiteUrl: "https://portfolio1-olive-five.vercel.app/",
  emailSubject: "Portfolio Template Inquiry",
  emailBody: "Hi, I'm interested in the Portfolio template and would like to know more about its design and customization options.",
  description:
    "A clean and modern portfolio website to showcase your projects, skills, and professional background. Ideal for developers, designers, and creatives.",
  templatePreview: {
    image: "/templates/meport.png",
    description:
      "Sleek and minimal portfolio template featuring project galleries, smooth animations, and a responsive layout to highlight your personal brand.",
    previewUrl: "https://portfolio1-olive-five.vercel.app/",
  }
},

 {
  id: "travel-blog",
  category: "Blog",
  title: "Wanderlust Chronicles",
  src: "/templates/b1.png",
  websiteUrl: "https://travel-blog-lac-delta.vercel.app/",
  emailSubject: "Blog Template Inquiry",
  emailBody: "Hi, I'm interested in the Blog template and would like to know more about its features and layout options.",
  description:
    "A beautifully designed travel blog template for sharing stories, photos, and guides. Perfect for bloggers, storytellers, and digital nomads.",
  templatePreview: {
    image: "/templates/b1.png",
    description:
      "Modern blog layout with featured posts, image-rich articles, and responsive design — ideal for travel enthusiasts and content creators.",
    previewUrl: "https://travel-blog-lac-delta.vercel.app/",
  }
}
,
 {
  id: "blog-website",
  category: "Blog",
  title: "Travel Tales Blog",
  src: "/templates/b2.png",
  websiteUrl: "https://travel-blog2.vercel.app/",
  emailSubject: "Blog Template Inquiry",
  emailBody: "Hi, I'm interested in the Blog template and would like to learn more about its features and customization options.",
  description:
    "A modern and engaging blog template ideal for sharing travel experiences, personal stories, or niche content. Includes featured posts, categories, and a clean reading layout.",
  templatePreview: {
    image: "/templates/b2.png",
    description:
      "Stylish blog design with a focus on readability, featured articles, and mobile-responsive layout — perfect for bloggers and storytellers.",
    previewUrl: "https://travel-blog2.vercel.app/",
  }
}
,
{
  id: "portfolio-site",
  category: "Portfolio",
  title: "Creative Works Portfolio",
  src: "/templates/roha.png",
  websiteUrl: "https://portfolio2-gules-kappa.vercel.app/",
  emailSubject: "Portfolio Template Inquiry",
  emailBody: "Hello, I'm interested in the Portfolio template and would like to learn more about its layout and customization options.",
  description:
    "A stylish and minimal portfolio template ideal for showcasing personal projects, case studies, and professional experience. Perfect for designers, developers, and freelancers.",
  templatePreview: {
    image: "/templates/roha.png",
    description:
      "Elegant and responsive portfolio design with smooth scrolling, project showcases, and a modern layout that highlights your creative work.",
    previewUrl: "https://portfolio2-gules-kappa.vercel.app/",
  }
},

]
