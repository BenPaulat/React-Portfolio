import React from 'react';
import { Button, Container, Form } from 'react-bootstrap'

function ContactMe() {
    return (
        <Container fluid="lg">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave me a message:</Form.Label>
                    <Form.Control placeholder="Enter messege..." as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default ContactMe;