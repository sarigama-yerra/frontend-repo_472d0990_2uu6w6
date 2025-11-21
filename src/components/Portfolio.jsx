export default function Portfolio() {
  const companies = [
    'Arbitrum', 'Avalanche', 'Solana', 'Sui', 'Celestia', 'EigenLayer', 'Berachain', 'Worldcoin', 'dYdX', 'LayerZero', 'StarkWare', 'Linea'
  ]

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected Investments</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10">See more</a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {companies.map((c) => (
            <div key={c} className="flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/40 text-slate-200">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
