import { motion } from "framer-motion";
import { Apple } from "lucide-react";

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
              Cadastre-se gratuitamente e comece a receber reservas hoje mesmo.
              Sem taxas de adesão.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-3.5 text-white hover:bg-black/90 transition-all min-w-[200px]"
              >
                <Apple size={32} />
                <div className="text-left">
                  <p className="text-xs">Baixar na</p>
                  <p className="text-lg font-semibold leading-tight">
                    App Store
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-3.5 text-white hover:bg-black/90 transition-all min-w-[200px]"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs">Disponível no</p>
                  <p className="text-lg font-semibold leading-tight">
                    Google Play
                  </p>
                </div>
              </a>
            </div>

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
