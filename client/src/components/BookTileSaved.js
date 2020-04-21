import React from "react";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
import "../index.css";
// deleteBook = () => {
//     let record = {
//         title: this.props.book.title,
//         authors: this.props.book.author,
//         synopsis: this.props.book.blurb,
//         id: this.props.book.id,
//         img: this.props.book.img,
//         link: this.props.book.link
//     }

//     console.log("frontEnd: ", record)
//     api.saveBooks(record)
//     .then(res => {
//         console.log("books saved:" )
//         // this.setState({saved: true})
//     })
//     .catch(err => {
//         console.log(err)
//         // this.setState({saved: true})
//     })
// }

// constuctor() {
//     this.handlePageChange = this.handlePageChange.bind(this);
// }

// handlePageChange = () => {
//     window.location = {this.props.book.link};
// }

function BookTileSaved(props) {
    return (
        <div className="card text-left">
        {/* work out how to put () in the h3 text */}
        <h3 className="card-title">{props.book.title}</h3>
        <div className="card-body">
            <a href={props.book.link} target="_blank" rel="noreferrer noopener">
            <button className="btn btn-light">VIEW</button>
            </a>
            {/* <button className="btn btn-danger" onClick={this.deleteBook}>DELETE</button> */}
            <h6>Written by {props.book.authors}</h6>
            <img alt={props.book.img} className="img-fluid" src={props.book.img} style={{ margin: "0 auto" }}></img>
            <p>{props.book.synopsis}</p>
        
        </div>
        
        </div>
    );
    }
    
    export default BookTileSaved;