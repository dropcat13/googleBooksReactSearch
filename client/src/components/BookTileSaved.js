import React from "react";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
import "../index.css";

function BookTileSaved(props) {
    return (
        <div className="card text-left">
        {/* work out how to put () in the h3 text */}
        <h3 className="card-title">{props.title}</h3>
        <div className="card-body">
            <button className="btn btn-light">VIEW</button>
            <button className="btn btn-danger">DELETE</button>
            <h6>Written by {props.author}</h6>
            <img alt={props.img} className="img-fluid" src={props.img} style={{ margin: "0 auto" }}></img>
            <p>{props.blurb}</p>
        
        </div>
        
        </div>
    );
    }
    
    export default BookTileSaved;