import { Component } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveEmployee } from "../Services/EmployeeService";

export class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            isInserted: false
        }
    }
    handleChange = (e) => {
        this.setState({ formData: { ...this.state.formData, [e.target.name]: e.target.value } });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await saveEmployee(this.state.formData);
        console.log(response.data);
        this.setState({ isInserted: true });
    }
    render() {
        return (
            <>
                <Container className="mt-5 text-center">
                    <Alert variant="success"> Register a new Employee</Alert>
                    <p>You can perform CRUD operation on Employee</p>
                </Container>
                {
                    this.state.isInserted ? <Container className="mt-3 text-center">
                        <Alert variant="success">Employee Register !</Alert>
                    </Container> : null
                }
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Salary" name="salary" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Department" name="department" onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button type="submit" className="btn btn-primary">Register</Button>
                    </Form>
                </Container>
            </>
        );
    }
}