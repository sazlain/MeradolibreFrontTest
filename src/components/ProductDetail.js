import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

class ProductDetail extends Component {
  state = {
    productDetail: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchProduct(id);
  }

  fetchProduct = (id) => {
    fetch("http://localhost:5000/api/items/" + id)
      .then((res) => res.json())
      .then((response) => {
        this.setState({ productDetail: response.item });
      });
  };

  render() {
    const { productDetail } = this.state;
    console.log(productDetail);

    return (
      <Row className="col-12">
        <Col className="bodyStore pt-3">
          <Row>
            <Col
              sm="12"
              md="12"
              lg="8"
              className="col-md-9 imgProductDetail mt-auto"
            >
              <img src={productDetail.picture} alt="phone A71" />
            </Col>
            <Col sm="12" md="12" lg="4" className="col-md-3 sideBarProduct p-5">
              <div
                className="pb-2"
                style={{ fontWeight: 700, fontSize: "20px", color: "#6f7479" }}
              >
                {productDetail.condition}
              </div>
              <div
                className="pb-2"
                style={{ fontWeight: 700, fontSize: "20px" }}
              >
                {productDetail.title}
              </div>
              <div
                className="pb-3"
                style={{ fontWeight: 700, fontSize: "30px" }}
              >
                ${" "}
                {productDetail.price
                  ? parseFloat(
                      productDetail.price.amount +
                        "." +
                        productDetail.price.decimals
                    ).toFixed(2)
                  : null}
              </div>
              <Button color="primary" className="btnBuy pt-3">
                Comprar
              </Button>
            </Col>
          </Row>
          <Row sm="12">
            <Col
              sm="12"
              md="12"
              lg="8"
              className="descriptionDetailTitle pt-3 pl-5"
            >
              {productDetail.title}
            </Col>
            <Col sm="12" md="12" lg="8" className="descriptionDetail pt-3 pl-5">
              {productDetail.description}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default ProductDetail;
