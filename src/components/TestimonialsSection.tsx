import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Dono de 3 quadras • São Paulo",
    text: "Depois do Chamei, parei de perder tempo com WhatsApp. Minhas reservas aumentaram 60% no primeiro mês.",
    stars: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Gestora de complexo esportivo • BH",
    text: "O painel de gestão é incrível. Consigo ver tudo em tempo real e os pagamentos caem direto na conta.",
    stars: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Dono de quadra • Rio de Janeiro",
    text: "Tinha horários ociosos demais. Com as promoções automáticas do Chamei, quase não tenho mais horário vazio.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-sage-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Quem usa, <span className="text-gradient">recomenda</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="fill-lime text-lime" size={18} />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
