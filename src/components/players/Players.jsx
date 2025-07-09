import { useEffect, useState } from "react";
import Player from "../player/player";
import SelectedPlayer from "../selectedplayer/SelectedPlayer";

const Players = () => {
    // all players state
    const [players, setPlayers] = useState([]);

    // for available button. default is true
    const [available, setAvailable] = useState(true);

    // for selected button, default is false.
    const [selected, setSelected] = useState(false);

    // useEffect for all players
    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    } ,[]);

    // Available button handler
    const handleAvailableButton = () => {
        setAvailable(true);
        setSelected(false);
    }

    
    // selected button handler
    const handleSelectedButton = () => {
        setSelected(true);
        setAvailable(false);
    }
    

    return (
        <>
            <div>
                <div className="mt-14 flex justify-between">
                    {
                        available ? (
                            <h2 className="font-bold text-3xl">Available Players</h2>
                        ) :
                        (
                            <h2 className="font-bold text-3xl">Selected Players(0/6)</h2>
                        )
                    }
                    
                    <div className="">
                        <button onClick={handleAvailableButton} className={`px-3 py-2 rounded-l-lg
                            ${ available ? "bg-[#E7FE29] border border-[#E7FE29] font-semibold" : " bg-neutral-50 border border-neutral-50"}`}>
                                <a onClick={(e) => e.preventDefault()} href="#">Available</a>
                        </button>

                        <button onClick={handleSelectedButton} className={`px-2 py-2 rounded-r-lg
                            ${ selected ? "bg-[#E7FE29] border border-[#E7FE29] font-semibold" : " bg-neutral-50 border border-neutral-50"}`}>
                                <a onClick={(e) => e.preventDefault()} href="#">Selected(0)</a>
                        </button>
                    </div>
                </div>
            </div>


            {/* available players list */}

            {
                available &&  (<div className="grid grid-cols-3 gap-6 my-8 pb-56">
                {
                    players.map(player => <Player player={player}></Player>)
                }
            </div>)
            }

            {/* selected players */}

            {
                selected && (
                    <div className="my-8 pb-56">
                        {
                            players.map(player => <SelectedPlayer player={player}></SelectedPlayer>)
                        }
                    </div>
                )
            }

        </>
    );
};

export default Players;