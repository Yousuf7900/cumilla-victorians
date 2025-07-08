import { useEffect, useState } from "react";
import Player from "../player/player";

const Players = () => {
    // all players state
    const [players, setPlayers] = useState([]);

    // useEffect for all players
    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    } ,[])

    return (
        <>
            <div>
                <div className="mt-14 flex justify-between">
                    <h2 className="font-bold text-3xl">Available Players</h2>
                    <div className="">
                        <button className="font-bold border-1 border-[#E7FE29] px-3 py-2 rounded-l-lg bg-[#E7FE29]"><a href="#">Available</a></button>
                        <button className="border-1 border-neutral-50 px-2 py-2 rounded-r-lg bg-neutral-50"><a href="#">Selected(0)</a></button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 my-8 pb-56">
                {
                    players.map(player => <Player player={player}></Player>)
            }
            </div>
        </>
    );
};

export default Players;