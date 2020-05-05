import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import Navbar from './components/Navbar';
import UserModel from './models/user';
import FloatieModel from './models/floatie';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    state = {
        currentUser: JSON.parse(localStorage.getItem("user")),
        floatieList: [],
    }

    setCurrentUser = (user) => {
        this.setState({currentUser: user})
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("uid", user.id)
        localStorage.setItem("uname", user.name)
    }

    logout = (event) => {
        event.preventDefault();

        localStorage.removeItem("user")
        UserModel.logout()
            .then(res => {
                this.setState({currentUser: null})
                this.props.history("/")
            })
            .catch(err => console.log(err))
    }

    async fetchFloatieList() {
        let res = await.FloatieModel.all();
        this.setState({
            floatieList: res.data
        })
    }

    componentDidMount() {
        this.fetchFloatieList();
    }

    render() {
        return (
            <>
                <Navbar
                    currentUser={this.state.currentUser}
                    logout={this.logout}
                    history={this.props.history}
                    setCurrentUser={this.setCurrentUser}
                    floatieList={this.state.floatieList}
                />
                <>
                    <Routes
                    currentUser={this.state.currentUser}
                    setCurrentUser={this.setCurrentUser}
                    floatieList={this.state.floatieList}
                    />
                </>
            </>
        );
    }
}

export default withRouter(App);
