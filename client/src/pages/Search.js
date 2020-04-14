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
        SearchResults: []
    }

    getSearch = (SearchResults) => {
        let books = [];
        // console.log("Search:" + JSON.stringify(SearchResults))
        books = SearchResults.data.items;
        // console.log("Books:" + JSON.stringify(books))
        let answer = books.map(res => {
            console.log("result:" + JSON.stringify(res))
            return {
            // img: res.volumeInfo.imageLinks.smallThumbnail || res.volumeInfo.imageLinks.thumbnail,
            title: res.volumeInfo.title, 
            author: res.volumeInfo.authors,
            blurb: res.volumeInfo.description,
            id: res.id,
            saved:false
            };
        });
        console.log("Answer",answer)
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
          <Results records={this.state.SearchResults}/>
          </Col>
        </Row>
      </Container>
    </div>
       )
}
}

export default Search;