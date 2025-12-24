import { useState } from 'react'
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
  const [isUIHidden, setIsUIHidden] = useState(false)

  return (
    <main className="min-h-screen font-sans selection:bg-paris-blue/10 selection:text-paris-blue relative scroll-smooth">
      <div className="fixed top-6 right-6 z-[100]">
        <LanguageSwitcher visible={!isUIHidden} />
      </div>
      <Hero />
      <Story />
      <Details />
      <Schedule />
      <Location />
      <Accommodation />
      <Gifts />
      <Gallery onLightboxToggle={setIsUIHidden} />
      <Footer />
    </main>
  )
}

export default App
