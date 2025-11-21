import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/0 to-slate-950" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Investing in the frontier of technology
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Crypto-native investment firm
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              We back bold founders building the next wave of crypto, AI, and digital asset infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 shadow-lg shadow-slate-900/10 transition hover:bg-slate-100">
                View Portfolio
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10">
                Get in touch
              </a>
            </div>
          </div>
          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
