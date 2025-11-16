export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,120,0,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600" />
            <span className="text-white/80 text-sm">© {new Date().getFullYear()} NEO Automations</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white">Impressum</a>
            <a href="#" className="text-white/60 hover:text-white">Datenschutz</a>
            <a href="#action" className="text-black bg-gradient-to-r from-orange-500 to-amber-600 px-4 py-2 rounded-xl font-semibold">Erstgespräch</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
