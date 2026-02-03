import Link from 'next/link'
import { Brain, Mail, Linkedin, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  conteudo: [
    { name: 'Blog', href: '/blog' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Podcast', href: '/podcast' },
  ],
  categorias: [
    { name: 'Neurociência', href: '/blog/categoria/neurociencia' },
    { name: 'TDAH', href: '/blog/categoria/tdah' },
    { name: 'Produtividade', href: '/blog/categoria/produtividade' },
    { name: 'Frameworks', href: '/blog/categoria/frameworks' },
  ],
  empresa: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'Termos', href: '/termos' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/neuroexecucao', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/neuroexecucao', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@neuroexecucao', icon: Youtube },
  { name: 'Email', href: 'mailto:contato@neuroexecucao.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100">
      {/* Newsletter CTA Section */}
      <div className="container-blog py-12 lg:py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 p-8 lg:p-12">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent-500/20 blur-3xl" />
          </div>
          
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Receba estratégias neurocompatíveis
              </h3>
              <p className="text-brand-100 text-lg">
                Neurociência aplicada, templates práticos e estratégias testadas. 
                Sem spam, sempre respeitando seu tempo.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 lg:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-brand-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-700"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-blog py-12 lg:py-16 border-t border-neutral-100">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-neutral-900 tracking-tight leading-none">
                  Neuro<span className="text-brand-600">Execução</span>
                </span>
              </div>
            </Link>
            
            <p className="text-neutral-600 mb-6 max-w-sm">
              Gestão de projetos neurocompatível para empreendedores que pensam diferente. 
              Neurociência + Tecnologia + Arquitetura de Sistemas.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Conteúdo</h4>
            <ul className="space-y-3">
              {footerLinks.conteudo.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Categorias</h4>
            <ul className="space-y-3">
              {footerLinks.categorias.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-600 hover:text-brand-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-blog py-6 border-t border-neutral-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} NeuroExecução. Todos os direitos reservados.
          </p>
          <p className="text-sm text-neutral-500">
            Feito com 🧠 para mentes que funcionam diferente.
          </p>
        </div>
      </div>
    </footer>
  )
}
