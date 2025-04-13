import Hero from "@/app/(site)/_components/home/_hero/page";
import WhatWeDo from "./_components/home/_what-we-do/page";
import WhyTrustScan from "./_components/home/_why-trust-scan/page";
import HowItWorks from "./_components/home/_how-it-works/page";
import { Suspense } from "react";
import OptimizeReport from "./_components/home/_optimize-report/page";
import Pricing from "./_components/home/_pricing/page";
import WhatOurClientSays from "./_components/home/_what-our-client-says/page";
import Footer from "./_components/home/_footer/page";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <WhatWeDo />
        <WhyTrustScan />
        <HowItWorks />
        <Pricing />
        <WhatOurClientSays />
        <OptimizeReport />
        <Footer />
      </Suspense>
    </main>
  );
}
