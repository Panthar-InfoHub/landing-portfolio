import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TrustedBrandsSection } from "@/components/sections/trusted-brands-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FaqSection } from "@/components/sections/faq-section"
import { WhyChooseSection } from "@/components/sections/why-choose-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FounderSection } from "@/components/sections/founder-section"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <HeroSection />
        <SolutionsSection />
        <PortfolioSection />
        <TrustedBrandsSection />
        <ServicesSection />
        {/* <AchievementsSection /> */}
        <WhyChooseSection />
        <FounderSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
