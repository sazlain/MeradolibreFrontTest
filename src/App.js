import React, { Component } from "react";
import Header from "./components/Header";
import { Route, withRouter } from "react-router-dom";
import ResultList from "./components/ResultList";
import ProductDetail from "./components/ProductDetail";
import { Col } from "reactstrap";

class App extends Component {
  state = {
    q: "",
    products: [],
    redirect: false,
    productselected: null,
  };

  delayTimer;

  fetchProducts = () => {
    const { q } = this.state;

    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(function () {
      fetch("http://localhost:5000/api/items?q=" + q)
        .then((res) => res.json())
        .then((response) => {
          this.setState({ products: response.items });
        });
    }.bind(this), 250); // Will do the ajax stuff
  };

  handleChangeQ = (e) => {
    this.setState({ q: e.target.value });
    this.fetchProducts();
    this.props.history.push("/");
  };

  render() {
    const { q, products } = this.state;

    return (
      <>
        <Header q={q} handleChangeQ={this.handleChangeQ} />
        <Col md={{ size: 10, offset: 1 }}>
          <div className="categoryPath">
            ruta / de / la / categoria / seleccionada
          </div>
          <Route
            exact
            path="/"
            component={() => <ResultList products={products} />}
          />
          <Route exact path="/:id" component={ProductDetail} />
        </Col>
      </>
    );
  }
}
export default withRouter(App);
