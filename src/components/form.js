import React, { Component } from "react";
import { caesarShift } from "../utils/shift";

import {
  Button,
  Container,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Card,
  CardText
} from "reactstrap";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      index: 0,
      result: ""
    };
    this.encrypt = this.encrypt.bind(this);
    this.decrypt = this.decrypt.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    });
  }

  encrypt() {
    var result = caesarShift(this.state.message, this.state.index);
    this.setState({ result });
  }

  decrypt() {
    var result = caesarShift(this.state.message, 0 - this.state.index);
    this.setState({ result });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="9">
            <FormGroup>
              <Label for="Message">Message</Label>
              <Input
                type="text"
                id="Message"
                value={this.state.message}
                onChange={this.handleChange}
                name="message"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Index">Index</Label>
              <Input
                type="number"
                id="Index"
                value={this.state.index}
                onChange={this.handleChange}
                name="index"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Button onClick={this.encrypt} color="primary">
                Encrypt
              </Button>{" "}
              <Button onClick={this.decrypt} color="danger">
                Decrypt
              </Button>
            </FormGroup>
          </Col>
        </Row>
        {this.state.result.length > 0 && (
          <Row>
            <Col>
              <FormGroup>
                <Card body className="text-center">
                  <CardText>
                    <strong>{this.state.result}</strong>
                  </CardText>
                </Card>
              </FormGroup>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}
