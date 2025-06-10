"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ScrollAnimation from "@/components/scroll-animation"

export default function FAQClientPage() {
  const [activeCategory, setActiveCategory] = useState("general")

  const categories = [
    { id: "general", name: "General" },
    { id: "websites", name: "Website Development" },
    { id: "apps", name: "App Development" },
    { id: "ads", name: "Ad Creation" },
    { id: "pricing", name: "Pricing & Payment" },
    { id: "support", name: "Support" },
  ]

  const faqs = {
    general: [
      {
        question: "What services does TRIVINSAI Digital offer?",
        answer:
          "TRIVINSAI Digital offers a comprehensive range of digital services including website development, app creation, and digital marketing/ad creation. We provide end-to-end solutions from concept to deployment and ongoing maintenance.",
      },
      {
        question: "How long has TRIVINSAI Digital been in business?",
        answer:
          "TRIVINSAI Digital was founded in 2015 and has been helping businesses transform their digital presence for over 8 years. During this time, we've worked with clients across various industries and built a strong portfolio of successful projects.",
      },
      {
        question: "Do you work with clients internationally?",
        answer:
          "Yes, we work with clients globally. Our team is equipped to handle projects across different time zones, and we use collaborative tools to ensure smooth communication regardless of location.",
      },
    ],
    websites: [
      {
        question: "What types of websites do you create?",
        answer:
          "We create all types of websites including business websites, e-commerce stores, blogs, portfolios, landing pages, and custom web applications. Our team is experienced in developing websites across various industries and for different purposes.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "The timeline for website development typically ranges from 4-12 weeks, depending on the complexity and scope of the project. Simple websites may take 4-6 weeks, while more complex sites with custom functionality can take 8-12 weeks or more.",
      },
      {
        question: "Do you provide website maintenance services?",
        answer:
          "Yes, we offer ongoing website maintenance services to ensure your site remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, and technical support.",
      },
    ],
    apps: [
      {
        question: "What platforms do you develop apps for?",
        answer:
          "We develop mobile applications for iOS (iPhone/iPad), Android, and cross-platform solutions using frameworks like React Native and Flutter. We can recommend the best approach based on your specific requirements and target audience.",
      },
      {
        question: "How much does app development cost?",
        answer:
          "App development costs vary widely depending on complexity, features, platforms, and design requirements. Simple apps may start around $15,000-$30,000, while more complex applications with advanced features can range from $50,000 to $250,000+. We provide detailed quotes after understanding your specific requirements.",
      },
      {
        question: "Do you help with app store submission?",
        answer:
          "Yes, we handle the entire app submission process for both Apple App Store and Google Play Store. This includes preparing all necessary assets, documentation, and ensuring your app meets the respective store guidelines.",
      },
    ],
    ads: [
      {
        question: "What types of digital marketing services do you offer?",
        answer:
          "Our digital marketing services include search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content marketing, email marketing, and conversion rate optimization. We also create visual ads and comprehensive marketing strategies.",
      },
      {
        question: "How do you measure the success of marketing campaigns?",
        answer:
          "We track key performance indicators (KPIs) relevant to your business goals, such as website traffic, conversion rates, lead generation, engagement metrics, and return on investment (ROI). We provide regular reports and analytics to show the performance of your campaigns.",
      },
      {
        question: "Do you offer ongoing marketing services or one-time campaigns?",
        answer:
          "We offer both ongoing marketing services and one-time campaigns, depending on your needs. For most clients, we recommend ongoing strategies as digital marketing typically yields the best results over time with consistent effort and optimization.",
      },
    ],
    pricing: [
      {
        question: "How do you structure your pricing?",
        answer:
          "We offer flexible pricing models including project-based pricing, hourly rates, and retainer agreements. The most appropriate model depends on your project scope, timeline, and specific requirements. We provide transparent quotes with no hidden fees.",
      },
      {
        question: "Do you require a deposit before starting work?",
        answer:
          "Yes, we typically require a 50% deposit before beginning work, with the remaining balance due upon project completion or according to agreed-upon milestones for larger projects. This helps us allocate resources and commit fully to your project.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, for larger projects we offer payment plans structured around project milestones. This allows you to spread the cost over the duration of the project while ensuring steady progress and delivery.",
      },
    ],
    support: [
      {
        question: "What kind of support do you provide after project completion?",
        answer:
          "After project completion, we offer various support options including warranty periods, maintenance packages, and on-demand support. Our goal is to ensure your digital assets continue to perform optimally and meet your evolving business needs.",
      },
      {
        question: "How quickly do you respond to support requests?",
        answer:
          "We aim to respond to all support requests within 24 hours during business days. For clients on maintenance plans, we offer priority support with faster response times and dedicated support channels.",
      },
      {
        question: "Do you provide training for using the website or app?",
        answer:
          "Yes, we provide comprehensive training for all our deliverables. This includes documentation, video tutorials, and live training sessions to ensure you and your team can effectively manage and utilize your new digital assets.",
      },
    ],
  }

  return (
<div className="pt-20 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 dark:from-[#1E293B] dark:via-[#334155] dark:to-[#1E293B] ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 dark:from-[#1E293B] dark:via-[#334155] dark:to-[#1E293B]  py-16 md:py-24   ">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl text-[#111827] dark:text-white md:text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground text-[#111827] dark:text-white   ">
                Find answers to common questions about our services, process, and more.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 dark:bg-[#111827] border-b">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="flex  flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={activeCategory === category.id ? "bg-primary dark:bg-[#6D819C] dark:hover:bg-[#1a385e] hover:bg-primary/90" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 dark:bg-[#111827] md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {categories.find((c) => c.id === activeCategory)?.name} FAQs
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-lg border border-border px-6"
                  >
                    <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 dark:bg-[#6D819C] md:py-24 ">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center text-[#111827] max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-[#111827] font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-[#111827] dark:text-white text-muted-foreground mb-8">
                Can't find the answer you're looking for? Contact our team for personalized assistance.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-secondary dark:hover:bg-[#274163] dark:bg-[#111827] hover:shadow-xl text-white">
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
