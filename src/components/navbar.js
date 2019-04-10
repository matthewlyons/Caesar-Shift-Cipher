import React, { Component } from "react";

import { FormGroup, Navbar, NavbarBrand, Container } from "reactstrap";

export default class navbar extends Component {
  render() {
    return (
      <FormGroup>
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">Caesar Cipher</NavbarBrand>
          </Container>
        </Navbar>
      </FormGroup>
    );
  }
}
