import { motion } from "framer-motion";
import { ChevronDown, Home } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona o Chamei?",
      answer:
        "O Chamei é uma plataforma que conecta donos de quadras esportivas com jogadores da região. Você cadastra sua quadra gratuitamente, define horários e preços, e os jogadores podem visualizar e reservar diretamente pelo app. Você recebe notificações em tempo real e gerencia tudo de forma centralizada.",
    },
    {
      question: "Quanto custa para usar o Chamei?",
      answer:
        "O cadastro é totalmente gratuito e não há mensalidades. Cobramos apenas uma pequena taxa de serviço sobre cada reserva confirmada através da plataforma. Dessa forma, você só paga quando sua quadra está gerando receita. Não há custos fixos ou surpresas.",
    },
    {
      question: "Como recebo o pagamento das reservas?",
      answer:
        "Você tem duas opções: pode receber o pagamento diretamente do jogador no momento da utilização (dinheiro, PIX, cartão) ou utilizar nosso sistema de pagamento integrado, onde o jogador paga antecipadamente pelo app e você recebe os valores semanalmente na sua conta. Com o pagamento pela plataforma, você garante a reserva e reduz inadimplência.",
    },
    {
      question: "Preciso de equipamentos especiais?",
      answer:
        "Não! Você só precisa de um smartphone ou computador com acesso à internet. Todo o gerenciamento é feito através do nosso aplicativo ou painel web, sem necessidade de equipamentos adicionais.",
    },
    {
      question: "Posso cancelar ou alterar horários disponíveis?",
      answer:
        "Sim, você tem controle total sobre sua agenda. Pode bloquear horários, alterar preços, cancelar reservas (com aviso prévio aos jogadores) e fazer ajustes sempre que necessário através do painel de controle.",
    },
    {
      question: "E se houver um problema com a reserva?",
      answer:
        "Nossa equipe de suporte está disponível para mediar qualquer questão entre você e os jogadores. Oferecemos suporte via chat, e-mail e telefone durante horário comercial. Casos de não comparecimento ou problemas podem ser reportados no app.",
    },
    {
      question: "Quantas quadras posso cadastrar?",
      answer:
        "Você pode cadastrar quantas quadras quiser sem limite. Cada quadra é gerenciada individualmente com seus próprios horários, preços e configurações.",
    },
    {
      question: "Os jogadores podem avaliar minha quadra?",
      answer:
        "Sim, o sistema de avaliações ajuda a construir sua reputação. Jogadores podem deixar comentários e notas após utilizarem sua quadra. Isso aumenta a confiança de novos clientes e ajuda você a melhorar seus serviços.",
    },
    {
      question: "Como funciona o sistema de notificações?",
      answer:
        "Você recebe notificações push no celular sempre que houver uma nova reserva, cancelamento ou mensagem de um jogador. Pode personalizar quais notificações deseja receber nas configurações do app.",
    },
    {
      question: "Qual é a taxa de serviço cobrada?",
      answer:
        "A taxa de serviço é aplicada apenas sobre reservas confirmadas e varia entre 8% e 12%, dependendo do volume mensal de reservas. Quanto mais sua quadra é utilizada, menor a taxa. Essa taxa cobre toda a tecnologia, suporte, divulgação e processamento de pagamentos quando utilizados. Não há custos ocultos.",
    },
    {
      question: "Posso oferecer descontos ou promoções?",
      answer:
        "Sim! Você pode criar promoções especiais, descontos para horários específicos, pacotes de mensalidades ou ofertas para grupos. Tudo isso é configurável no painel de administração.",
    },
    {
      question: "O que acontece se eu quiser parar de usar o Chamei?",
      answer:
        "Você pode desativar seu cadastro a qualquer momento, sem multas ou burocracias. Seus dados serão mantidos por segurança conforme a LGPD, mas você pode solicitar a exclusão completa se desejar.",
    },
    {
      question: "Há suporte para esportes específicos?",
      answer:
        "Sim! O Chamei suporta diversos tipos de quadras: futebol, futsal, society, vôlei, basquete, tênis, beach tennis, paddle e outros. Você pode especificar o tipo de esporte e características da sua quadra.",
    },
    {
      question: "Como é feita a divulgação da minha quadra?",
      answer:
        "Sua quadra aparece automaticamente no app para todos os jogadores da sua região. Quanto mais completo o cadastro (com fotos, descrição e avaliações positivas), maior a visibilidade. Também enviamos notificações de quadras próximas para usuários ativos.",
    },
    {
      question: "Posso integrar com outros sistemas?",
      answer:
        "Estamos desenvolvendo integrações com sistemas de pagamento, calendários e plataformas de gestão esportiva. Entre em contato com nosso suporte para saber sobre integrações específicas.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-forest">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o Chamei
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-muted-foreground transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-muted-foreground"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Não encontrou sua resposta?
            </h2>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="mailto:contato@chamei.com.br"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-primary-foreground font-semibold hover:brightness-110 transition-all"
              >
                Enviar E-mail
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-3 text-primary font-semibold hover:bg-primary/10 transition-all"
              >
                WhatsApp
              </a>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <Home size={18} />
              Voltar para Home
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
