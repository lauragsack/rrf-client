import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import components
import Home from '../components/Home';


export default (props) => (
    <Switch>
        <Route>
            <Home/>
        </Route>
    </Switch>
)
