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
                    <a href="https://github.com/j-tomasik" className='header-link' target="_blank"><b>GitHub</b></a>
                    <a href="https://www.linkedin.com/in/jack-tomasik-530ab816b/" className='header-link' target="_blank"><b>LinkedIn</b></a>
                    <GreetingContainer />
                </div>
                
            </nav>
        )
    }

}

export default NavBar;