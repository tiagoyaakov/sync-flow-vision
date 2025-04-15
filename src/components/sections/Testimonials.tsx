
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { QuoteIcon } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

function Testimonial({ quote, author, role, company, metrics }: TestimonialProps) {
  return (
    <div className="rounded-lg border border-muted/30 bg-elohit-card-dark p-6 md:p-8 flex flex-col h-full card-shine">
      <QuoteIcon className="text-primary w-8 h-8 mb-4" />
      <p className="text-lg mb-6 flex-grow">{quote}</p>
      
      {metrics && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 border-t border-b border-muted/30 py-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-xl font-bold text-gradient">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      )}
      
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
          <span className="font-bold text-white">{author.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote: "A implementação da automação inteligente nos processos de análise de crédito reduziu nosso tempo de resposta de 3 dias para apenas 4 horas, com aumento de precisão.",
      author: "Ricardo Mendes",
      role: "CTO",
      company: "Banco Digital Prime",
      metrics: [
        { label: "Redução de tempo", value: "85%" },
        { label: "Aumento de precisão", value: "32%" },
        { label: "ROI em 6 meses", value: "410%" }
      ]
    },
    {
      quote: "Não imaginávamos que seria possível automatizar processos tão complexos com tanta eficiência. Nossa equipe agora dedica tempo a atividades que realmente importam.",
      author: "Camila Ferreira",
      role: "Diretora de Operações",
      company: "E-Shop Brasil",
      metrics: [
        { label: "Aumento em vendas", value: "27%" },
        { label: "Redução de custo", value: "41%" },
        { label: "Satisfação do cliente", value: "+65%" }
      ]
    },
    {
      quote: "A orquestração de processos com IA implementada pela Elohit transformou completamente nossa capacidade de escalar operações sem adicionar mais pessoal.",
      author: "Paulo Ribeiro",
      role: "CEO",
      company: "LogTech Soluções",
      metrics: [
        { label: "Economia mensal", value: "R$87k" },
        { label: "Processos otimizados", value: "18" },
        { label: "Tempo de implementação", value: "6 sem" }
      ]
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-elohit-purple/10 to-transparent"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <SectionHeading 
          title="O que nossos clientes dizem"
          subtitle="Resultados reais compartilhados por quem transformou seus negócios com nossas soluções"
          highlightWords={["resultados", "transformou"]}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              metrics={testimonial.metrics}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
