import React from 'react';
import './Team.css';

const Team = (props) => {
    // console.log(props);
    const {name,salary,picture} = props.player;
    return (
        <div className="team">
            <div class="card">
                    <img src={picture} alt=""/>
                    <h1>{name}</h1>
                    <p>{salary} Rs</p>
                    <button className="btn-grad"
                        onClick = {() => props.handleAddBtn(props.player)}
                        >Add me</button>
            </div>

            
            
        </div>
    );
};

export default Team;