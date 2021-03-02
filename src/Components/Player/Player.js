import React, { useState } from 'react';
import allPlayer from '../../fakeData/data.json';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import Team from '../Team/Team';
import './Player.css';
const Player = () => {
    // console.log(allPlayer)
    const [players , setPlayers] =  useState(allPlayer);
    const [selectedPlayer, setSelectedPlayer] = useState([]);

    const handleAddBtn = (player) =>{
        // console.log("Player Added",player);
        const newPlayer = [...selectedPlayer,player]
        setSelectedPlayer(newPlayer)
    }
    return (
        <div className="player-container">
           <div className="team-builder-section">
                {
                    players.map(pl =><Team 
                        handleAddBtn ={handleAddBtn}
                        player={pl}>
                        </Team>)
                }
           </div>
           <div className="selected-team-section">
               <SelectedPlayer selectedPlayer={selectedPlayer}></SelectedPlayer>
                {/* <h1>This is selected team section</h1>
                <h5>Summary {selectedPlayer.length}</h5> */}
           </div>
        </div>
    );
};

export default Player;