import React from "react";
import './styles.css';

const Actors = props => (

    <div className="text">
        <h3>Actors</h3>
        <p>{props.actors}</p>
        <h3>Director</h3>
        <p>{props.director}</p>
       
    </div>
)

export default Actors;
