import React, { Component } from "react";
import { Row, Col, Navbar, Input, NavbarBrand } from "reactstrap";
import logo from "../assets/images/icono200x200.png";

class Header extends Component {
  render() {
    const { q, handleChangeQ } = this.props;

    return (
      <div>
        <Row style={{ backgroundColor: "rgb(255, 232, 54)" }}>
          <Col md={{ size: 10, offset: 1 }}>
            <Navbar className="p-0" color="rgb(255, 232, 54)">
              <NavbarBrand href="#">
                <img className="logoNav" src={logo} alt="MeLi" />
              </NavbarBrand>
              <div className="col inputContainer">
                <i className="fa fa-search icon"></i>
                <Input
                  className="Field"
                  type="text"
                  placeholder="Nunca dejes de buscar"
                  value={q}
                  onChange={handleChangeQ}
                />
              </div>
            </Navbar>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Header;
