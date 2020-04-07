import React from "react";
// import Container from "../Container";
// import Row from "../Row";
// import Col from "../Col";
// import "../style.css";

function BookSearch() {
return (
<div className="card text-left">
{/* work out how to put () in the h3 text */}
<h3 className="card-header">Book Search</h3>
<div className="card-body">
    <h6>Book</h6>
    <input type="text" id="title" name="title" placeholder="Book title..." />
    <button className="btn btn-danger">
        SEARCH
    </button>
</div>

</div>
);
}

export default BookSearch;