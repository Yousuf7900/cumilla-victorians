import { IoPersonCircle, IoFlag  } from "react-icons/io5";

const Player = ({player}) => {
    // destructuring the player object
    const {player_name, player_img, player_price, player_country, player_position, batting_style, bowling_style} = player;
    return (
        <div>
            <div className="p-6 border-1 border-gray-200 rounded-2xl space-y-5">
                {/* <img className="w-full max-h-full mx-auto rounded-2xl" src={player_img} alt="" /> */}
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
                    <p className="text-gray-700 border-1 border-neutral-100 rounded-lg py-1 px-2 bg-neutral-100">{player_position}</p>
                </div> <hr className="text-gray-300" />
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
                    <button className="border-1 border-neutral-100 bg-neutral-100 px-2 py-1.5 rounded-lg"><a onClick={(e) => e.preventDefault()} href="#">Choose Player</a></button>
                </div>
            </div>
        </div>
    );
};

export default Player;