import React, { Component } from 'react';
import { Navbar, Modal, Nav } from 'react-bootstrap';
import SignupNew from './SignupNew';
import LoginNew from './LoginNew';

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
        <Navbar className="nav" expand="lg">
          <Navbar.Brand href="/">
          <img
          src="https://i.imgur.com/RcAwEzL.png"
          width="130"
          height="130"
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
            <Modal.Body id="signup-body">
                <SignupNew history={this.props.history} setCurrentUser={this.props.setCurrentUser} onClick={this.closeSignup} floatieList={this.props.floatieList}/>
            </Modal.Body>
            <Modal.Footer id="signup-footer">
                <p>Already floating with us?</p>
                <button className="btn text-info" onClick={this.signupToLogin}>
                    <u>Log in</u>
                </button>
            </Modal.Footer>
        </Modal>
        <Modal show={login} onHide={this.closeLogin} id="login-modal">
            <Modal.Body id="login-body">
                <LoginNew history={this.props.history} setCurrentUser={this.props.setCurrentUser} onClick={this.closeLogin}/>
            </Modal.Body>
            <Modal.Footer id="login-footer">
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
