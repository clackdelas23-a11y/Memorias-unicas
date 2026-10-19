import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Contact() {
  return (
    <section className="w-full bg-black px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold text-white md:text-5xl">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-400">
            Estamos aqui para servir você com excelência
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-600 to-yellow-400" />
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <div className="rounded-lg border border-yellow-600/20 bg-gradient-to-br from-gray-900 to-black p-6 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-600/20">
              <Phone className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="mb-2 font-semibold text-white">Telefone</h3>
            <a
              href="tel:+258878708695"
              className="text-gray-300 transition-colors hover:text-yellow-500"
            >
              +258 87 8708 695
            </a>
          </div>

          {/* Email */}
          <div className="rounded-lg border border-yellow-600/20 bg-gradient-to-br from-gray-900 to-black p-6 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-600/20">
              <Mail className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="mb-2 font-semibold text-white">Email</h3>
            <a
              href="mailto:beldojuliao@gmail.com"
              className="break-all text-gray-300 transition-colors hover:text-yellow-500"
            >
              beldojuliao@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="rounded-lg border border-yellow-600/20 bg-gradient-to-br from-gray-900 to-black p-6 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-600/20">
              <MapPin className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="mb-2 font-semibold text-white">Localização</h3>
            <p className="text-gray-300">
              Av. David Mazambe, Rua 319
              <br />
              Maputo, Moçambique
            </p>
          </div>

          {/* Hours */}
          <div className="rounded-lg border border-yellow-600/20 bg-gradient-to-br from-gray-900 to-black p-6 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-600/20">
              <Clock className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="mb-2 font-semibold text-white">Horário</h3>
            <p className="text-gray-300">
              Segunda - Domingo
              <br />
              10:00 - 21:00
            </p>
          </div>
        </div>

        {/* Additional Contact Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg border border-yellow-600/20 bg-gradient-to-br from-gray-900 to-black p-8">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Envie uma mensagem
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg bg-black/50 px-4 py-3 text-white placeholder-gray-500 outline-none ring-1 ring-yellow-600/20 transition-all focus:ring-yellow-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full rounded-lg bg-black/50 px-4 py-3 text-white placeholder-gray-500 outline-none ring-1 ring-yellow-600/20 transition-all focus:ring-yellow-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Sua mensagem"
                  rows={4}
                  className="w-full rounded-lg bg-black/50 px-4 py-3 text-white placeholder-gray-500 outline-none ring-1 ring-yellow-600/20 transition-all focus:ring-yellow-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 py-3 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Why Choose Us */}
          <div className="rounded-lg border border-yellow-600/20 bg-gradient-to-br from-gray-900 to-black p-8">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Por que escolher a gente?
            </h3>
            <ul className="space-y-4">
              {[
                'Profissionais experientes e dedicados',
                'Ambiente moderno e acolhedor',
                'Atendimento personalizado',
                'Técnicas e produtos premium',
                'Conforto e segurança garantidos',
                'Comunidade que valoriza você',
              ].map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-yellow-500 flex-shrink-0" />
                  <span className="text-gray-300">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
