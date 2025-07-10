

import { IoPersonCircle, IoFlag  } from "react-icons/io5";
import { toast } from "react-toastify";

const Player = ({player, selectPlayers, handleChoosePlayer, handleCoinBalance, Coins}) => {
  const {player_name, player_img, player_price, player_country, player_position, batting_style, bowling_style, id} = player;
  const alreadySelected = selectPlayers.find(selected => selected.id === id);
  const maxSixAllowed = selectPlayers.length >= 6;
  const balanceCheck = Coins - player_price >= 0;

  return (
    <div>
      <div className="p-4 sm:p-6 border border-gray-200 rounded-2xl space-y-5">
        <div className="aspect-square w-full overflow-hidden rounded-2xl">
          <img
            className="w-full h-full object-cover"
            src={player_img}
            alt={player_name}
          />
        </div>

        <div className="flex items-center gap-2">
          <IoPersonCircle className="text-4xl" />
          <h2 className="text-xl font-semibold">{player_name}</h2>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <IoFlag className="text-gray-500" />
            <p className="text-gray-500">{player_country}</p>
          </div>
          <p className="text-gray-700 border rounded-lg py-1 px-2 bg-neutral-100">{player_position}</p>
        </div>
        <hr className="text-gray-300" />
        <h4 className="font-bold">Rating</h4>
        <div>
          <div className="flex gap-2">
            <p className="text-gray-400">Batting-Style:</p>
            <p className="font-semibold text-gray-600 italic">{batting_style}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-400">Bowling-Style:</p>
            <p className="font-semibold text-gray-600 italic">{bowling_style}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-gray-400">Price:</p>
            <p className="font-semibold text-gray-600 italic">${player_price}</p>
          </div>
          <button
            onClick={() => alreadySelected ? toast.warn(`${player_name} Already selected`, {position:'top-center'}) : maxSixAllowed ? toast.warn('6 players max. Remove one to add more.', {position:'top-right'}) : balanceCheck ? (handleChoosePlayer(player), handleCoinBalance(player), toast.success(`${player_name} added successfully!`, {position:'top-center'})) : toast.error('Not enough coins. Claim free credit.', {position:'top-right'})}
            className="border bg-cyan-300 border-cyan-300 hover:bg-gradient-to-r from-violet-600 to-indigo-600 hover:text-white px-2 py-1.5 rounded-lg"
          >
            <a onClick={(e) => e.preventDefault()} href="#">Choose Player</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
