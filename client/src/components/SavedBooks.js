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

deleteBook = (id) => {
    var books=this.state.books
    for (let i=0; i<books.length; i++) {
        if (books[i].id===id) {
            books[i].deleted = true
        }
    }
    this.setState({books: books})
}


componentDidMount = () => {
    api.getSavedBooks()
    .then(res => {
        console.log(res.data)
        var bookssaved = []
        for(let i=0;i < res.data.length;i++){
            let record = {
                title: res.data[i].title,
                authors: res.data[i].authors,
                synopsis: res.data[i].synopsis,
                id: res.data[i]._id,
                img: res.data[i].img,
                link: res.data[i].link,
                deleted: false
            }
            bookssaved.push(record)
        }
        this.setState({books: bookssaved })
    })
}

render () {
    var bookslist = this.state.books
    return (
    <div className="card text-left">
        {/* work out how to put () in the h3 text */}
        <h3 className="card-header">Saved Books</h3>
        <div className="card-body">
       
            {bookslist
                ? <div>
            {bookslist.map((book,key) => {
                    return(<BookTileSaved book={book} key={key} deleteBook={this.deleteBook} />)
                    })}
                </div>
                :
                <h4>Save A Book To Begin!</h4>
            }
        }
            
                
        }
        </div>
        
    
    </div>
    );
    }
};

    export default SavedBooks;