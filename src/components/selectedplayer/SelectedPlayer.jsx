import React from 'react';

const SelectedPlayer = ({player}) => {
    const {player_img, player_name, player_position} = player;
    return (
        <div>
            <div className='flex justify-between border mt-5 p-3 rounded-2xl'>
                <div className='flex items-center gap-5'>
                    <img className='max-w-20 max-h-20 rounded-2xl' src={player_img} alt="" />
                    <div>
                        <h2>{player_name}</h2>
                        <p>{player_position}</p>
                    </div>
                </div>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default SelectedPlayer;