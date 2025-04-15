
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Bot, Braces, Zap, LucideIcon, Network, Workflow, Brain } from 'lucide-react';

interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureBlock({ icon: Icon, title, description }: FeatureBlockProps) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-lg border border-muted/30 bg-elohit-card-dark hover-scale card-shine">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-primary">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function WhatWeDo() {
  const features = [
    {
      icon: Bot,
      title: "Automação via IA Generativa",
      description: "Implementamos soluções baseadas em GPT-4 e outros modelos para automatizar tarefas cognitivas e decisórias."
    },
    {
      icon: Workflow,
      title: "Fluxos de Trabalho Inteligentes",
      description: "Criamos workflows que conectam diferentes sistemas e aplicações em processos coesos e eficientes."
    },
    {
      icon: Braces,
      title: "Integração com APIs",
      description: "Desenvolvemos integrações robustas entre seus sistemas existentes e novas tecnologias de IA."
    },
    {
      icon: Network,
      title: "Orquestração com n8n",
      description: "Utilizamos a plataforma n8n para criar, monitorar e gerenciar automações complexas sem código."
    },
    {
      icon: Brain,
      title: "Processamento de Linguagem Natural",
      description: "Implementamos soluções que compreendem textos, e-mails e documentos para extrair informações valiosas."
    },
    {
      icon: Zap,
      title: "RPA (Automação Robótica)",
      description: "Automatizamos processos repetitivos com robôs que simulam ações humanas em interfaces digitais."
    }
  ];

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title="O que fazemos na prática"
          subtitle="Convertemos complexidade tecnológica em soluções práticas que transformam a operação do seu negócio"
          highlightWords={["prática"]}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureBlock 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
