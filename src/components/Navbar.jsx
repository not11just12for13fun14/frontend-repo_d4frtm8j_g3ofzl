import { useState } from 'react'
import { Menu, CalendarDays } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const items = [
    { label: 'Leistungen', href: '#interest' },
    { label: 'Use-Cases', href: '#desire' },
    { label: 'Über uns', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg shadow-orange-500/30" />
            <span className="text-white font-semibold tracking-tight">NEO Automations</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#action" className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-black font-semibold px-4 py-2 rounded-xl shadow-lg shadow-orange-500/30 hover:opacity-90 transition">
              <CalendarDays className="h-4 w-4" />
              Erstgespräch
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
            {items.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-sm text-white/80 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#action" onClick={() => setOpen(false)} className="block text-center bg-gradient-to-r from-orange-500 to-amber-600 text-black font-semibold px-4 py-2 rounded-xl">
              Erstgespräch
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
