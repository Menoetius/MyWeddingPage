import Hero from './components/Hero'
import Story from './components/Story'
import Details from './components/Details'
import Schedule from './components/Schedule'
import Location from './components/Location'
import Accommodation from './components/Accommodation'
import Gallery from './components/Gallery'
import Gifts from './components/Gifts'
import Footer from './components/Footer'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-paris-blue/10 selection:text-paris-blue relative scroll-smooth">
      <div className="fixed top-6 right-6 z-[100]">
        <LanguageSwitcher />
      </div>
      <Hero />
      <Story />
      <Details />
      <Schedule />
      <Location />
      <Accommodation />
      <Gifts />
      <Gallery />
      <Footer />
    </main>
  )
}

export default App
