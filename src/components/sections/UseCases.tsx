
import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';
import { 
  Building2, 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  Scale, 
  Factory,
  ArrowRight
} from 'lucide-react';
import { ButtonGradient } from '../ui/button-gradient';

interface UseCaseProps {
  icon: React.ElementType;
  title: string;
  items: string[];
  active: boolean;
  onClick: () => void;
}

function UseCase({ icon: Icon, title, items, active, onClick }: UseCaseProps) {
  return (
    <div 
      className={cn(
        "cursor-pointer rounded-lg p-6 transition-all duration-300",
        active ? "bg-gradient-primary" : "bg-elohit-card-dark border border-muted/30 hover:border-primary/50"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          active ? "bg-white/20" : "bg-muted/30"
        )}>
          <Icon className={cn("w-6 h-6", active ? "text-white" : "text-primary")} />
        </div>
        <h3 className={cn("text-xl font-semibold", active ? "text-white" : "text-foreground")}>{title}</h3>
      </div>
      
      {active && (
        <div className="mt-4 space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-white/70">•</span>
              <p className="text-white/90">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function UseCases() {
  const [activeCase, setActiveCase] = useState(0);
  
  const cases = [
    {
      icon: Building2,
      title: "Serviços Financeiros",
      items: [
        "Automação de análise de crédito com IA",
        "Processamento inteligente de documentos",
        "Chatbots especializados para atendimento financeiro",
        "Detecção de fraudes com aprendizado de máquina"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Varejo e E-commerce",
      items: [
        "Recomendações personalizadas de produtos",
        "Atendimento automático multicanal",
        "Previsão de demanda e gestão de estoque",
        "Automação de marketing com triggers comportamentais"
      ]
    },
    {
      icon: Stethoscope,
      title: "Saúde",
      items: [
        "Análise automática de exames e laudos",
        "Agendamento inteligente de consultas",
        "Monitoramento remoto de pacientes",
        "Triagem por IA para priorização de atendimentos"
      ]
    },
    {
      icon: GraduationCap,
      title: "Educação",
      items: [
        "Plataformas adaptativas de aprendizado",
        "Correção automática de atividades",
        "Assistentes virtuais para dúvidas de estudantes",
        "Personalização de conteúdo educacional"
      ]
    },
    {
      icon: Scale,
      title: "Jurídico",
      items: [
        "Análise automática de contratos e documentos",
        "Pesquisa jurídica assistida por IA",
        "Automação de petições e documentos padrão",
        "Previsão de resultados de processos com base em histórico"
      ]
    },
    {
      icon: Factory,
      title: "Indústria",
      items: [
        "Manutenção preditiva com IoT e IA",
        "Otimização de linhas de produção",
        "Controle de qualidade automatizado",
        "Gestão inteligente da cadeia de suprimentos"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-dark relative">
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title="Aplicações por Segmento"
          subtitle="Nossas soluções são adaptadas para as necessidades específicas de cada setor"
          highlightWords={["Segmento"]}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cases.map((useCase, index) => (
            <UseCase 
              key={index}
              icon={useCase.icon as React.ElementType}
              title={useCase.title}
              items={useCase.items}
              active={activeCase === index}
              onClick={() => setActiveCase(index)}
            />
          ))}
        </div>
        
        <div className="flex justify-center">
          <ButtonGradient variant="outline">
            <span className="flex items-center gap-2">
              Ver todos os casos de uso <ArrowRight className="w-4 h-4" />
            </span>
          </ButtonGradient>
        </div>
      </div>
    </section>
  );
}
