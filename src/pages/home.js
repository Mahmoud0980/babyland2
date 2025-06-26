//import React from "react";
import {
  Button,
  Card,
  Breadcrumb,
  Alert,
  Form,
  FormGroup,
} from "react-bootstrap";
import Hero from "../components/hero/hero";
export default function cardp() {
  return (
    <>
      <div>

        <Form>
          <FormGroup>
            <Card className="mb-3" style={{ color: "#000" }}>
              <Card.Img src="./public/images/image2.jpg" />
              <Card.Body>
                Dress
                <Card.Title>
                  <Card.Text>max 5 years</Card.Text>
                </Card.Title>
              </Card.Body>
            </Card>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}
