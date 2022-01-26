import React from 'react';
import { Link } from 'react-router-dom';



class Greeting extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        const { currentUser, logout } = this.props

        const sessionLinks = () => (
            <nav className="login-signup">
                <b><Link to="/login">Log in</Link></b>
                &nbsp;or&nbsp;
                <b><Link to="/signup">Sign up</Link></b>
            </nav>
        );
        const personalGreeting = () => (
            <hgroup className="header-group">
                <h2 className="header-name">Hi, {currentUser.firstname}!</h2>
                <button className="logout-submit" onClick={logout}>Log Out</button>
            </hgroup>
        );
    
        return currentUser ? personalGreeting() : sessionLinks();
    }


};

export default Greeting;