import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Product from "./Product";

class ResultList extends Component {
  render() {
    const { products } = this.props;
    return (
      <Row>
        <Col>
         
          <div className="bodyStore">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
          </div>
          
        </Col>
      </Row>
    );
  }
}

export default ResultList;
