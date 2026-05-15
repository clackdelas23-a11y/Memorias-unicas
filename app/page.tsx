"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  Menu,
  X,
  Check,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ArrowUp,
  Clock,
  Award,
  Droplets,
  ShieldCheck,
} from "lucide-react";

// --- Reusable Components ---

const SectionTitle = ({
  title,
  subtitle,
  light = false,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}) => (
  <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 ${light ? "bg-white/10 text-white" : "bg-green-pale text-green-dark"} rounded-full px-4 py-2 mb-4 text-sm font-semibold shadow-sm`}
    >
      {title}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-4xl font-extrabold ${light ? "text-white" : "text-green-dark"} mb-4 relative inline-block`}
    >
      {subtitle}
      <span className="block mt-2 h-1.5 w-16 bg-yellow-egg rounded-full mx-auto md:mx-0" />
    </motion.h2>
  </div>
);

const Counter = ({
  target,
  label,
  suffix = "",
}: {
  target: number;
  label: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-3xl md:text-4xl font-extrabold text-yellow-egg mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-white/80 text-sm font-medium">{label}</div>
    </div>
  );
};

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-shadow hover:shadow-xl relative overflow-hidden group ${className}`}
  >
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-mid to-yellow-egg transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
    {children}
  </motion.div>
);

// --- Navigation ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Nos", href: "#sobre" },
    { name: "Produtos", href: "#produtos" },
    { name: "Contactos", href: "#contactos" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-green-dark/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-full h-full bg-yellow-egg rounded-[50%] flex items-center justify-center"
              >
                <div className="w-6 h-8 bg-white/40 rounded-[50%] blur-sm" />
              </motion.div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Mufui<span className="text-yellow-egg">fresh</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-yellow-egg transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-egg scale-x-0 group-hover:scale-x-75 transition-transform" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-green-dark z-[70] p-8 shadow-2xl lg:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-white border-b border-white/10 pb-4"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-dark/90 via-green-mid/75 to-green-light/40 z-[1]" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-8 text-white text-sm font-medium"
            >
              <Droplets className="w-4 h-4 text-yellow-egg" />
              {"Producao Diaria de Ovos Frescos"}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8"
            >
              Qualidade e <span className="text-yellow-egg">frescura</span> em
              cada ovo.
            </motion.h1>
            <motion.p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
              Produzimos ovos frescos e nutritivos com qualidade,
              sustentabilidade e compromisso com o bem-estar animal. A sua
              confianca e o nosso maior valor.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#sobre"
                className="bg-yellow-egg hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2 group"
              >
                {"Conheca a Empresa"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#produtos"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold"
              >
                Nossos Produtos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-green-dark py-10 relative z-20">
        <div className="container mx-auto px-6 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter target={100} label="% Frescura Diaria" suffix="%" />
            <Counter target={450} label="Ovos por Dia" />
            <Counter target={50} label="Clientes Satisfeitos" suffix="+" />
            <Counter target={24} label="Horas Entrega" suffix="h" />
          </div>
        </div>
      </div>

      {/* About Us */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Sobre Nos"
                subtitle="Quem Somos"
                centered={false}
              />
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                A <strong>Mufuifresh</strong> nasceu com o objetivo de oferecer
                ovos frescos e de qualidade ao mercado local, utilizando
                praticas modernas de criacao de poedeiras e foco no bem-estar
                animal.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, text: "Producao Controlada" },
                  { icon: Droplets, text: "Higiene Rigorosa" },
                  { icon: Award, text: "Alimentacao Premium" },
                  { icon: Clock, text: "Distribuicao Eficiente" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-pale flex items-center justify-center text-green-mid">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1543352658-92901426f0e9?auto=format&fit=crop&q=80"
                alt="Granja"
                className="rounded-[2rem] shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produtos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle title="Nossos Produtos" subtitle="Frescura em cada bandeja" />
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                name: "Ovos Brancos",
                desc: "Producao diaria de ovos brancos frescos para consumo domestico e comercial.",
                image:
                  "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&fit=crop&q=80&w=800",
              },
              {
                name: "Ovos Castanhos",
                desc: "Ovos Premium com gemas vibrantes e excelente valor nutricional.",
                image:
                  "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&q=80",
              },
            ].map((product, idx) => (
              <Card key={idx}>
                <img
                  src={product.image}
                  className="w-full aspect-video object-cover rounded-2xl mb-6"
                  alt={product.name}
                />
                <h3 className="text-2xl font-bold text-green-dark mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6">{product.desc}</p>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-green-mid">
                    <Check className="w-4 h-4" /> Frescos
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-green-mid">
                    <Check className="w-4 h-4" /> Nutritivos
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contactos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Contacto"
                subtitle="Vamos conversar?"
                centered={false}
              />
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center text-green-mid">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">
                      Telefone / WhatsApp
                    </div>
                    <div className="text-lg font-bold">+258 845925528</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center text-green-mid">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-lg font-bold">
                      Eugeniomachava23@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center text-green-mid">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Distribuicao</div>
                    <div className="text-lg font-bold">Maputo, Mocambique</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="bg-gray-50 rounded-[3rem] p-10 shadow-sm border border-gray-100">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center py-10">
                  <Check className="w-16 h-16 text-green-mid mb-4" />
                  <h3 className="text-2xl font-bold">Enviado!</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-mid"
                    required
                  />
                  <textarea
                    rows={4}
                    placeholder="Sua mensagem"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-mid"
                    required
                  ></textarea>
                  <button className="w-full bg-green-dark hover:bg-green-mid text-white py-5 rounded-2xl font-bold transition-colors">
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="text-2xl font-bold mb-4">
            Mufui<span className="text-yellow-egg">fresh</span>
          </div>
          <div className="text-white/30 text-xs">
            {"© 2026 Mufuifresh — Maputo, Mocambique"}
          </div>
        </div>
      </footer>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-mid hover:bg-green-dark text-white rounded-full flex items-center justify-center z-50 shadow-2xl transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp />
      </motion.button>
    </div>
  );
}
