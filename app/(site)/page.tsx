import Hero from "@/app/(site)/_components/home/_hero/page";
import WhatWeDo from "./_components/home/_what-we-do/page";
import WhyTrustScan from "./_components/home/_why-trust-scan/page";
import HowItWorks from "./_components/home/_how-it-works/page";
import { Suspense } from "react";
import OptimizeReport from "./_components/home/_optimize-report/page";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <WhatWeDo />
        <WhyTrustScan />
        <HowItWorks />
        <OptimizeReport />
      </Suspense>
    </main>
  );
}
