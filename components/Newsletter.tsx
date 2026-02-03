'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface NewsletterProps {
  variant?: 'default' | 'minimal' | 'card'
}

export default function Newsletter({ variant = 'default' }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call - replace with actual ConvertKit/Mailchimp integration
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setMessage('Inscrição confirmada! Verifique seu email.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Erro ao inscrever. Tente novamente.')
    }
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
            disabled={status === 'loading' || status === 'success'}
            className="newsletter-input pl-10"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="btn-primary whitespace-nowrap"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : status === 'success' ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Inscrito!
            </>
          ) : (
            'Inscrever'
          )}
        </button>
      </form>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 p-8 lg:p-10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      <div className="relative">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500 text-white mb-6">
          <Mail className="w-6 h-6" />
        </div>

        <h3 className="text-2xl font-bold text-neutral-900 mb-3">
          Receba Artigos Sobre Gestão Neurocompatível
        </h3>
        
        <p className="text-neutral-600 mb-6 max-w-xl">
          Neurociência aplicada, templates práticos e estratégias testadas para mentes que funcionam diferente. 
          Sem spam, sempre respeitando seu tempo e atenção.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={status === 'loading' || status === 'success'}
              className="newsletter-input"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="btn-primary whitespace-nowrap"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Inscrito!
              </>
            ) : (
              'Inscrever-me'
            )}
          </button>
        </form>

        {/* Status messages */}
        {status === 'success' && (
          <div className="flex items-center gap-2 mt-4 text-sm text-emerald-600">
            <CheckCircle className="w-4 h-4" />
            {message}
          </div>
        )}
        
        {status === 'error' && (
          <div className="flex items-center gap-2 mt-4 text-sm text-red-600">
            <AlertCircle className="w-4 h-4" />
            {message}
          </div>
        )}

        <p className="mt-4 text-xs text-neutral-500">
          Ao se inscrever, você concorda com nossa{' '}
          <a href="/privacidade" className="text-brand-600 hover:underline">
            Política de Privacidade
          </a>
          . Você pode cancelar a qualquer momento.
        </p>
      </div>
    </div>
  )
}
