import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Safety from '@/components/Safety';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <Features />
        <HowItWorks />
        <Safety />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
