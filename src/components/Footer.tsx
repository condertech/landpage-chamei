import logoChamei from "@/assets/logo-chamei.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-card">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoChamei} alt="Chamei" className="h-8 rounded-md" />
        <p className="text-sm text-muted-foreground">
          © 2025 Chamei. Todos os direitos reservados. Desenvolvido por ConderTech.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacidade</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
