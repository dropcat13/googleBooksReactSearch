import React from "react";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
import "../index.css";
import "../pages/Search"
import BookTileResult from "./BookTileResult";

class Results extends React.Component{

    

    render(){
    var booksrecords = this.props.records;
    return (
        <div className="card text-left">
        <h3 className="card-header">Results</h3>
        <div className="card-body">

            {booksrecords
                ? <div>
                {booksrecords.map((rec,key)=> {
                    return (<BookTileResult 
                        book = {rec}
                    
                        savedBook = {this.props.savedBook}
                    key = {key}
                    /> 
                    )})}
                </div>
                :
                <h4>Search For A Book To Begin!</h4> 
            }  
        </div> 
        
        </div>
    );
    }
};
    
export default Results;