import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import TitleBox from "../components/TitleBox";
import Results from "../components/Results";
import BookSearch from "../components/BookSearch";
// import "../style.css";

function Search() {
  return (
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
            <BookSearch />
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
  );
}

export default Search;