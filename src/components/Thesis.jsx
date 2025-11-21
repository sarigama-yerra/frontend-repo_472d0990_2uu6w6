export default function Thesis() {
  const items = [
    {
      title: 'Liquid Venture',
      desc: 'A thesis-driven strategy investing in liquid tokens across AI, DePIN, gaming, and scaling infrastructure.',
    },
    {
      title: 'Venture',
      desc: 'Backing early-stage founders with a focus on crypto networks, developer tooling, and modular architectures.',
    },
    {
      title: 'Quant',
      desc: 'Systematic strategies powered by research, data engineering, and robust risk management frameworks.',
    },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(600px_circle_at_80%_80%,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Strategy</h2>
          <p className="mt-4 text-slate-300">Three complementary strategies designed to capture opportunities across market cycles.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400" />
              <h3 className="mt-5 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
