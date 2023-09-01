import './App.css'
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import Cards from './components/cards/cards.jsx';
import Info from './components/info/info';
import Market from './components/market/market';
import HeroTwo from './components/hero_two/hero_two';
import Creator from './components/creator/creator';
import Join from './components/join/join';
import Footer from './components/footer/footer';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Info />
      <Market />
      <HeroTwo />
      <Creator />
      <Join />
      <Footer />
    </>
  )
}

export default App
