import React from "react";
import { Row, Col } from "react-bootstrap";
import "../index.css";

const Heading = () => {
  return (
    <Row>
      <Col sm="12" className="text-center  mt-3">
        <div className="title">
          <h1>Dishes around the world</h1>
        </div>
      </Col>
    </Row>
  );
};

export default Heading;
