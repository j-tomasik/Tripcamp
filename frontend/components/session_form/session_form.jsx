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
            errors: []
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
        this.props.processForm(user)
        .fail(() => this.setState({errors: this.props.errors}))
    }

    renderErrors() {
        return (
            <ul id="errors">
                {this.props.errors.session.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render() {

        //add const for turinary that will add for labels/inputs for 'sign up' form
        const otherFields = this.props.formType === 'signup' ?
        <div>
                <label>First Name:
                    <input type="text"
                        value={this.state.firstname}
                        onChange={this.update('firstname')}
                        className="login-input"
                    />
                </label>
                <br />
                <label>Last Name:
                    <input type="text"
                        value={this.state.lastname}
                        onChange={this.update('lastname')}
                        className="login-input"
                    />
                </label>
                <br />
                <label>Zip Code:
                    <input type="number"
                        value={this.state.zip}
                        onChange={this.update('zip')}
                        className="login-input"
                    />
                </label>
        </div>
        :
        <div>

        </div>

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Let's get you outside.
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    {otherFields}
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
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