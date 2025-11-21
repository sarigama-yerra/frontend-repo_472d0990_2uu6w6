import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
              <span className="text-white text-lg font-semibold tracking-tight">Hartmann Capital</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80">
              <Menu size={20} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
