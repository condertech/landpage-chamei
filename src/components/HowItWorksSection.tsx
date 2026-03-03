import { motion } from "framer-motion";
import { UserPlus, MapPin, CalendarCheck, DollarSign } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Cadastre sua quadra",
    description: "Preencha as informações da sua quadra: endereço, fotos, horários e preços.",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Apareça no mapa",
    description: "Jogadores da região encontram sua quadra pelo app quando buscam onde jogar.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Receba reservas",
    description: "O cliente reserva e paga direto pelo app. Você só confirma e recebe.",
  },
  {
    icon: DollarSign,
    step: "04",
    title: "Fature mais",
    description: "Acompanhe tudo pelo painel e veja seu faturamento crescer mês a mês.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Passo a passo</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Como funciona?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Simples, rápido e sem burocracia. Em 4 passos sua quadra está pronta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-5 flex items-center justify-center">
                <step.icon className="text-primary-foreground" size={28} />
              </div>
              <span className="text-5xl font-extrabold text-border absolute -top-2 right-1/4 select-none">{step.step}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
