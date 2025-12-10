<<<<<<< HEAD
# 📰 WAI News - Portal de Notícias de IA Automatizado (Vercel)

Portal de notícias sobre Inteligência Artificial 100% automatizado que gera, ilustra e publica conteúdo 24/7 sem intervenção humana. Versão otimizada para Vercel.

1. Conecte seu repositório GitHub ao Vercel
2. Configure o build command: `npm run build`
3. Deploy automático será feito

## 🛠️ Desenvolvimento Local

### Instalação

```bash
# Clone o repositório
git clone <your-repo-url>
cd wai-news-vercel

# Instale as dependências
npm install

# Configure o banco de dados PostgreSQL local ou use Vercel Postgres
# Copie .env.example para .env.local e preencha as variáveis

# Execute as migrações do Prisma
npm run db:push

# Opcional: Popule o banco com dados iniciais
npm run db:seed

# Inicie o servidor de desenvolvimento
npm run dev
```

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Inicia servidor de produção

# Banco de dados
npm run db:generate  # Gera cliente Prisma
npm run db:push      # Aplica schema ao banco
npm run db:migrate   # Cria migração
npm run db:studio    # Abre Prisma Studio
npm run db:seed      # Popula banco com dados iniciais

# Lint
npm run lint         # Executa ESLint
```

## 🏗️ Arquitetura

### Stack Tecnológico

- **Frontend**: Next.js 15.1.3 (App Router), React 19, Tailwind CSS 4, TypeScript 5.7
- **Backend**: Next.js API Routes (Serverless), Prisma ORM 5.22, PostgreSQL
- **Autenticação**: NextAuth 5 (GitHub OAuth)
- **IA**: GitHub Models (GPT-4o-mini), Google Gemini
- **Deploy**: Vercel (Serverless)

### Sistema Multi-Agente

- **Content Agent**: Gera artigos de qualidade
- **Admin Agent**: Monitora sistema e corrige erros
- **Training Scheduler**: Aprende padrões de sucesso
- **Queue Processor**: Processa tarefas assíncronas
- **Smart Scheduler**: Gerencia calendário de publicação

### Funcionalidades

- ✅ Geração automática de conteúdo
- ✅ Sistema multi-agente
- ✅ Dashboard administrativo
- ✅ SEO otimizado
- ✅ Sistema de treinamento
- ✅ Newsletter
- ✅ Dark mode
- ✅ Responsive design

## 📊 Cron Jobs (Vercel)

Os agentes são executados automaticamente via Cron Jobs do Vercel:

- **Content Agent**: A cada 4 horas (`0 */4 * * *`)
- **Admin Agent**: Diariamente às 2:00 (`0 2 * * *`)

## 🔧 Configuração do GitHub OAuth

1. Acesse [GitHub Developer Settings](https://github.com/settings/developers)
2. Crie um novo OAuth App
3. Configure:
   - **Homepage URL**: `https://your-domain.vercel.app`
   - **Authorization callback URL**: `https://your-domain.vercel.app/api/auth/callback/github`
4. Copie Client ID e Client Secret para as variáveis de ambiente

## 📈 Monitoramento

- **Vercel Analytics**: Métricas de uso
- **Logs**: Disponíveis no painel do Vercel
- **Database**: Monitoramento via Vercel Postgres

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ para a comunidade de IA**
=======
# wai-news-vercel
 📰 WAI News - Portal de Notícias de IA Automatizado (Vercel)
>>>>>>> 2fb02ecba25692f9eaa7f8cae071aedf73d3d744
