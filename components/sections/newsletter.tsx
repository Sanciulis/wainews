'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Implementar integração com EmailJS
    console.log('Newsletter subscription:', email)

    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      alert('Inscrição realizada com sucesso!')
    }, 1000)
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Fique por Dentro</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Receba as últimas notícias sobre IA diretamente no seu email.
          Atualizações diárias sobre avanços tecnológicos e tendências.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor email"
            className="flex-1 px-4 py-3 rounded-lg text-foreground"
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-white text-primary hover:bg-gray-100"
          >
            {isSubmitting ? 'Enviando...' : 'Inscrever-se'}
          </Button>
        </form>

        <p className="text-sm mt-4 opacity-75">
          Sem spam, cancelamento a qualquer momento.
        </p>
      </div>
    </section>
  )
}