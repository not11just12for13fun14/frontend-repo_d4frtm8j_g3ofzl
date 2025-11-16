import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden" id="attention">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,140,0,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,80,0,0.25),transparent_40%)]" />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative pointer-events-none mx-auto max-w-7xl px-6">
        <div className="max-w-3xl py-20">
          <span className="inline-flex pointer-events-auto items-center gap-2 text-xs tracking-wider uppercase text-orange-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            Virtueller Mitarbeiter • KI Prozessautomatisierung
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Ihr KI-Agent als Teammitglied
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300">automatisiert Prozesse</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Wir stellen Ihnen einen virtuellen Mitarbeiter bereit: Ein zuverlässiger KI-Agent, der Aufgaben übernimmt, Daten verarbeitet und Abläufe 24/7 effizient steuert.
          </p>
          <div className="mt-8 pointer-events-auto flex flex-col sm:flex-row gap-3">
            <a href="#action" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-black font-semibold shadow-lg shadow-orange-500/30 hover:opacity-90">
              Erstgespräch buchen
            </a>
            <a href="#interest" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white">
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0b] to-transparent pointer-events-none" />
    </section>
  )
}
