import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import UserModel from '../models/user';

class SignupNew extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        favFloatie: {},
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.create(this.state)
            .then(res => {
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    password2: "",
                    favFloatie: {}
                })
                console.log(res.data.user)
                this.props.setCurrentUser(res.data.user)
                this.props.history.push("/floaties")
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onChange={this.handleChange}
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            onChange={this.handleChange}
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={this.handleChange}
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="password2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            onChange={this.handleChange}
                            type="password"
                            id="password2"
                            name="password2"
                            value={this.state.password2}
                        />
                    </Form.Group>
                </Form.Row>
                <Button variant="secondary" type="submit" onClick={this.props.onClick}>Sign up</Button>
            </Form>
            </>
        );
    }
}

export default SignupNew;
