import React, { Component } from "react";
import api from "../API";
import BookTileSaved from "./BookTileSaved";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
// import "../style.css";

class SavedBooks extends Component {
state = {
    books: [],
    yesrecords:false
}

componentDidMount = () => {
    api.getSavedBooks()
    .then(res => {
        console.log(res.data)
        if(res.data.length>0){
            var yesrecords = true;
        }
        this.setState({books: res.data,yesrecords:yesrecords})
    })
}

render () {
    var bookslist = this.state.books
    return (
    <div className="card text-left">
        {/* work out how to put () in the h3 text */}
        <h3 className="card-header">Saved Books</h3>
        <div className="card-body">
       
        {/* if(yesrecords) {
           {bookslist.map((book,key) => {
                return(<BookTileSaved  book={book} key={key}/>)
                })}
        } else {
            <h4>Save A Book To Begin!</h4>
        } */}
            
                
        }
        </div>
        
    
    </div>
    );
    }
};

    export default SavedBooks;