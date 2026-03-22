import { motion } from "framer-motion";
import { TrendingUp, Users, CalendarCheck, Apple } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Sua quadra sempre <span className="text-lime">lotada.</span>
                <br />
                Sem esforço.
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-lg">
                O Chamei conecta jogadores da região diretamente à sua quadra.
                Cadastre-se e comece a receber reservas automaticamente.
              </p>
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
                <div
                  key={i}
                  className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-primary-foreground/10"
                >
                  <stat.icon className="text-lime" size={22} />
                  <div>
                    <p className="text-lg font-bold text-primary-foreground">
                      {stat.label}
                    </p>
                    <p className="text-xs text-primary-foreground/60">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center justify-center gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-2">
              BAIXE AGORA
            </h2>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-3.5 text-white hover:bg-black/90 transition-all min-w-[220px]"
            >
              <Apple size={32} />
              <div className="text-left">
                <p className="text-xs">Baixar na</p>
                <p className="text-lg font-semibold leading-tight">App Store</p>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-3.5 text-white hover:bg-black/90 transition-all min-w-[220px]"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <p className="text-xs">Disponível no</p>
                <p className="text-lg font-semibold leading-tight">
                  Google Play
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
