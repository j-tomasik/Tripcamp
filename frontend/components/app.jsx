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
import SpotShowContainer from './spotShow/spot_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ReviewFormContainer from './session_form/spots/review_form_container';

const App = () => (
    <div className='parent'>
        
        <NavBar />
        

        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/spots/:spotId" component={SpotShowContainer} />
            <Route exact path='/' component={SpotIndexContainer} />
            <ProtectedRoute exact path='/spots/:spotId/reviews' component={ReviewFormContainer} />
            {/* <ProtectedRoute exact path="/spots/new" component={SpotFormContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
        
    </div>
)

export default App;