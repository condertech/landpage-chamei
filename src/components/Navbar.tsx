import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoChamei from "@/assets/logo-chamei.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <img src={logoChamei} alt="Chamei" className="h-10 rounded-md" />

        <div className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Benefícios</a>
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Como Funciona</a>
          <a href="#depoimentos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Depoimentos</a>
          <a href="#cadastro" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-forest-light transition-colors">
            Cadastrar Quadra
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border px-4 pb-4 flex flex-col gap-3"
        >
          <a href="#beneficios" className="text-sm font-medium text-muted-foreground py-2">Benefícios</a>
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground py-2">Como Funciona</a>
          <a href="#depoimentos" className="text-sm font-medium text-muted-foreground py-2">Depoimentos</a>
          <a href="#cadastro" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Cadastrar Quadra
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
