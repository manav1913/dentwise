import HowItWorks from "@/components/landing/HowItWorks";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhatToAsk from "@/components/landing/WhatToAsk";
import PricingSection from "@/components/landing/PricingSection";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser()

  if (user) redirect("/dashboard")
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <WhatToAsk />
        <section id="pricing">
          <PricingSection />
        </section>
        <CTA />
        <section id="about">
          <Footer />
        </section>
      </div>
    </>
  );
}
