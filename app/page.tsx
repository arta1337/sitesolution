import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { Stats } from "@/components/sections/stats";
import { WhySiteSolutions } from "@/components/sections/why-sitesolutions";
import { Services } from "@/components/sections/services";
import { ResultsMeasurement } from "@/components/sections/results-measurement";
import { MonthlyReportPreview } from "@/components/sections/monthly-report-preview";
import { Pricing } from "@/components/sections/pricing";
import { TrustGuarantees } from "@/components/sections/trust-guarantees";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { CTABanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Stats />
        <WhySiteSolutions />
        <Services />
        <ResultsMeasurement />
        <MonthlyReportPreview />
        <CTABanner
          variant="subtle"
          title="Precisa de um site novo ou de uma reformulação?"
          subtitle="Criamos websites modernos, rápidos e otimizados para conversão."
          primaryCTA={{ text: "Auditoria 48h", href: "/auditoria-48h" }}
          secondaryCTA={{ text: "Ver portfólio", href: "/portfolio" }}
        />
        <Pricing />
        <TrustGuarantees />
        <Process />
        <CaseStudies />
        <Testimonials />
        <CTABanner
          title="Pronto para ter um site sem preocupações?"
          subtitle="Peça uma auditoria gratuita e descubra como podemos ajudar o seu negócio a crescer online."
          primaryCTA={{ text: "Auditoria 48h", href: "/auditoria-48h" }}
          secondaryCTA={{ text: "Contacto rápido", href: "/auditoria-48h#contacto" }}
        />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
