import React from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';
import LoginBar from './LoginBar';
import { Button } from 'react-bootstrap';

class SigninApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userid: null,
            error: false,
            errorMessage: null,
            previousPage: props.location.pathname
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleValidInput = this.handleValidInput.bind(this);
        this.handleVerification = this.handleVerification.bind(this);
        this.handleRerouting = this.handleRerouting.bind(this);
    }

    handleUserInput(event) {
        this.setState({username: event.target.value});
        console.log(this.state.username)
    }

    handleValidInput() {
        if(!this.state.username.length) {
            return <div className="error-message"> Please input a Username </div>
        }
        else {
            if(this.state.previousPage === '/login-to-vote' || this.state.previousPage === '/login') {
                return <Button className="main-button" bsSize="large" onClick={() => this.handleVerification('check')}> Login </Button>
            }
            if(this.state.previousPage === '/signup' ) {
                return <Button className="main-button" bsSize="large" onClick={() => this.handleVerification('add')}> Signup </Button>
            }
        }
    }

    handleVerification(fn) {
        axios.get('/api/user/' + fn, {
            params: {
              id: 12353623,
              name: this.state.username
            }
          })
            .then(response => {
                if(typeof response.data === 'string') {
                    this.setState({error: true});
                    this.setState({errorMessage: response.data})
                }

                if(typeof response.data === 'object') {
                    this.setState({userid: response.data.FB_id})
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleRerouting() {
        console.log(this.state.userid)
        if(this.state.userid) {
            if(this.state.previousPage === '/login-to-vote') {
                {browserHistory.push(`/vote/${this.state.userid}`)}
            }
            else {
                {browserHistory.push('/')}
            }
        }

        if(this.state.error) {
            return <div className="error-message"> {this.state.errorMessage} </div>
        }
    }

    render() {
        if(this.state.previousPage === '/login' || this.state.previousPage === '/login-to-vote') {
            return (
                <div className="container-fluid">
                <LoginBar/>
                <div className="main-container">
                    <div className="blurred-container">
                        <div className="main-content">
                            <p> LOGIN </p>
                            <form>
                                <input className="input-bar login-bar" type="text" value={this.state.username} onChange={this.handleUserInput} placeholder="Type username" />
                            </form>
                            {this.handleValidInput()}
                            {this.handleRerouting()}
                        </div>
                    </div>
                </div>
                </div>
            );
        }
        if(this.state.previousPage === '/signup') {
            return (
                <div className="container-fluid">
                <LoginBar/>
                <div className="main-container">
                    <div className="blurred-container">
                        <div className="main-content">
                            <p> WELCOME </p>
                            <form>
                                <input className="input-bar login-bar" type="text" value={this.state.username} onChange={this.handleUserInput} placeholder="Type username" />
                                <input className="input-bar login-bar" type="text" placeholder="Type in password" />
                                <input className="input-bar login-bar" type="text" placeholder="Retype password" />
                            </form>
                            {this.handleValidInput()}
                            {this.handleRerouting()}
                        </div>
                    </div>
                </div>
                </div>
            );
        }
    }
}



export default SigninApp;
