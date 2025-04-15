
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Check, ArrowRight } from 'lucide-react';
import { ButtonGradient } from '../ui/button-gradient';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
}

function ServiceCard({ title, description, features, popular = false }: ServiceCardProps) {
  return (
    <div className={`rounded-lg border ${popular ? 'border-primary' : 'border-muted/30'} relative bg-elohit-card-dark overflow-hidden hover-scale card-shine`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-primary text-white px-4 py-1 text-xs font-medium rounded-bl-lg">
          Mais popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <ButtonGradient variant={popular ? "default" : "outline"} className="w-full">
          <span className="flex items-center justify-center gap-2">
            Saiba mais <ArrowRight className="w-4 h-4" />
          </span>
        </ButtonGradient>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      title: "Consultoria em Automação",
      description: "Análise completa de processos e oportunidades de automação",
      features: [
        "Mapeamento de processos existentes",
        "Identificação de gargalos e ineficiências",
        "Recomendações personalizadas",
        "Roadmap de implementação"
      ]
    },
    {
      title: "Implementação de IA",
      description: "Desenvolvimento e implantação de soluções com inteligência artificial",
      features: [
        "Criação de modelos customizados",
        "Integração com sistemas existentes",
        "Treinamento específico para seu negócio",
        "Monitoramento de performance"
      ],
      popular: true
    },
    {
      title: "Orquestração de Processos",
      description: "Fluxos automatizados conectando todos os seus sistemas",
      features: [
        "Desenvolvimento em plataforma n8n",
        "Webhooks e integrações via API",
        "Dashboards de monitoramento",
        "Alertas e notificações inteligentes"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-dark relative">
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title="Nossos Serviços"
          subtitle="Oferecemos soluções completas que cobrem desde o diagnóstico até a implementação e monitoramento"
          highlightWords={["Serviços"]}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              popular={service.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
