import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            zip: '',
            errors: [],
            demo: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).fail(() => this.setState({errors: this.props.errors}))
    }

    signInDemo() {
        const demoObj = {
            email: 'demo@starting.com',
            password: 'demo-user'
        }
        const user = Object.assign({}, this.state, demoObj)
        this.props.processForm(user)
        this.state.demo = true;
    }

    renderErrors() {
        return (
            <ul id="errors">
                {this.state.demo === false ?                    
                        this.state.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))
                    
                    : <p></p>}               
            </ul>
        );
    }


    render() {

        
        const otherFields = this.props.formType === 'signup' ?
        <div>
            <div>
                <h1>Join TripCamp</h1>
                <p>and discover the best trip spots!</p>
            </div>
                <label><b>First Name:</b>
                    <input type="text"
                        placeholder='First name'
                        value={this.state.firstname}
                        onChange={this.update('firstname')}
                        className="login-input"
                    />
                </label>
                <br />
                <label><b>Last Name:</b>
                    <input type="text"
                        placeholder='Last name'
                        value={this.state.lastname}
                        onChange={this.update('lastname')}
                        className="login-input"
                    />
                </label>
                <br />
                <label><b>Zip Code:</b>
                    <input type="number"
                        placeholder='Zip code'
                        value={this.state.zip}
                        onChange={this.update('zip')}
                        className="login-input"
                    />
                </label>
        </div>
        :
        <div className='login--conditional-render'>
            <h1>Welcome back!</h1>

            <div id='demo-user'>
                <button className="session-submit" type='submit' onClick={() => this.signInDemo()}>Demo User</button>
            </div>
        </div>

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1>Let's get you outside.</h1>
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    {otherFields}
                    <div className="login-form">
                        
                        <label><b>Email:</b>
                        <br />
                            <input type="email"
                                placeholder='Email address'
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label><b>Password:</b>
                            <input type="password"
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>

                    
                </form>
            </div>
        );
    }
}

export default SessionForm;