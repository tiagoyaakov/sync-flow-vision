
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { Benefits } from '@/components/sections/Benefits';
import { UseCases } from '@/components/sections/UseCases';
import { Testimonials } from '@/components/sections/Testimonials';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { CallToAction } from '@/components/sections/CallToAction';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Benefits />
        <UseCases />
        <Testimonials />
        <Services />
        <Process />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
