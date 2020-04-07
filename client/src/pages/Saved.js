import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import TitleBox from "../components/TitleBox";
import SavedBooks from "../components/SavedBooks";
// import "../style.css";

function Saved() {
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
              <SavedBooks />
              </Col>
            </Row>
          </Container>
        </div>
      );
}

export default Saved;