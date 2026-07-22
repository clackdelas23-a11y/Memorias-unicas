import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { History } from '@/components/history'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full">
        <section id="home">
          <Hero />
        </section>
        <section id="historia">
          <History />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
