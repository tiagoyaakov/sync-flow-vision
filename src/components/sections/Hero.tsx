
import React from 'react';
import { Loader2, Aperture, ChartLine, Cpu } from 'lucide-react';
import { ButtonGradient } from '@/components/ui/button-gradient';

export function Hero() {
  const partnerLogos = [
    { src: "https://i.postimg.cc/bJ7J01WG/open-Ai-Logo-Branco-Png.png", alt: "OpenAI", delay: "0s" },
    { src: "https://i.postimg.cc/J7XtrdHj/n8nlogopng.png", alt: "N8N", delay: "0.5s" },
    { src: "https://i.postimg.cc/G25DWBNr/gemini-Logo-Png.png", alt: "Gemini", delay: "1s" },
    { src: "https://i.postimg.cc/xdkNKj84/claude-Ai-Logo-Png.png", alt: "Claude", delay: "1.5s" },
    { src: "https://i.postimg.cc/ZKVW2vyQ/cursor-Ai-Logo-Png.png", alt: "Cursor AI", delay: "2s" },
    { src: "https://i.postimg.cc/hG7hXC3F/supabase-Logo-Png.png", alt: "Supabase", delay: "2.5s" },
  ];

  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-elohit-purple/20 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-elohit-pink/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Floating Partner Logos */}
      <div className="absolute inset-0 z-0 pointer-events-none max-w-4xl mx-auto">
        {partnerLogos.map((logo, index) => (
          <div
            key={logo.alt}
            className="absolute w-12 h-12 animate-float opacity-70 hover:opacity-100 transition-opacity"
            style={{
              top: `${20 + (index * 8)}%`,
              left: `${5 + (index * 12)}%`,
              animationDelay: logo.delay,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-[15%] w-16 h-16 animate-float" style={{ animationDelay: '0.5s' }}>
        <Aperture size={64} className="text-elohit-pink/70" />
      </div>
      <div className="absolute bottom-1/4 left-[10%] w-12 h-12 animate-float" style={{ animationDelay: '1.5s' }}>
        <ChartLine size={48} className="text-elohit-purple/70" />
      </div>
      <div className="absolute top-1/3 left-[25%] w-10 h-10 animate-float" style={{ animationDelay: '1s' }}>
        <Cpu size={40} className="text-primary/70" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aprenda, implemente e evolua com <span className="text-gradient">automações</span> de verdade
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            Transforme processos complexos em fluxos inteligentes com nossa plataforma de IA focada em resultados práticos para seu negócio
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <ButtonGradient size="lg">
              Começar agora
            </ButtonGradient>
            <ButtonGradient variant="outline" size="lg">
              Ver demonstração
            </ButtonGradient>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative rounded-lg border border-muted/30 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-elohit-purple/20 to-elohit-pink/20 mix-blend-overlay"></div>
              <img 
                src="/placeholder.svg" 
                alt="Elohit Sync - Plataforma de automação inteligente" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elohit-dark via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center px-4 py-2 bg-elohit-purple/90 rounded-full">
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              <span className="text-sm font-medium">Automação em execução</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
