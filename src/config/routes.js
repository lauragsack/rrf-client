import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import components
import Home from '../components/Home';
import Reservations from '../components/Reservations';


export default (props) => (
    <Switch>
        <Route exact path="/" >
            <Home floatieList={props.floatieList} component={ Home }/>
        </Route>
        <Route path="/Reservations">
            <Reservations
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
            />
        </Route>
    </Switch>
)
