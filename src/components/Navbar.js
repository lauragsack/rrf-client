import React, { Component } from 'react';
import { Navbar, Modal, Nav } from 'react-bootstrap';
import Signup from './Signup';
import Login from './Login';

class NavbarNew extends Component {
  state = {
    signup: false,
    login: false,
}

  closeSignup = () => this.setState({signup: false});
  openSignup = () => this.setState({signup: true});
  closeLogin = () => this.setState({login: false});
  openLogin = () => this.setState({login: true});
  signupToLogin = () => this.setState({signup: false, login: true});
  loginToSignup = () => this.setState({login: false, signup: true});

  render() {
    const {signup, login} = this.state;
    return (
      <>
        <Navbar bg="info" expand="lg">
          <Navbar.Brand href="/">
          <img
          src="https://i.imgur.com/RcAwEzL.png"
          width="150"
          height="150"
          className="d-inline-block align-top"
          alt="Russian River Floaties logo"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/floaties">Floaties</Nav.Link>
              {this.props.currentUser?
                <>
                  <Nav.Link href="/reservations/user">Reservations</Nav.Link>
                  <Nav.Link href="/logout" onClick={this.props.logout}>Log out</Nav.Link>
                </>
                :
                <>
                  <Nav.Link onClick={this.openSignup}>Sign up</Nav.Link>
                  <Nav.Link onClick={this.openLogin}>Log in</Nav.Link>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={signup} onHide={this.closeSignup}>
            <Modal.Body>
                <Signup history={this.props.history} setCurrentUser={this.props.setCurrentUser} onClick={this.closeSignup} floatieList={this.props.floatieList}/>
            </Modal.Body>
            <Modal.Footer>
                <p>Already floating with us?</p>
                <button className="btn text-info" onClick={this.signupToLogin}>
                    <u>Log in</u>
                </button>
            </Modal.Footer>
        </Modal>
        <Modal show={login} onHide={this.closeLogin}>
            <Modal.Body>
                <Login history={this.props.history} setCurrentUser={this.props.setCurrentUser} onClick={this.closeLogin}/>
            </Modal.Body>
            <Modal.Footer>
                <p>Need to sign up?</p>
                <button className="btn text-info" onClick={this.loginToSignup}>
                    <u>Sign up</u>
                </button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default NavbarNew;
