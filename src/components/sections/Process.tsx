
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { 
  Search, 
  PenTool, 
  Code, 
  BarChart, 
  Zap,
  Repeat
} from 'lucide-react';

interface ProcessStepProps {
  icon: React.ElementType;
  title: string;
  description: string;
  step: number;
  isLast?: boolean;
}

function ProcessStep({ icon: Icon, title, description, step, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center z-10">
          <Icon className="w-6 h-6 text-white" />
        </div>
        {!isLast && (
          <div className="w-1 flex-grow bg-gradient-to-b from-elohit-purple to-elohit-pink h-full min-h-[80px] my-2"></div>
        )}
      </div>
      
      <div className="pt-2 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-primary bg-muted/20 px-2 py-0.5 rounded-full">
            Etapa {step}
          </span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Diagnóstico",
      description: "Avaliamos seus processos atuais, identificamos gargalos e oportunidades de automação com potencial de alto impacto."
    },
    {
      icon: PenTool,
      title: "Design da Solução",
      description: "Desenhamos a arquitetura da solução, selecionando as tecnologias e abordagens mais adequadas para seus objetivos."
    },
    {
      icon: Code,
      title: "Implementação",
      description: "Desenvolvemos e integramos a solução, garantindo perfeita harmonia com seus sistemas e processos existentes."
    },
    {
      icon: Zap,
      title: "Ativação",
      description: "Realizamos o go-live com acompanhamento intensivo para garantir a transição suave e capacitação da sua equipe."
    },
    {
      icon: BarChart,
      title: "Monitoramento",
      description: "Acompanhamos os indicadores de desempenho para avaliar resultados e identificar oportunidades de otimização."
    },
    {
      icon: Repeat,
      title: "Evolução Contínua",
      description: "Implementamos melhorias constantes baseadas em dados e feedback para maximizar o retorno sobre o investimento."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title="Nosso Processo"
          subtitle="Metodologia estruturada para garantir implementações bem-sucedidas com resultados mensuráveis"
          highlightWords={["Processo"]}
        />
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              icon={step.icon as React.ElementType}
              title={step.title}
              description={step.description}
              step={index + 1}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
