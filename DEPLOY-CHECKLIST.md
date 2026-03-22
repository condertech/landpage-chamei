# ✅ Checklist de Deploy - Chamei

Use este checklist antes de fazer o deploy para produção.

## 📋 Antes do Deploy

### Código

- [ ] Todos os erros de lint foram corrigidos (`npm run lint`)
- [ ] Build local funciona sem erros (`npm run build`)
- [ ] Preview do build funciona (`npm run preview`)
- [ ] Testes passam (`npm run test`)

### Conteúdo

- [ ] Logo do Chamei está na pasta correta (`src/assets/`)
- [ ] Todas as imagens necessárias estão presentes
- [ ] Textos e links estão corretos
- [ ] Informações de contato atualizadas (email, telefone)
- [ ] CNPJ e razão social estão corretos no footer

### SEO e Meta Tags

- [ ] Título da página está correto (`index.html`)
- [ ] Meta description está preenchida
- [ ] Favicon está correto (`chamei.logo.png`)
- [ ] Open Graph tags configuradas
- [ ] Twitter Card configurad

### Links e Navegação

- [ ] Todos os links internos funcionam
- [ ] Link para FAQ funciona (`/faq`)
- [ ] Botões de download apontam para as lojas corretas
- [ ] Links de redes sociais estão corretos
- [ ] Link para ConderTech está correto

### Responsividade

- [ ] Desktop (1920px, 1366px, 1024px)
- [ ] Tablet (768px)
- [ ] Mobile (375px, 414px)
- [ ] Testado em Chrome, Firefox, Safari

### Performance

- [ ] Imagens estão otimizadas
- [ ] Não há console.errors no navegador
- [ ] Carregamento inicial é rápido
- [ ] Animações funcionam suavemente

### Funcionalidades

- [ ] Navbar abre/fecha no mobile
- [ ] FAQ expande/colapsa corretamente
- [ ] Smooth scroll funciona nos links âncora
- [ ] Botão "Voltar para Home" no FAQ funciona
- [ ] Hover states funcionam em todos os botões

## 🚀 Durante o Deploy

### Netlify

- [ ] Repositório Git está atualizado
- [ ] Branch main está limpa
- [ ] netlify.toml está commitado
- [ ] public/\_redirects está commitado
- [ ] .nvmrc está commitado

### Build

- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Node version: 18
- [ ] Deploy sem erros

## ✅ Após o Deploy

### Verificação no Site Publicado

- [ ] Homepage carrega corretamente
- [ ] Página FAQ carrega (`/faq`)
- [ ] Rotas 404 redirecionam para home
- [ ] Todas as imagens carregam
- [ ] Logo aparece (navbar e footer)
- [ ] Links de redes sociais funcionam
- [ ] Botões de download funcionam
- [ ] Email e telefone funcionam
- [ ] Responsivo funciona em dispositivos reais

### Performance (usar PageSpeed Insights)

- [ ] Score Mobile > 80
- [ ] Score Desktop > 90
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s

### SEO (usar Google Search Console)

- [ ] Site aparece no Google
- [ ] Title e description corretos
- [ ] Schema markup válido
- [ ] Sitemap.xml (opcional)

### Segurança

- [ ] HTTPS ativo
- [ ] Headers de segurança configurados
- [ ] Sem mixed content warnings
- [ ] Certificado SSL válido

### Analytics (se configurado)

- [ ] Google Analytics funcionando
- [ ] Eventos sendo rastreados
- [ ] Conversões configuradas

## 🔄 Pós-Deploy

### Comunicação

- [ ] Equipe notificada
- [ ] Cliente notificado
- [ ] Link compartilhado nas redes

### Documentação

- [ ] Atualizar README com URL do site
- [ ] Documentar mudanças no CHANGELOG
- [ ] Atualizar documentação técnica

### Monitoramento

- [ ] Configurar monitoring (Uptim Robot, etc)
- [ ] Configurar alertas de downtime
- [ ] Verificar métricas diárias

## 📞 Contatos de Emergência

**Netlify Support:** https://www.netlify.com/support/  
**Desenvolvimento:** ConderTech

---

**Última verificação:** ****\_****
**Responsável:** ****\_****
**Status:** [ ] Pronto para produção
