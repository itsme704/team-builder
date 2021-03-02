import React from 'react';
import './SelectedPlayer.css'
const SelectedPlayer = (props) => {
    const selectedPlayer = props.selectedPlayer;
    // console.log(selectedPlayer)

    const totalSalary = selectedPlayer.reduce((totalSalary, pl) => totalSalary + pl.salary ,0)
    return (
        <div>
            <h1>Selected Player : {selectedPlayer.length}</h1>
            {
                selectedPlayer.map(selectedPlayer =><li className="selectedPlayer">{selectedPlayer.name}</li>)
            }
            <h4>Total Salary : {totalSalary}</h4>
        </div>
    );
};

export default SelectedPlayer;