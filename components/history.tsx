export function History() {
  return (
    <section className="w-full bg-black px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold text-white md:text-5xl">
            Nossa História
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-yellow-600 to-yellow-400" />
        </div>

        {/* Story Content */}
        <div className="space-y-8 rounded-lg border border-yellow-600/30 bg-gradient-to-br from-gray-950 to-black p-8 md:p-12">
          {/* Intro */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-yellow-500">
              Um Sonho Simples que se Tornou Realidade
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Tudo começou com um sonho simples: criar um espaço onde cada homem pudesse sentir-se confiante, elegante e valorizado. Foi assim que nasceu a{' '}
              <span className="font-semibold text-white">Beldo K Muhalaque Barbershop</span>, um salão de beleza e barbearia inspirado na paixão pelo estilo, pela autoestima e pelo cuidado com cada cliente.
            </p>
          </div>

          {/* Growth */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-yellow-500">
              Crescimento e Confiança
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Desde os primeiros cortes feitos com dedicação e precisão, a Beldo K Muhalaque conquistou a confiança de amigos, vizinhos e clientes que procuravam mais do que um simples corte de cabelo. Procuravam um ambiente acolhedor, moderno e cheio de boa energia, onde cada visita se transforma numa experiência única.
            </p>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-yellow-500">
              Encontro de Estilos
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Com o passar do tempo, a barbearia tornou-se um ponto de encontro para homens de todas as idades — jovens, profissionais, pais e empreendedores — unidos pelo desejo de manter uma imagem cuidada e elegante. Aqui, cada detalhe importa: o corte perfeito, o acabamento da barba, o atendimento personalizado e o respeito pela identidade de cada cliente.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-yellow-500">
              Nossa Missão
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              A Beldo K Muhalaque acredita que um bom corte não muda apenas a aparência; ele aumenta a confiança, abre portas e faz o cliente sair preparado para enfrentar qualquer desafio do dia a dia.
            </p>
          </div>

          {/* Current Vision */}
          <div className="rounded-lg bg-yellow-600/10 p-6">
            <p className="text-center text-lg leading-relaxed text-gray-200">
              Hoje, a missão continua a mesma: oferecer{' '}
              <span className="font-semibold text-yellow-400">qualidade</span>,{' '}
              <span className="font-semibold text-yellow-400">profissionalismo</span> e um{' '}
              <span className="font-semibold text-yellow-400">atendimento de excelência</span>, mantendo viva a essência que deu origem ao salão.
            </p>
          </div>

          {/* Closing Tagline */}
          <div className="border-t border-yellow-600/20 pt-8 text-center">
            <p className="text-2xl font-bold text-white">
              Transformamos estilos e elevamos a autoestima
            </p>
            <p className="mt-2 text-yellow-500">
              da nossa comunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
