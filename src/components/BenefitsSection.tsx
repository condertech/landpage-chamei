import { motion } from "framer-motion";
import { Calendar, BarChart3, Smartphone, Clock, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Agenda automática",
    description: "Receba reservas 24h por dia sem precisar atender ligações ou mensagens.",
  },
  {
    icon: BarChart3,
    title: "Painel de gestão",
    description: "Acompanhe receitas, ocupação e métricas da sua quadra em tempo real.",
  },
  {
    icon: Smartphone,
    title: "Visibilidade na região",
    description: "Apareça para milhares de jogadores buscando quadras perto de você.",
  },
  {
    icon: Clock,
    title: "Reduza horários ociosos",
    description: "Preencha horários vazios com promoções inteligentes e automáticas.",
  },
  {
    icon: Shield,
    title: "Pagamento garantido",
    description: "Receba antecipado com segurança. Sem calotes, sem preocupação.",
  },
  {
    icon: Zap,
    title: "Cadastro rápido",
    description: "Em menos de 10 minutos sua quadra já está disponível para reservas.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-sage-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Benefícios</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Por que cadastrar sua quadra no <span className="text-gradient">Chamei</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo que você precisa para lotar sua quadra e simplificar sua gestão em um só lugar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
