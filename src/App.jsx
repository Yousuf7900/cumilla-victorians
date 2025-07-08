
import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players';
import Footer from './components/footer/Footer';
import Newsletter from './components/newsletter/Newsletter';

function App() {

  // Coin state
  const [Coins, setCoins] = useState(0);
  
  // event handler for free credit claim
  const handleFreeCredit = () => {
    setCoins(Coins + 200000);
  }

  return (
    <>
      <div id='container'>
        {/* Navbar */}
        <Navbar
          Coins = {Coins}
        ></Navbar>

        {/* Banner section */}
        <Banner
          handleFreeCredit={handleFreeCredit}
        ></Banner>

        {/* All Players with available & selected button */}
        <Players

        ></Players>
        
        {/* Newsletter */}
        <Newsletter></Newsletter>
      </div>
      <footer>
        {/* Footer section */}
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
