

import { useState } from "react";
import Player from "../player/Player";
import SelectedPlayers from "../selectedplayers/SelectedPlayers";

const Players = ({players,handleCoinBalance, Coins}) => {
  const [available, setAvailable] = useState(true);
  const [selected, setSelected] = useState(false);

  const [selectPlayers, setSelectedPlayers] = useState([]);

  const handleAvailableButton = () => {
    setAvailable(true);
    setSelected(false);
  }

  const handleSelectedButton = () => {
    setSelected(true);
    setAvailable(false);
  }

  const handleChoosePlayer = (player) => {
    const newSelectedPlayer = [...selectPlayers, player];
    setSelectedPlayers(newSelectedPlayer);
  }

  const handleRemoveButton = (id) => {
    const remainingSelectedPlayers = selectPlayers.filter(player => player.id !== id);
    setSelectedPlayers(remainingSelectedPlayers);
  }

  return (
    <>
      <div>
        <div className="mt-14 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {
            available ? (
              <h2 className="font-bold text-3xl">Available Players</h2>
            ) :
            (
              <h2 className="font-bold text-3xl">Selected Players({selectPlayers.length}/6)</h2>
            )
          }
          
          <div className="flex">
            <button onClick={handleAvailableButton} className={`px-3 py-2 rounded-l-lg
                ${ available ? "bg-[#E7FE29] border border-[#E7FE29] font-semibold" : " bg-neutral-50 border border-neutral-50"}`}>
                  <a onClick={(e) => e.preventDefault()} href="#">Available</a>
            </button>

            <button onClick={handleSelectedButton} className={`px-2 py-2 rounded-r-lg
                ${ selected ? "bg-[#E7FE29] border border-[#E7FE29] font-semibold" : " bg-neutral-50 border border-neutral-50"}`}>
                  <a onClick={(e) => e.preventDefault()} href="#">Selected({selectPlayers.length})</a>
            </button>
          </div>
        </div>
      </div>

      {
        available &&  (
          <div className="grid grid-cols-1 mx-2 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8 pb-56">
            {
              players.map(player => 
                <Player
                  key={player.id}
                  player={player}
                  handleChoosePlayer={handleChoosePlayer}
                  handleCoinBalance={handleCoinBalance}
                  selectPlayers={selectPlayers}
                  Coins = {Coins}
                />
              )
            }
          </div>
        )
      }

      {
        selected && (
          <div className="my-8 pb-56">
            <SelectedPlayers
              selectPlayers={selectPlayers}
              handleRemoveButton={handleRemoveButton}
              handleAvailableButton={handleAvailableButton}
            />
          </div>
        )
      }
    </>
  );
};

export default Players;
