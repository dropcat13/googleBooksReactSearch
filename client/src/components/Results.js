import React from "react";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
import "../index.css";
import "../pages/Search"
import BookTileResult from "./BookTileResult";

function Results(props) {
    var booksrecords = props.records;
    return (
        <div className="card text-left">
        {/* work out how to put () in the h3 text */}
        <h3 className="card-header">Results</h3>
        <div className="card-body">
            {booksrecords.map((rec,key)=> {
                return(<BookTileResult 
                    book = {rec}
                    
                 key = {key}
                 />
                )})}
         {/* <BookTileResult key={book.title} {...book}/>)} */}
        <h4>Search For A Book To Begin!</h4> 
        </div> 
        
        </div>
    );
};
    
export default Results;