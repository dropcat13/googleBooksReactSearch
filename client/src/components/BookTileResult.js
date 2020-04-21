import React from "react";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
import api from "../API";
import "../index.css";

class BookTileResult extends React.Component {
    // state= {
    //     saved:this.props.book.saved
    // }

saveBook = () => {
    let record = {
        title: this.props.book.title,
        authors: this.props.book.author,
        synopsis: this.props.book.blurb,
        id: this.props.book.id,
        img: this.props.book.img,
        link: this.props.book.link
    }

    console.log("frontEnd: ", record)
    api.saveBooks(record)
    .then(res => {
        console.log("books saved:" )
        this.props.savedBook(this.props.book.id)
    })
    .catch(err => {
        console.log(err)
        this.setState({saved: true})
    })
}

render() {
    return (
        <div className="card text-left">
        {/* work out how to put () in the h3 text */}
        <h3 className="card-title">{this.props.book.title}</h3>
        <div className="card-body">

            <img alt={this.props.book.img} className="img-fluid" src={this.props.book.img} style={{ margin: "0 auto" }}></img>
            <a href={this.props.book.link} target="_blank" rel="noreferrer noopener">
            <button className="btn btn-light">VIEW</button>
            </a>

            {this.props.book.saved ? <h1>Book is already saved!</h1> : 
       
            <button className="btn btn-success" onClick={this.saveBook}>SAVE</button>
      
            }
            <h6>Written by {this.props.book.author}</h6>
            <p>{this.props.book.blurb}</p>
            {/* {this.props.book.id} */}
        
        </div>
        
        </div>
    );
}
}
    
export default BookTileResult;