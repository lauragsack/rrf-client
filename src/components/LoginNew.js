import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import UserModel from '../models/user';

class LoginNew extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
        .then(res => {
            console.log(res.data.user)
            this.props.setCurrentUser(res.data.user)
            this.props.history.push("/reservations/user")
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
          <>
          <Form onSubmit={this.handleSubmit}>
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
              <Button variant="secondary" type="submit" onClick={this.props.onClick}>Log in</Button>
          </Form>
          </>
        );
    }
}

export default LoginNew;