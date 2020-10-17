import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

class form extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Label>
            <b>Story Title:</b>
          </Form.Label>
          <Col>
            <Form.Control size="sm" placeholder="Story Title" />
          </Col>
          <Form.Label>
            <b>Story Description:</b>
          </Form.Label>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write Story Here</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Label>
            <b>Author Name:</b>
          </Form.Label>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          
        </Form>
        <Button variant="primary">
            <b>SUBMIT</b>
          </Button>
      </div>
    );
  }
}
export default form;
