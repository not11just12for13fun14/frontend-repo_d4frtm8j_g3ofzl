import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Interest, Desire, Action } from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <Navbar />
      <Hero />
      <main>
        <Interest />
        <Desire />
        <Action />
      </main>
      <Footer />
    </div>
  )
}

export default App
