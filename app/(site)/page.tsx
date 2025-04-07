import Hero from "@/app/(site)/_components/home/_hero/page";
import WhatWeDo from "./_components/home/_what-we-do/page";
import WhyTrustScan from "./_components/home/_why-trust-scan/page";
import HowItWorks from "./_components/home/_how-it-works/page";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <WhatWeDo />
        <WhyTrustScan />
        <HowItWorks />
      </Suspense>
    </main>
  );
}
