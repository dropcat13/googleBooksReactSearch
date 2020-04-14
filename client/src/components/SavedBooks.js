import React, { Component } from "react";
import api from "../API";
import BookTileSaved from "./BookTileSaved";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
// import "../style.css";

class SavedBooks extends Component {
state = {
    books: []
}

componentDidMount = () => {
    api.getSavedBooks()
    .then(res => {
        console.log(res.data)
        this.setState({books: res.data})
    })
}

render () {
    return (
    <div className="card text-left">
        {/* work out how to put () in the h3 text */}
        <h3 className="card-header">Saved Books</h3>
        <div className="card-body">
            {this.state.books.map(book =>{
            return(<BookTileSaved  book={book}/>)
            })}
            <h4>Save A Book To Begin!</h4>

        </div>
        
    
    </div>
    );
    }
};

    export default SavedBooks;