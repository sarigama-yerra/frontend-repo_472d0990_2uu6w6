import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Thesis from './components/Thesis'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_0%_0%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(1000px_circle_at_100%_100%,rgba(14,165,233,0.1),transparent_40%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Thesis />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default App
