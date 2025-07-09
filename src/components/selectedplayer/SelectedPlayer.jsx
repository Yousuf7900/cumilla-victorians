import { MdDeleteForever } from "react-icons/md";


const SelectedPlayer = ({selectPlayer, handleRemoveButton}) => {
    const {player_img, player_name, player_position, id} = selectPlayer;
    return (
        <div>
            <div className='flex justify-between border border-gray-300 mt-5 p-6 rounded-2xl'>
                <div className='flex items-center gap-5'>
                    <img className='w-20 h-20 object-cover rounded-2xl' src={player_img} alt="" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">{player_name}</h2>
                        <p className="text-gray-600">{player_position}</p>
                    </div>
                </div>
                <button onClick={() => handleRemoveButton(id)} ><a onClick={(e) => e.preventDefault()} href="#"><MdDeleteForever className="text-red-300 hover:text-red-500 text-3xl" /></a></button>
            </div>
        </div>
    );
};

export default SelectedPlayer;