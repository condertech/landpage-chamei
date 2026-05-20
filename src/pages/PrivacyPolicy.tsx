import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-forest">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
              Politica de Privacidade - Chamei
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Ultima atualizacao: 19 de maio de 2026
            </p>
          </motion.div>
        </div>
      </section>

      <main className="py-12 flex-grow">
        <div className="container mx-auto px-4 max-w-5xl">
          <article className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-8 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">1. Introducao</h2>
              <p className="text-muted-foreground">
                Bem-vindo ao <strong>Chamei</strong>. Esta Politica de
                Privacidade descreve como coletamos, usamos, armazenamos e
                protegemos suas informacoes pessoais quando voce usa nosso
                aplicativo movel.
              </p>
              <p className="text-muted-foreground">
                Ao usar o Chamei, voce concorda com a coleta e uso de
                informacoes de acordo com esta politica.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">
                2. Informacoes que Coletamos
              </h2>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  2.1 Informacoes Fornecidas por Voce
                </h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>
                    <strong>Conta e Perfil:</strong> Nome, email, senha
                    (criptografada), telefone, data de nascimento, foto de
                    perfil
                  </li>
                  <li>
                    <strong>Pagamentos:</strong> Dados de pagamento processados
                    pelo Mercado Pago (nao armazenamos dados de cartao)
                  </li>
                  <li>
                    <strong>Conteudo:</strong> Fotos de quadras, avaliacoes,
                    comentarios
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  2.2 Informacoes Coletadas Automaticamente
                </h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>
                    <strong>Localizacao:</strong> Usamos sua localizacao (com
                    sua permissao) para mostrar quadras proximas a voce
                  </li>
                  <li>
                    <strong>Dispositivo:</strong> Tipo de dispositivo, sistema
                    operacional, versao do app
                  </li>
                  <li>
                    <strong>Uso:</strong> Quadras visualizadas, reservas feitas,
                    buscas realizadas
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">2.3 Permissoes do App</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>
                    <strong>Localizacao (GPS):</strong> Para encontrar quadras
                    proximas
                  </li>
                  <li>
                    <strong>Camera:</strong> Para tirar fotos de quadras e
                    perfil
                  </li>
                  <li>
                    <strong>Galeria/Fotos:</strong> Para escolher fotos da
                    galeria
                  </li>
                  <li>
                    <strong>Internet:</strong> Para comunicacao com nossos
                    servidores
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">
                3. Como Usamos Suas Informacoes
              </h2>
              <p className="text-muted-foreground">
                Usamos suas informacoes para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Processar reservas e pagamentos</li>
                <li>Mostrar quadras proximas a sua localizacao</li>
                <li>Enviar confirmacoes e notificacoes de reservas</li>
                <li>Melhorar nossos servicos</li>
                <li>Prevenir fraudes e abusos</li>
                <li>Fornecer suporte ao cliente</li>
                <li>Enviar atualizacoes importantes sobre o servico</li>
              </ul>
              <p className="font-semibold">
                Nao vendemos ou compartilhamos seus dados pessoais com terceiros
                para fins de marketing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">
                4. Compartilhamento de Informacoes
              </h2>
              <p className="text-muted-foreground">
                Compartilhamos informacoes apenas quando necessario:
              </p>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  4.1 Prestadores de Servicos
                </h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>
                    <strong>Supabase:</strong> Armazenamento de dados e
                    autenticacao (
                    <a
                      href="https://supabase.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://supabase.com/privacy
                    </a>
                    )
                  </li>
                  <li>
                    <strong>Mercado Pago:</strong> Processamento de pagamentos (
                    <a
                      href="https://www.mercadopago.com.br/privacidade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://www.mercadopago.com.br/privacidade
                    </a>
                    )
                  </li>
                  <li>
                    <strong>Google Play Services:</strong> Localizacao e
                    servicos do Android
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  4.2 Proprietarios de Quadras
                </h3>
                <p className="text-muted-foreground">
                  Quando voce faz uma reserva, compartilhamos:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Seu nome e telefone (para contato)</li>
                  <li>Data e horario da reserva</li>
                  <li>Status do pagamento</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">4.3 Requisitos Legais</h3>
                <p className="text-muted-foreground">
                  Podemos divulgar informacoes se exigido por lei, ordem
                  judicial ou processo legal.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">
                5. Armazenamento e Seguranca
              </h2>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">5.1 Onde Armazenamos</h3>
                <p className="text-muted-foreground">
                  Seus dados sao armazenados em servidores seguros do Supabase,
                  localizados em centros de dados certificados.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  5.2 Medidas de Seguranca
                </h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Criptografia de senha (hashing bcrypt)</li>
                  <li>Conexoes HTTPS/TLS</li>
                  <li>Autenticacao de dois fatores (quando disponivel)</li>
                  <li>Regras de seguranca no nivel do banco de dados (RLS)</li>
                  <li>Backups regulares</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">5.3 Retencao de Dados</h3>
                <p className="text-muted-foreground">
                  Mantemos seus dados enquanto sua conta estiver ativa. Apos
                  exclusao da conta, dados pessoais sao removidos em ate 30
                  dias, exceto quando exigido por lei.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Seus Direitos</h2>
              <p className="text-muted-foreground">Voce tem direito de:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>Acessar</strong> seus dados pessoais
                </li>
                <li>
                  <strong>Corrigir</strong> informacoes incorretas
                </li>
                <li>
                  <strong>Excluir</strong> sua conta e dados
                </li>
                <li>
                  <strong>Exportar</strong> seus dados (portabilidade)
                </li>
                <li>
                  <strong>Revogar</strong> permissoes (localizacao, camera, etc)
                </li>
                <li>
                  <strong>Opt-out</strong> de notificacoes nao essenciais
                </li>
              </ul>

              <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-3">
                <h3 className="text-xl font-semibold">
                  Como Exercer Seus Direitos
                </h3>
                <div className="space-y-2">
                  <p className="font-medium">Excluir conta:</p>
                  <ol className="list-decimal pl-6 text-muted-foreground space-y-1">
                    <li>Abra o app</li>
                    <li>Va em Perfil &gt; Configuracoes</li>
                    <li>Toque em "Excluir conta"</li>
                    <li>Confirme a exclusao</li>
                  </ol>
                </div>
                <p className="text-muted-foreground">
                  Outras solicitacoes: entre em contato pelo email
                  <a
                    href="mailto:suporte@chamei.com"
                    className="text-primary hover:underline ml-1"
                  >
                    suporte@chamei.com
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">7. Privacidade de Criancas</h2>
              <p className="text-muted-foreground">
                O Chamei nao e destinado a menores de 13 anos. Nao coletamos
                intencionalmente informacoes de criancas. Se voce acredita que
                coletamos dados de uma crianca, entre em contato conosco para
                remocao imediata.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">
                8. Cookies e Tecnologias Similares
              </h2>
              <p className="text-muted-foreground">
                Usamos tecnologias similares a cookies para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Manter voce conectado</li>
                <li>Lembrar preferencias</li>
                <li>Analisar uso do app (analytics anonimos)</li>
              </ul>
              <p className="text-muted-foreground">
                Voce pode limpar dados do app nas configuracoes do dispositivo.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">
                9. Alteracoes nesta Politica
              </h2>
              <p className="text-muted-foreground">
                Podemos atualizar esta Politica de Privacidade periodicamente.
                Notificaremos sobre mudancas significativas atraves de
                notificacao no app e email cadastrado.
              </p>
              <p className="text-muted-foreground">
                Data da ultima atualizacao: sempre exibida no topo deste
                documento.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">10. Legislacao Aplicavel</h2>
              <p className="text-muted-foreground">
                Esta politica e regida pelas leis do Brasil, incluindo:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>
                  <strong>LGPD</strong> (Lei Geral de Protecao de Dados - Lei n.
                  13.709/2018)
                </li>
                <li>
                  <strong>Marco Civil da Internet</strong> (Lei n. 12.965/2014)
                </li>
                <li>
                  <strong>Codigo de Defesa do Consumidor</strong>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold">
                11. Transferencia Internacional de Dados
              </h2>
              <p className="text-muted-foreground">
                Seus dados podem ser transferidos e armazenados em servidores
                fora do Brasil (Supabase/AWS). Garantimos que esses provedores
                mantem padroes adequados de protecao de dados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">12. Contato</h2>
              <div className="grid gap-3 text-muted-foreground">
                <p>
                  <strong>Email:</strong> suporte@chamei.com
                </p>
                <p>
                  <strong>Responsavel pela Protecao de Dados (DPO):</strong>
                  <br />
                  [Nome do responsavel]
                  <br />
                  [Email do DPO]
                </p>
                <p>
                  <strong>Endereco:</strong>
                  <br />
                  [Seu endereco comercial]
                  <br />
                  [Cidade, Estado, CEP]
                  <br />
                  Brasil
                </p>
              </div>
            </section>

            <section className="space-y-4 rounded-xl border border-border p-6 bg-muted/20">
              <h2 className="text-2xl font-bold">Resumo Simplificado</h2>

              <div>
                <h3 className="font-semibold mb-2">O que coletamos:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Email, nome, telefone</li>
                  <li>Localizacao (com sua permissao)</li>
                  <li>Fotos que voce envia</li>
                  <li>Historico de reservas</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Como usamos:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Para processar suas reservas</li>
                  <li>Mostrar quadras perto de voce</li>
                  <li>Melhorar o servico</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Compartilhamos com:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Supabase (banco de dados)</li>
                  <li>Mercado Pago (pagamentos)</li>
                  <li>Proprietario da quadra (quando voce reservar)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Seus direitos:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Ver seus dados</li>
                  <li>Corrigir informacoes</li>
                  <li>Excluir sua conta</li>
                  <li>Exportar seus dados</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Seguranca:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Senhas criptografadas</li>
                  <li>Conexao segura (HTTPS)</li>
                  <li>Servidores protegidos</li>
                </ul>
              </div>

              <p className="text-muted-foreground">
                <strong>Contato:</strong> suporte@chamei.com
              </p>
            </section>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Chamei - Aplicativo de Reserva de Quadras Esportivas.
                <br />
                Esta Politica de Privacidade e fornecida em conformidade com a
                LGPD e requisitos da Google Play Store.
              </p>

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <Home size={16} />
                Voltar para Home
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
