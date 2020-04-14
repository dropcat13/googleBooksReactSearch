import React from "react";
import API from "../API";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
// import "../style.css";

class BookSearch extends React.Component {
    state= {
        title: ""
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            hasSearched: true,
          [name]: value 
        });   
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        var searchTerm = this.state.title.split(" ").join("+")
        console.log(searchTerm)
        API.getBooks(searchTerm).then(res => {
            console.log(res)
            this.props.getSearch(res)
        });
    };
           
render() {
return (
<div className="card text-left">
    <h3 className="card-header">Book Search</h3>
    <div className="card-body">
        <h6>Book</h6>
        <input onChange={this.handleInputChange} type="text" id="title" name="title" placeholder="Book title..." />
        <button onClick={this.handleFormSubmit} className="btn btn-danger">
            SEARCH       
        </button>
    </div>
</div>
);
}
}

export default BookSearch;