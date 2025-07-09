import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players';
import Footer from './components/footer/Footer';
import Newsletter from './components/newsletter/Newsletter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => { fetch('players.json').then(res => res.json()).then(data => setPlayers(data)) } ,[]);

  const [Coins, setCoins] = useState(0);

  const handleFreeCredit = () => {
    setCoins(Coins + 200000);
    toast.success('Free credit added!', { position: "top-center" });
  }

  const handleCoinBalance = (players) => {
    if(Coins <= 0){
      toast.success('Insufficient coin, Please claim free credit', { position: "top-center" });
    }
    else{
      (Coins - players.player_price < 0) ? toast.success('Vai tk nai to', { position: "top-center" }) : setCoins(Coins - players.player_price)
    }
  }

  return (
    <>
      <div id='container'>
        <Navbar
          Coins = {Coins}
        ></Navbar>

        <Banner
          handleFreeCredit={handleFreeCredit}
        ></Banner>

        <Players
          players={players}
          handleCoinBalance={handleCoinBalance}
          Coins = {Coins}
        ></Players>

        <Newsletter></Newsletter>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </>
    
  )
}
export default App
