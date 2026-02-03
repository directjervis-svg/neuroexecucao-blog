import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://neuroexecucao.com'),
  title: {
    default: 'NeuroExecução | Gestão de Projetos Neurocompatível',
    template: '%s | NeuroExecução'
  },
  description: 'Especialista em Gestão de Projetos Neurocompatíveis para empreendedores TDAH e neurodivergentes. Neurociência + Tecnologia + Arquitetura de Sistemas.',
  keywords: ['TDAH', 'neurodivergência', 'gestão de projetos', 'produtividade TDAH', 'Russell Barkley', 'neurocompatível', 'empreendedor TDAH'],
  authors: [{ name: 'Leonardo' }],
  creator: 'Leonardo',
  publisher: 'NeuroExecução',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://neuroexecucao.com',
    siteName: 'NeuroExecução',
    title: 'NeuroExecução | Gestão de Projetos Neurocompatível',
    description: 'Neurociência aplicada à gestão de projetos para mentes que funcionam diferente.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuroExecução - Gestão Neurocompatível',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroExecução | Gestão de Projetos Neurocompatível',
    description: 'Neurociência aplicada à gestão de projetos para mentes que funcionam diferente.',
    creator: '@neuroexecucao',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
