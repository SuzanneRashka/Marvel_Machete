import React from "react";

const MovieArt = props => (

    <div>
        <img
            alt={props.title}
            className="title"
            src={props.src}
            style={{ margin: "0 auto" }}
        />
        <p>image</p>
        <h3>Director(s): {props.director}</h3>
        <h3>Genre: {props.genre}</h3>
        <h3>Released: {props.released}</h3>
    </div>
)

export default MovieArt;

