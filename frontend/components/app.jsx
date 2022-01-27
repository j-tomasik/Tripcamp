import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import NavBar from './greeting/home_navbar'
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SpotIndexContainer from './session_form/spots/spot_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { fetchSpots } from '../actions/spot_actions';

const App = () => (
    <div>

        <div className="back">
            
        </div>
        <NavBar />
        

        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path='/' component={SpotIndexContainer} />
            {/* <ProtectedRoute exact path="/spots/new" component={SpotFormContainer} /> */}
            {/* <Route path="/spots/:spotId" component={SpotShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
        
    </div>
)

export default App;