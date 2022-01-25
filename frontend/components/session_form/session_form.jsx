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

        const formHeader = this.props.formType === 'signup' ?
        <div>
            <h2 className='login-text'>Join Hipcamp
            <br />
            <small>Discover the best camping spots</small>
            </h2>
            <br />
        </div>
        :
        <div>
            <h2 className='login-text'>Welcome Back!
            <br />
            <small>Let's get you outside.</small>
            </h2>     
        </div>


        
        const otherFields = this.props.formType === 'signup' ?
        <div>
                <label>
                    <input type="text"
                        placeholder='First name'
                        value={this.state.firstname}
                        onChange={this.update('firstname')}
                        className="login-input"
                    />
                </label>
                <br />
                <label>
                    <input type="text"
                        placeholder='Last name'
                        value={this.state.lastname}
                        onChange={this.update('lastname')}
                        className="login-input"
                    />
                </label>
                <br />
                <label>
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

            <div id='demo-user'>
                <button className="session-submit" type='submit' onClick={() => this.signInDemo()}>Demo User</button>
            </div>
        </div>

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {formHeader}                
                    {this.renderErrors()}
                    {otherFields}
                    <div className="login-form">
                        
                        <label>
                            <input type="email"
                                placeholder='Email address'
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <label>
                            <input type="password"
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        Please {this.props.formType} or <b>{this.props.navLink}</b>
                    </div>

                    
                </form>
            </div>
        );
    }
}

export default SessionForm;