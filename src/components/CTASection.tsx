import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cadastro" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-hero-gradient rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-lime rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Pronto para lotar sua quadra?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Cadastre-se gratuitamente e comece a receber reservas hoje mesmo. Sem taxas de adesão.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime px-8 py-4 text-base font-bold text-primary hover:brightness-110 transition-all"
            >
              Começar agora — é grátis
              <ArrowRight size={18} />
            </a>
            <p className="text-primary-foreground/50 text-sm mt-4">
              Sem cartão de crédito • Cadastro em 10 minutos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
