import SelectedPlayer from "../selectedplayer/SelectedPlayer";


const SelectedPlayers = ({selectPlayers, handleRemoveButton}) => {
    return (
        <div>
            {
                selectPlayers.map( selectPlayer => 
                <SelectedPlayer
                    selectPlayer={selectPlayer}
                    handleRemoveButton={handleRemoveButton}
                ></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;