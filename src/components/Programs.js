import React from "react";
import { programData } from "./data";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const Programs = () => {
  return (
    <>
      <Container fluid className="Program-section">
        <Container>
          <h1 className="program-heading">
            My Coding <strong className="purple">Solution </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few programs that I've done recently.
          </p>
          <Row className="stock-container">
            {programData.map((data, key) => {
              return (
                <div key={key}>
                  <Program
                    key={key}
                    description={data.description}
                    practice={data.practice}
                    link={data.link}
                  />
                </div>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};


const Program = ({ description,practice,link}) => {
  if (!description) return <div />;
  return (
    <Card className="program-card-view">
    <Card.Body>
      <Row>
          <Col md={10}>
              <Card.Text style={{ textAlign: "justify" }}>    
              ‣   {description}
              </Card.Text>
          </Col>
          <Col md={2}>
              <Button className="primary" variant="primary" href={practice} target="_blank">
              &nbsp;
                {"Practice"}
              </Button>
              <Button className="primary" variant="primary" href={link} target="_blank">
              &nbsp;
                {"View"}
              </Button>
          </Col>
      </Row>
    </Card.Body>
  </Card>
  );
};

export default Programs;