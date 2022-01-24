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
                <Link to="/login">Log in!</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link>
            </nav>
        );
        const personalGreeting = () => (
            <hgroup className="header-group">
                <h2 className="header-name">Hi, {currentUser.firstname}!</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </hgroup>
        );
    
        return currentUser ? personalGreeting() : sessionLinks();
    }


};

export default Greeting;