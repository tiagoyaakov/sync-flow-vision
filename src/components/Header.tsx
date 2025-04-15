
import React, { useState, useEffect } from 'react';
import { ButtonGradient } from './ui/button-gradient';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className={cn(
        "text-foreground hover:text-primary transition-colors font-medium",
        className
      )}
    >
      {children}
    </a>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-elohit-dark/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
    )}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Text */}
          <div className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/fbJtsWhv/LOGO-ELOHIT-500x500-2.png" 
              alt="Elohit Sync Logo" 
              className="h-16 w-auto"
            />
            <h1 className="text-2xl font-bold hidden md:block">
              Elohit <span className="text-gradient">Sync</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#">Soluções</NavLink>
            <NavLink href="#">Serviços</NavLink>
            <NavLink href="#">Casos de Uso</NavLink>
            <NavLink href="#">Sobre Nós</NavLink>
            <NavLink href="#">Blog</NavLink>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <ButtonGradient>Fale Conosco</ButtonGradient>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-muted/30">
            <div className="flex flex-col space-y-4">
              <NavLink href="#" className="py-2">Soluções</NavLink>
              <NavLink href="#" className="py-2">Serviços</NavLink>
              <NavLink href="#" className="py-2">Casos de Uso</NavLink>
              <NavLink href="#" className="py-2">Sobre Nós</NavLink>
              <NavLink href="#" className="py-2">Blog</NavLink>
              <ButtonGradient className="mt-2">Fale Conosco</ButtonGradient>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
