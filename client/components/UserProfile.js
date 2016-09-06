import React from 'react';
import { browserHistory } from 'react-router';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Frankie',
            userid: null,
            loggedIn: true,
            previousPage: props.previousPage,
            location: props.location,
            foodType: props.foodType,
            restaurant: props.restaurant
        }

        this.handleLoggedUser = this.handleLoggedUser.bind(this);
    }

    handleLoggedUser() {
        if(!this.state.loggedIn) {
            {browserHistory.push('/login')}
        }
    }

    render() {
        {this.handleLoggedUser()}

        if(this.state.previousPage === '/vote') {
            return (
                <div className="vote-confirm">
                    <h1> Hello {this.state.username} !</h1>
                    <h2> Thanks for voting for: </h2>
                        <div className="voted-for"> Restaurant: {this.state.restaurant}</div>
                        <div className="voted-for"> Dish: {this.state.foodType}</div>
                        <div className="voted-for"> City: {this.state.location}</div>
                </div>
            );
        }
        else {
            return <div>
                <h1> Hello {this.state.username} !</h1>
                <h1> Welcome to your profile</h1>
            </div>
        }
    }
}

export default UserProfile;