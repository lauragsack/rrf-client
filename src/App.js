import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes'


class App extends Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

export default withRouter(App);
