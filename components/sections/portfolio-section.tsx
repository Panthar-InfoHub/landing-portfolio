"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      image: "/marketing-app-interface-with-dark-sidebar.jpg",
      title: "Marketing Platform",
      description: "Modern dashboard interface",
    },
    {
      id: 2,
      image: "/marketing-website-without-borders-design.jpg",
      title: "Marketing Campaign",
      description: "Brand expansion strategy",
    },
    {
      id: 3,
      image: "/dark-website-smarter-decisions-happy-customers.jpg",
      title: "Decision Portal",
      description: "Customer-focused design",
    },
    {
      id: 4,
      image: "/analytics-dashboard-isometric-illustration.jpg",
      title: "Analytics Dashboard",
      description: "Data visualization platform",
    },
    {
      id: 5,
      image: "/blue-website-headline-content-creator.jpg",
      title: "Content Hub",
      description: "Creator community platform",
    },
    {
      id: 6,
      image: "/portrait-photography-grid-mood-board-layout.jpg",
      title: "Photography Portfolio",
      description: "Visual storytelling showcase",
    },
  ]

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-sm font-semibold text-primary mb-2">OUR WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Work that moves the needle</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 50}>
              <div className="relative group overflow-hidden rounded-3xl aspect-square cursor-pointer">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
