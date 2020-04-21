import React from "react";
import API from "../API";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
import "../index.css";

class BookTileSaved extends React.Component{
removeBook = () => {
       console.log("Delete Route",this.props.book.id)
       API.deleteBook(this.props.book.id)
      .catch(err => console.log(err));
    //   window.location.reload()
    //   this.props.history.push("/saved")
     this.props.deleteBook(this.props.book.id)
  };

render(){
    return (
        <div>
            {this.props.book.deleted ? <div></div> :
        <div className="card text-left">
        {/* work out how to put () in the h3 text */}
        <h3 className="card-title">{this.props.book.title}</h3>
        <div className="card-body">
            <a href={this.props.book.link} target="_blank" rel="noreferrer noopener">
            <button className="btn btn-light">VIEW</button>
            </a>
            <button className="btn btn-danger" onClick={this.removeBook}>DELETE</button>
            <h6>Written by {this.props.book.authors}</h6>
            <img alt={this.props.book.img} className="img-fluid" src={this.props.book.img} style={{ margin: "0 auto" }}></img>
            <p>{this.props.book.synopsis}</p>
        
        </div>
        
        </div>}
        </div>
    );
    }
}
    
    export default BookTileSaved;