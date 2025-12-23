import React from "react";
import "../index.css";

import { Row, Col } from "react-bootstrap";

const Category = ({ filterByCategory, AllCategory }) => {
  const onFilter = (Cat) => {
    filterByCategory(Cat);
  };

  return (
    <Row className="my-3">
      <Col
        sm="12"
        className="d-flex justify-content-center flex-column flex-md-row"
      >
        {AllCategory.length > 0 ? (
          AllCategory.map((Cat) => {
            return (
              <button
                key={Cat}
                onClick={() => onFilter(Cat)}
                className="btn  mx-2  my-1"
                type="button"
              >
                {Cat}
              </button>
            );
          })
        ) : (
          <h4>No Categories found</h4>
        )}
      </Col>
    </Row>
  );
};

export default Category;
