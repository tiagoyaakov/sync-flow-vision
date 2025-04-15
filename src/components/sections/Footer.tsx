
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a 
      href={href} 
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-semibold text-lg mb-4">{children}</h4>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-elohit-dark border-t border-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">
                Elohit <span className="text-gradient">Sync</span>
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Transformando processos empresariais com automação inteligente e IA aplicada para resultados reais.
            </p>
            <div className="flex space-x-4">
              <FooterLink href="#"><Facebook className="w-5 h-5" /></FooterLink>
              <FooterLink href="#"><Twitter className="w-5 h-5" /></FooterLink>
              <FooterLink href="#"><Instagram className="w-5 h-5" /></FooterLink>
              <FooterLink href="#"><Linkedin className="w-5 h-5" /></FooterLink>
              <FooterLink href="#"><Github className="w-5 h-5" /></FooterLink>
            </div>
          </div>
          
          <div>
            <FooterHeading>Serviços</FooterHeading>
            <ul className="space-y-3">
              <li><FooterLink href="#">Consultoria em Automação</FooterLink></li>
              <li><FooterLink href="#">Implementação de IA</FooterLink></li>
              <li><FooterLink href="#">Orquestração de Processos</FooterLink></li>
              <li><FooterLink href="#">Integração de APIs</FooterLink></li>
              <li><FooterLink href="#">Treinamento e Capacitação</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <FooterHeading>Recursos</FooterHeading>
            <ul className="space-y-3">
              <li><FooterLink href="#">Blog</FooterLink></li>
              <li><FooterLink href="#">Webinars</FooterLink></li>
              <li><FooterLink href="#">Estudos de Caso</FooterLink></li>
              <li><FooterLink href="#">Documentação</FooterLink></li>
              <li><FooterLink href="#">FAQ</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <FooterHeading>Contato</FooterHeading>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Av. Paulista, 1000, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <FooterLink href="mailto:contato@elohitsync.com.br">
                  contato@elohitsync.com.br
                </FooterLink>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <FooterLink href="tel:+551199999999">
                  +55 (11) 9999-9999
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted/30 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Elohit Sync. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <FooterLink href="#">Termos de Uso</FooterLink>
            <span className="text-muted-foreground">•</span>
            <FooterLink href="#">Política de Privacidade</FooterLink>
            <span className="text-muted-foreground">•</span>
            <FooterLink href="#">Cookies</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
