import "./index.scss"
import { navItems } from "./data/data"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"


const App = () => {
  
  return (
    <div className="app">
      {/* navigation bar */}
      <Nav items={navItems} />
      {/* Home section */}
      <Home />
    </div>
  )
}

export default App