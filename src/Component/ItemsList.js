import React from "react";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const ItemsList = ({ items }) => {
  return (
    <Row>
      {items.map((cat, index) => (
        <div key={index}>
          <h2 className="food-cat text-center mt-5 mb-5">{cat.Category}</h2>
          <Fade cascade triggerOnce>
            {cat.food.map((item, idx) => (
              <Col key={idx} sm="12" className="mt-4">
                <div className="card d-flex flex-column flex-md-row my-2 justify-content-center">
                  <div className="col-4">
                    <img
                      src={item.imgURL}
                      className="img-fluid  img"
                      alt={item.title}
                    />
                    <h5 className="card-title mt-2 text-center">
                      {item.title}
                    </h5>
                  </div>
                  <div className="card-body d-flex flex-md-row justify-content-between my-2 flex-column">
                    <div className="col-10">
                      <p className="card-text d-flex  my-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="">
                      <p className="ms-5  mt-5 price">${item.price}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Fade>
        </div>
      ))}
    </Row>
  );
};

export default ItemsList;
