# Deploy na Netlify - Chamei

Este guia explica como fazer o deploy do projeto Chamei na Netlify.

## 📋 Pré-requisitos

- Conta no [Netlify](https://www.netlify.com/)
- Repositório Git (GitHub, GitLab ou Bitbucket)
- Node.js 18+ instalado localmente

## 🚀 Passos para Deploy

### Opção 1: Deploy via Git (Recomendado)

1. **Faça push do projeto para um repositório Git:**

   ```bash
   git init
   git add .
   git commit -m "Preparar projeto para deploy"
   git branch -M main
   git remote add origin <url-do-seu-repositorio>
   git push -u origin main
   ```

2. **Conecte o repositório na Netlify:**
   - Acesse [app.netlify.com](https://app.netlify.com/)
   - Clique em "Add new site" > "Import an existing project"
   - Escolha seu provedor Git (GitHub, GitLab, Bitbucket)
   - Selecione o repositório do projeto
   - As configurações serão detectadas automaticamente do `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Clique em "Deploy site"

3. **Aguarde o build:**
   - O Netlify vai instalar as dependências e fazer o build automaticamente
   - O processo leva cerca de 2-5 minutos

### Opção 2: Deploy Manual (Netlify CLI)

1. **Instale o Netlify CLI:**

   ```bash
   npm install -g netlify-cli
   ```

2. **Faça login no Netlify:**

   ```bash
   netlify login
   ```

3. **Faça o build localmente:**

   ```bash
   npm run build
   ```

4. **Faça o deploy:**
   ```bash
   netlify deploy --prod
   ```

### Opção 3: Deploy via Drag & Drop

1. **Faça o build localmente:**

   ```bash
   npm run build
   ```

2. **Acesse [app.netlify.com/drop](https://app.netlify.com/drop)**

3. **Arraste a pasta `dist` para a área de upload**

## ⚙️ Configurações do Projeto

O projeto já está configurado com:

✅ **netlify.toml** - Configuração de build e redirects  
✅ **public/\_redirects** - Suporte para SPA routing  
✅ **Headers de segurança** - X-Frame-Options, CSP, etc.  
✅ **Cache otimizado** - Assets estáticos com cache de 1 ano

## 🔧 Variáveis de Ambiente

Se o projeto precisar de variáveis de ambiente:

1. Na dashboard do Netlify, vá em **Site settings** > **Environment variables**
2. Adicione as variáveis necessárias
3. Faça um novo deploy

## 📱 Domínio Personalizado

1. Na dashboard do Netlify, vá em **Domain settings**
2. Clique em "Add custom domain"
3. Siga as instruções para configurar o DNS

## 🔄 Deploy Contínuo

Com o deploy via Git configurado:

- Cada push na branch `main` dispara um deploy automático
- Pull requests criam deploy previews automáticos
- Rollback é fácil através da dashboard

## 🧪 Testar Localmente Antes do Deploy

1. **Build de produção:**

   ```bash
   npm run build
   ```

2. **Preview do build:**

   ```bash
   npm run preview
   ```

3. **Acesse:** http://localhost:4173

## 📊 Verificar Build

Após o deploy, verifique:

- ✅ Todas as páginas carregam corretamente
- ✅ Rotas do React Router funcionam (/, /faq)
- ✅ Imagens e assets carregam
- ✅ Links externos funcionam
- ✅ Responsividade em diferentes dispositivos

## 🐛 Troubleshooting

### Build falha com erro de memória

Adicione no `netlify.toml`:

```toml
[build.environment]
  NODE_OPTIONS = "--max-old-space-size=4096"
```

### Rotas 404

Verifique se o arquivo `public/_redirects` existe

### Imagens não carregam

Verifique os caminhos das imagens no código (devem ser relativos)

## 📞 Suporte

- Documentação Netlify: https://docs.netlify.com/
- Status da Netlify: https://www.netlifystatus.com/

---

**Site:** [chamei.netlify.app](https://chamei.netlify.app) (substituir pelo seu domínio)  
**Desenvolvido por:** ConderTech
