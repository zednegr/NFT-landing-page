import './App.css'
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import Cards from './components/cards/cards.jsx';
import Info from './components/info/info';
import Market from './components/market/market';
import HeroTwo from './components/hero_two/hero_two';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Info />
      <Market />
      <HeroTwo />
    </>
  )
}

export default App
