import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";

class Product extends Component {
  componentDidMount() {
    if (this.props.product.condition !== "new") {
      console.log(this.props.product);
    }
  }

  handleSelected(product) {
    this.props.history.push("/" + product.id);
  }
  render() {
    const { product } = this.props;
    const isNew = product.condition === "new";
    console.log(isNew)
    return (
      <div
        className="linkProduct"
        selected={product}
        onClick={() => this.handleSelected(product)}
      >
        <Row className="p-3">
          <Col className="itemProduct">
            <Col className="col-2 imgProduct">
              <img src={product.picture} alt="phone A71" />
            </Col>
            <Col className="col-7 infoProduct">
              <div className="priceProduct">
                $
                {parseFloat(
                  product.price.amount + "." + product.price.decimals
                ).toFixed(2)}
                {product.free_shipping && <i className="fa fa-circle"></i>}
              </div>
              <div className="descriptionProduct">{product.title}</div>
            </Col>
            <Col className=" col-3 sellerCount">{product.condition}</Col>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(Product);
