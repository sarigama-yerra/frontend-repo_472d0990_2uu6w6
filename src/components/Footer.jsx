export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400" />
              <span className="text-white font-semibold">Hartmann Capital</span>
            </div>
            <p className="mt-4 max-w-sm text-sm">A crypto-native investment firm focused on liquid venture, venture, and quantitative strategies.</p>
          </div>
          <div>
            <h4 className="text-white mb-3 font-medium">Firm</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#team" className="hover:text-white">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-3 font-medium">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@hartmanncapital.com</li>
              <li>New York, NY</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-3 font-medium">Subscribe</h4>
            <form className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs">© {new Date().getFullYear()} Hartmann Capital. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
