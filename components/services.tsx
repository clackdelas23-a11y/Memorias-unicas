'use client'

const services = [
  {
    name: 'Punk',
    description: 'Corte moderno e descolado para quem quer se destacar',
    price: '80 MT',
    duration: '45 min',
  },
  {
    name: 'Escovinha',
    description: 'Classicão perfeito com acabamento impecável',
    price: '60 MT',
    duration: '40 min',
  },
  {
    name: 'Careca',
    description: 'Corte rente com precisão profissional',
    price: '60 MT',
    duration: '30 min',
  },
  {
    name: 'Careca com Navalha',
    description: 'Careca premium com acabamento fino em navalha',
    price: '100 MT',
    duration: '45 min',
  },
  {
    name: 'Barba',
    description: 'Aparação e desing profissional de barba',
    price: '30 MT',
    duration: '20 min',
  },
  {
    name: 'Juba',
    description: 'Corte volumoso com estilo e movimento',
    price: '30 MT',
    duration: '35 min',
  },
  {
    name: 'Crianças Diverso',
    description: 'Cortes especiais para os pequenos',
    price: '50 MT',
    duration: '25 min',
  },
]

export function Services() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-4 py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/servicos-bg.png"
          alt="Serviços BELDO"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Cada corte, uma obra-prima de precisão
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-600 to-yellow-400" />
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-yellow-600/20 bg-gradient-to-br from-gray-900 to-black p-6 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              {/* Background Accent */}
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-yellow-600/10 transition-all duration-300 group-hover:bg-yellow-600/20" />

              {/* Service Name */}
              <h3 className="mb-2 text-xl font-bold text-white">
                {service.name}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm text-gray-400">
                {service.description}
              </p>

              {/* Price and Duration */}
              <div className="flex items-center justify-between border-t border-yellow-600/20 pt-4">
                <div>
                  <p className="text-sm text-gray-500">Preço</p>
                  <p className="text-2xl font-bold text-yellow-500">
                    {service.price}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Tempo</p>
                  <p className="text-lg font-semibold text-gray-300">
                    {service.duration}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 py-2 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
                Escolher
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 rounded-xl bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-white">
            Pronto para uma transformação?
          </h3>
          <p className="mb-6 text-gray-300">
            Agende agora e experimente o melhor da barbearia
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 px-8 py-3 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
            Agendar Agora
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
