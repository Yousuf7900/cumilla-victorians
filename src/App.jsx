import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players';
import Footer from './components/footer/Footer';
import Newsletter from './components/newsletter/Newsletter';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => { fetch('players.json').then(res => res.json()).then(data => setPlayers(data)) } ,[]);

  const [Coins, setCoins] = useState(0);

  const handleFreeCredit = () => {
    setCoins(Coins + 200000);
    toast.success('Free credit claimed!', { position: "top-center" });
  }

  const handleCoinBalance = (players) => {
    if(Coins <= 0){
      // toast.warn('Insufficient coin, Please claim free credit', { position: "top-center" });
    }
    else{
      setCoins(Coins - players.player_price)
      // (Coins - players.player_price < 0) ? toast.success('Goribs', { position: "top-center" }) : 
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
      {/* <ToastContainer /> */}
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
        toastClassName="soft-toast"
        bodyClassName="soft-toast-body"
      />
    </>
    
  )
}
export default App
