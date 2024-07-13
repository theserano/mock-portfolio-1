import "./index.scss"
import { navItems } from "./data/data"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Services from "./components/Services/ServicesSection"
import Recent from "./components/Recents/Recents"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


const App = () => {
  
  return (
    <div className="app">
      {/* navigation bar */}
      <Nav items={navItems} />
      {/* Home section */}
      <Home />
      {/* services */}
      <Services />
      {/* recent */}
      <Recent />
      {/* contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  )
}

export default App