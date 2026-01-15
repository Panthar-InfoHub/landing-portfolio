"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function WhyChooseSection() {
  const reasons = [
    {
      id: 1,
      title: "Expert Team",
      description: "Our team has 15+ years of combined digital marketing experience",
    },
    {
      id: 2,
      title: "Proven Results",
      description: "We've helped 250+ brands scale with measurable ROI",
    },
    {
      id: 3,
      title: "Custom Solutions",
      description: "Every strategy is tailored to your unique business needs",
    },
    {
      id: 4,
      title: "Transparent Reporting",
      description: "Monthly reports showing exactly what we're doing and the results",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Why Choose Link Lift</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-16 text-center">
            See how we help brands grow their digital presence
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Section */}
          <ScrollReveal delay={100}>
            <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Link Lift - Digital Marketing Success"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>

          {/* Reasons Section */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="p-6 rounded-xl bg-gradient-to-r from-primary-light/20 to-secondary-light/20 border border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-text-muted">{reason.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
