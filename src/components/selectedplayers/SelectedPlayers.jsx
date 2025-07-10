import SelectedPlayer from "../selectedplayer/SelectedPlayer";


const SelectedPlayers = ({selectPlayers, handleRemoveButton, handleAvailableButton}) => {
    return (
        <div>
            {
                selectPlayers.map( selectPlayer => 
                <SelectedPlayer
                    selectPlayer={selectPlayer}
                    handleRemoveButton={handleRemoveButton}
                ></SelectedPlayer>)
            }
            <button onClick={() => {handleAvailableButton()}} className="mt-4 bg-[#E7FE29] border p-3.5 rounded-2xl outline-2 outline-[#E7FE29] outline-offset-4 font-bold hover:bg-[#d4ea1f]">Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;