import React from 'react';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <nav className="nav-bar-splash">
                <div className='left-nav'>
                    <Link to="/" className="header-link" replace>
                        <h1>Welcome to Trip Camp!</h1>
                    </Link>
                </div>

                <div className='nav-right'>
                    <GreetingContainer />
                </div>
                
            </nav>
        )
    }

}

export default NavBar;