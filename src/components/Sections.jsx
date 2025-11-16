export function Interest() {
  return (
    <section id="interest" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(255,120,0,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">So arbeitet Ihr virtueller Mitarbeiter</h2>
        <p className="mt-4 text-white/70 max-w-2xl">Wir verbinden Ihre Systeme, extrahieren Daten und orchestrieren Workflows. Der Agent denkt mit, lernt und liefert zuverlässig.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: 'Erkennen', d: 'Eingehende Daten, E-Mails und Dokumente werden automatisch verstanden.' },
            { t: 'Entscheiden', d: 'Regeln + KI wählen die nächsten Schritte mit Erklärbarkeit.' },
            { t: 'Ausführen', d: 'API Calls, RPA, CRM/ERP Updates – vollständig automatisiert.' },
            { t: 'Überwachen', d: 'Transparente Logs, KPIs und Benachrichtigungen.' },
            { t: 'Lernen', d: 'Kontinuierliche Verbesserung auf Basis Ihrer Ergebnisse.' },
            { t: 'Sicherheit', d: 'DSGVO-konform, rollenbasierte Zugriffe, On-Prem oder Cloud.' },
          ].map((f) => (
            <div key={f.t} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold">{f.t}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Desire() {
  const cases = [
    { title: 'Lead-Qualifizierung', res: '+38% Conversion', desc: 'Eingehende Leads werden bewertet, priorisiert und automatisch terminiert.' },
    { title: 'Rechnungsprüfung', res: '-72% Bearbeitungszeit', desc: 'OCR + Abgleich mit Bestellungen, Freigabe-Workflow und Buchung.' },
    { title: 'Kundensupport', res: '24/7 Antworten', desc: 'Mehrsprachige Assistenten lösen Standardfälle und eskalieren komplexe.' },
  ]

  return (
    <section id="desire" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(255,80,0,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Beliebte Use-Cases</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Sichtbare Ergebnisse in Wochen statt Monaten. Wir integrieren da, wo Impact entsteht.</p>
          </div>
          <a href="#action" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-black font-semibold shadow-lg shadow-orange-500/30 hover:opacity-90">Erstgespräch</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm text-orange-300/80">{c.res}</div>
              <h3 className="mt-2 text-white font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Action() {
  return (
    <section id="action" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,120,0,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Kostenloses Erstgespräch</h2>
            <p className="mt-4 text-white/70 max-w-xl">Wir analysieren Ihre Prozesse, identifizieren Quick-Wins und skizzieren den Einsatz eines virtuellen Mitarbeiters in Ihrem Team.</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm list-disc list-inside">
              <li>30–45 Minuten Videocall</li>
              <li>Konkrete Automatisierungsvorschläge</li>
              <li>Zeitleiste und ROI-Abschätzung</li>
            </ul>
          </div>
          <form className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Vorname" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40" />
              <input placeholder="Nachname" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40" />
              <input placeholder="E-Mail" type="email" className="sm:col-span-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40" />
              <input placeholder="Firma" className="sm:col-span-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40" />
              <textarea placeholder="Kurz Ihr Ziel beschreiben" rows={4} className="sm:col-span-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40" />
            </div>
            <button type="button" className="mt-5 w-full bg-gradient-to-r from-orange-500 to-amber-600 text-black font-semibold px-5 py-3 rounded-xl shadow-lg shadow-orange-500/30 hover:opacity-90">Erstgespräch anfragen</button>
            <p className="mt-3 text-xs text-white/50">Mit Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung einverstanden.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
