import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import ProductShowcase from '@/components/landing/ProductShowcase';
import Stats from '@/components/landing/Stats';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import CTA from '@/components/landing/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <ProductShowcase />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
