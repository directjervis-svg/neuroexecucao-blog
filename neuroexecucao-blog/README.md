# 🧠 NeuroExecução Blog

Blog profissional sobre Gestão de Projetos Neurocompatível, desenvolvido com Next.js 14, TailwindCSS e deploy no Netlify.

## ✨ Features

- **Next.js 14** com App Router
- **TailwindCSS** para estilização
- **Markdown** para conteúdo do blog
- **SEO otimizado** com metadata dinâmica
- **Google Analytics** integrado
- **Design responsivo** inspirado no blog da Anthropic
- **Filtros de categoria** e busca
- **Newsletter** com formulário de inscrição
- **Schema.org** para rich snippets

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/neuroexecucao-blog.git

# Entre no diretório
cd neuroexecucao-blog

# Instale as dependências
npm install

# Copie o arquivo de ambiente
cp .env.local.example .env.local

# Edite .env.local com suas configurações
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build de Produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
neuroexecucao-blog/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Homepage
│   ├── blog/              # Páginas do blog
│   │   ├── page.tsx       # Lista de artigos
│   │   └── [slug]/        # Página de artigo
│   └── sobre/             # Página sobre
├── components/            # Componentes React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── ArticleContent.tsx
│   ├── Newsletter.tsx
│   └── CategoryFilter.tsx
├── content/
│   └── blog/              # Artigos em Markdown
├── lib/
│   └── markdown.ts        # Utilitários para Markdown
├── public/
│   ├── fonts/             # Fontes Geist
│   └── images/            # Imagens estáticas
└── styles/                # Estilos adicionais
```

## 📝 Criando Artigos

1. Crie um arquivo `.md` em `content/blog/`
2. Adicione o frontmatter:

```markdown
---
title: "Título do Artigo"
slug: "url-slug-do-artigo"
description: "Descrição para SEO"
author: "Seu Nome"
date: "2024-12-15"
readTime: "10 min"
category: "TDAH"
tags: ["tag1", "tag2"]
seoKeywords: ["keyword1", "keyword2"]
ogImage: "/images/seu-artigo.jpg"
featured: false
---

Conteúdo do artigo em Markdown...
```

3. Faça commit e push - o deploy é automático!

## 🎨 Categorias Disponíveis

- **Neurociência** - Azul
- **TDAH** - Roxo
- **Produtividade** - Laranja
- **Frameworks** - Verde

## 🚀 Deploy no Netlify

1. Conecte seu repositório GitHub ao Netlify
2. Configure as variáveis de ambiente:
   - `NEXT_PUBLIC_GA_ID` - ID do Google Analytics
   - `NEXT_PUBLIC_SITE_URL` - URL do site
3. Deploy automático a cada push!

### Configuração de Domínio

No seu provedor DNS:
```
Tipo: A
Nome: @
Valor: 75.2.60.5

Tipo: CNAME
Nome: www
Valor: seu-site.netlify.app
```

## 📊 Analytics

O Google Analytics 4 está configurado. Adicione seu ID no `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🛠️ Comandos Úteis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção local
npm run lint     # Verificar código
```

## 📄 Licença

MIT License - Veja [LICENSE](LICENSE) para detalhes.

---

Feito com 🧠 por Leonardo | [NeuroExecução](https://neuroexecucao.com)
