import { Share2, Heart, MessageCircle, Scissors } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-yellow-600/20 bg-black px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 p-2">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Beldo K</h3>
                <p className="text-xs text-yellow-500">Muhalaque</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Transformamos estilos e elevamos a autoestima.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Navegação</h4>
            <ul className="space-y-2">
              {['Início', 'História', 'Serviços', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 transition-colors hover:text-yellow-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Serviços</h4>
            <ul className="space-y-2">
              {['Cortes', 'Barba', 'Design', 'Premium'].map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-sm text-gray-400 transition-colors hover:text-yellow-500"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Siga-nos</h4>
            <div className="flex gap-3">
              {[
                { icon: Share2, label: 'Facebook' },
                { icon: Heart, label: 'Instagram' },
                { icon: MessageCircle, label: 'WhatsApp' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-yellow-600/20 text-gray-400 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-600/10 hover:text-yellow-500"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {currentYear} Beldo K Muhalaque Barbershop. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            {['Privacidade', 'Termos', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-yellow-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 border-t border-yellow-600/20 pt-8 text-center">
          <p className="text-sm font-semibold text-yellow-500">
            Mais do que cortes, criamos confiança e estilo.
          </p>
        </div>
      </div>
    </footer>
  )
}
