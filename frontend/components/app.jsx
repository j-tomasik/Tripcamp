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
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>

        
        <NavBar />

            {/* <navbar className="nav-bar splash">
                <div className='left-nav'>
                    <Link to="/" className="header-link" replace>
                        <h1>Welcome to Trip Camp!</h1>
                    </Link>
                </div>

                <div className='nav-right'>
                    <GreetingContainer />
                </div>
            </navbar> */}
        

        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <ProtectedRoute exact path="/spots/new" component={SpotFormContainer} /> */}
            {/* <Route path="/spots/:spotId" component={SpotShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
        
    </div>
)

export default App;