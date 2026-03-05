import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Bell, CreditCard } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Cardápio digital",
    description: "Monte o cardápio da sua lanchonete direto no app com fotos, preços e categorias.",
  },
  {
    icon: ShoppingBag,
    title: "Pedidos pelo app",
    description: "O cliente que está assistindo o jogo faz o pedido pelo celular sem sair do lugar.",
  },
  {
    icon: Bell,
    title: "Aviso ao garçom",
    description: "O garçom recebe o pedido em tempo real e entrega direto na mesa do cliente.",
  },
  {
    icon: CreditCard,
    title: "Pagamento integrado",
    description: "O cliente paga pelo app. Sem filas, sem comanda perdida, sem erro de troco.",
  },
];

const SnackBarSection = () => {
  return (
    <section id="lanchonete" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Novidade
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
              Sua lanchonete também{" "}
              <span className="text-gradient">dentro do app</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Se sua quadra tem lanchonete, bar ou cantina, seus clientes podem
              pedir comidas e bebidas direto pelo celular. O garçom recebe o
              pedido e entrega na mesa — simples assim.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">
                      {f.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="w-72 rounded-3xl bg-hero-gradient p-6 shadow-2xl text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-wider text-lime mb-4">
                Pedido #247
              </p>

              {[
                { item: "Açaí 500ml", price: "R$ 18,00" },
                { item: "Água mineral", price: "R$ 4,00" },
                { item: "Porção de batata", price: "R$ 25,00" },
              ].map((order, i) => (
                <div
                  key={i}
                  className="flex justify-between py-3 border-b border-primary-foreground/15 text-sm"
                >
                  <span>{order.item}</span>
                  <span className="font-bold">{order.price}</span>
                </div>
              ))}

              <div className="flex justify-between pt-4 text-base font-extrabold">
                <span>Total</span>
                <span className="text-lime">R$ 47,00</span>
              </div>

              <div className="mt-6 bg-lime text-primary text-center py-3 rounded-xl font-bold text-sm">
                Garçom a caminho 🏃
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SnackBarSection;
