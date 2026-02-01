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
import { ScrollDemo } from "@/components/sections/scroll-demo";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Stats />
        <ScrollDemo />
        <WhySiteSolutions />
        <Services />
        <ResultsMeasurement />
        <MonthlyReportPreview />
        <CTABanner
          variant="subtle"
          title={t("ctaBanner1.title")}
          subtitle={t("ctaBanner1.subtitle")}
          primaryCTA={{ text: t("ctaBanner1.primaryCTA"), href: "/auditoria-48h" }}
          secondaryCTA={{ text: t("ctaBanner1.secondaryCTA"), href: "/portfolio" }}
        />
        <Pricing />
        <TrustGuarantees />
        <Process />
        <CaseStudies />
        <Testimonials />
        <CTABanner
          title={t("ctaBanner2.title")}
          subtitle={t("ctaBanner2.subtitle")}
          primaryCTA={{ text: t("ctaBanner2.primaryCTA"), href: "/auditoria-48h" }}
        />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
