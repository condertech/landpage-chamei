import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/hero-courts.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-lime text-sm font-semibold mb-6 border border-accent/30">
              Para donos de quadras
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Sua quadra sempre{" "}
              <span className="text-lime">lotada.</span>
              <br />
              Sem esforço.
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
              O Chamei conecta jogadores da região diretamente à sua quadra. Cadastre-se e comece a receber reservas automaticamente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime px-7 py-3.5 text-base font-bold text-primary hover:brightness-110 transition-all"
              >
                Cadastrar minha quadra
                <ArrowRight size={18} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-7 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all"
              >
                Como funciona
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Users, label: "+5.000", sub: "jogadores ativos" },
              { icon: CalendarCheck, label: "+12.000", sub: "reservas/mês" },
              { icon: TrendingUp, label: "40%", sub: "mais faturamento" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-primary-foreground/10">
                <stat.icon className="text-lime" size={22} />
                <div>
                  <p className="text-lg font-bold text-primary-foreground">{stat.label}</p>
                  <p className="text-xs text-primary-foreground/60">{stat.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
