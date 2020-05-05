import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Signup from './Signup';
import Login from './Login';

class Navbar extends Component {
    state = {
        signup: false,
        login: false,
        currentUser: this.props.currentUser
    }

    closeSignup = () => this.setState({signup: flase});
    openSignup = () => this.setState({signup: true});
    closeLogin = () => this.setState({login: false});
    openLogin = () => this.setState({login: true});
    signupToLogin = () => this.setState({signup: false, login: true});
    loginToSignup = () => this.setState({login: false, signup: true});


    render() {
        const {signup, login} = this.state;
        return (
            <>
                <nav className="navbar navbar-expand-md bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Russian River Floaties</Link>
                        <button>
                            <span className="navbar-toggle-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navClose">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/floaties">Floaties</NavLink>
                                </li>
                                {this.props.currentUser ?
                                <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/account">Account</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/logout" onClick={this.props.logout}>Logout</a>
                                </li>
                                </>
                                :
                                <>
                                <li className="nav-item">
                                    <button className="nav-link btn" onClick={this.openSignup}>Sign up</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn" onClick={this.openLogin}>Log in</button>
                                </li>
                                </>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>  
                <Modal show={signup} onHide={this.closeSignup}>
                    <Modal.Body>
                        <Signup history={this.props.history} setCurrentUser={this.props.setCurrentUser} onClick={this.closeSignup}/>
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

export default Navbar;
