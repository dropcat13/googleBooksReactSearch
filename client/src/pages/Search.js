import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import TitleBox from "../components/TitleBox";
import Results from "../components/Results";
import BookSearch from "../components/BookSearch";
// import "../style.css";

class Search extends React.Component {
    state= {
        SearchResults: [
           
        ]
    }
    getSearch = (Search) => {
        console.log(Search)
        const books = search.data.results;
        console.log(books)
        let answer = books.map(res => {
            return {
            img: res.items.volumeInfo.thumbnail,
            title: res.items.volumeInfo.name.last, 
            author: res.items.volumeInfo.author,
            blurb: res.items.volumeInfo.description
            };
        });
        this.setState({
            SearchResults: answer
        })

    }
  render (){
       return(
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
              <TitleBox />
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
            <BookSearch getSearch={this.getSearch}/>
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-12">
          <Results />
          </Col>
        </Row>
      </Container>
    </div>
       )
}
}

export default Search;