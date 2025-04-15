
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { CardFeature } from '@/components/ui/card-feature';
import { Clock, DollarSign, LineChart, ShieldCheck, Zap, Users } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Reduza em até 70% o tempo gasto em tarefas operacionais repetitivas, liberando sua equipe para atividades estratégicas."
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Diminua custos operacionais em até 40% automatizando processos que antes exigiam intervenção manual constante."
    },
    {
      icon: LineChart,
      title: "Aumento de Produtividade",
      description: "Potencialize a produtividade com fluxos de trabalho otimizados e decisões baseadas em dados em tempo real."
    },
    {
      icon: ShieldCheck,
      title: "Maior Precisão",
      description: "Elimine erros humanos em processos críticos com automações precisas e consistentes em todas as execuções."
    },
    {
      icon: Zap,
      title: "Escalabilidade",
      description: "Cresça sem aumentar proporcionalmente seus custos operacionais graças à eficiência das automações inteligentes."
    },
    {
      icon: Users,
      title: "Experiência Aprimorada",
      description: "Ofereça respostas mais rápidas e processos mais fluidos tanto para clientes quanto para colaboradores."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-elohit-purple/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-elohit-pink/10 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <SectionHeading 
          title="Benefícios da Automação Inteligente"
          subtitle="Nossa abordagem focada em resultados mensuráveis garante retorno sobre o investimento desde as primeiras implementações"
          highlightWords={["Benefícios", "Inteligente"]}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <CardFeature 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
