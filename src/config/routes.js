import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import components
import Home from '../components/Home';
import Reservations from '../components/Reservations';
import FloatieDetail from '../components/FloatieDetail';
import FloatiesContainer from '../containers/FloatiesContainer';


export default (props) => (
    <Switch>
        <Route exact path="/">
            <Home floatieList={props.floatieList}/>
        </Route>
        <Route path="/reservations">
            <Reservations
                currentUser={props.currentUser}
            />
        </Route>
        <Route exact path="/floaties">
            <FloatiesContainer
                currentUser={props.currentUser}
                floatieList={props.floatieList}
            />
        </Route>
        <Route path="/floaties/:name" component={FloatieDetail}/>
    </Switch>
)
