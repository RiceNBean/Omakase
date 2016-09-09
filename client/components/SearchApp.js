import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import NavBar from './NavBar';
import LocationSearchBar from './LocationSearchBar';
import FoodSearchBar from './FoodSearchBar';
import FoodResult from './FoodResult';
import G_Map from './GoogleMap';
import RestaurantResultList from './RestaurantResultList'
import results from '../data/dummyResults';
import { Button, Glyphicon } from 'react-bootstrap';

class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'locationSearch',
            navLink: '/vote',
            navMessage: 'Go Vote!',
            location: null,
            foodType: null,
            result: null,
            mainView: null
        };

        this.handleLocationChoice = this.handleLocationChoice.bind(this);
        this.handleLocationSearch = this.handleLocationSearch.bind(this);
        this.handleFoodChoice = this.handleFoodChoice.bind(this);
        this.handleFoodSearch = this.handleFoodSearch.bind(this);
        this.navigateToLocationSearch = this.navigateToLocationSearch.bind(this);
        this.navigateToFoodSearch = this.navigateToFoodSearch.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
    }

    handleLocationChoice(choice) {
        this.setState({location: choice});
        this.setState({locationError: false});
    }

    handleLocationSearch() {
        if (this.state.location) {
            this.setState({page: 'foodSearch'});
        } else {
            this.setState({locationError: true});
        }
    }

    handleFoodChoice(choice) {
        this.setState({foodType: choice});
        this.setState({foodError: false});
    }

    handleFoodSearch() {
        if (this.state.foodType) {
            this.setState({page: 'spinner'});
            var data = {
                "dish_name": this.state.foodType.label,
                "location_name": this.state.location.label
            }

            axios.post('/api/search/restaurant', data)
            .then((response) => {
                this.setState({mainView: response.data[0]})
                this.setState({result: response.data});
                this.setState({page: 'foodResult'});
            })
            .catch((error) => {
                this.setState({page: 'error'})
            });

        } else {
            this.setState({foodError: true});
        }
    }

    handleListClick(item) {
        console.log("handleListClick")
        console.log(item)
        this.setState({mainView:item});
    }

    navigateToLocationSearch() {
        this.setState({location: null});
        this.setState({foodType: null});
        this.setState({page: 'locationSearch'});
    }

    navigateToFoodSearch() {
        this.setState({foodType: null});
        this.setState({page: 'foodSearch'});
    }

    render() {
        if (this.state.page === 'locationSearch') {
            return (
                <div className="container-fluid">
                    <NavBar navLink={this.state.navLink} navMessage={this.state.navMessage}/>
                    <div className="main-container">
                    <div className="blurred-container">
                        <div className="main-content">
                            <p> Where are you? </p>
                            {this.state.locationError && <div className="error-message"> Please choose a city! </div>}
                            <LocationSearchBar
                                cityPlaceholder="Choose a city..."
                                handleLocationChoice={this.handleLocationChoice}
                            />
                            <Button className="main-button" onClick={() => {this.handleLocationSearch()}}> Find Food Near Me </Button>
                        </div>
                    </div>
                    </div>
                </div>
            );
        }
        if (this.state.page === 'foodSearch') {
            return (
                <div className="container-fluid food-search">
                    <NavBar navLink={this.state.navLink} navMessage={this.state.navMessage}/>
                    <div className="main-container">
                        <a className="arrow" onClick={() => {this.navigateToLocationSearch()}}><Glyphicon glyph="chevron-left"/></a>
                        <div className="blurred-container">
                        <div className="main-content">
                            <p> What are you craving? </p>
                            {this.state.foodError && <div className="error-message"> Please choose a food! </div>}
                            <FoodSearchBar
                                foodPlaceholder="I'm craving..."
                                handleFoodChoice={this.handleFoodChoice}
                            />
                            <Button className="main-button" onClick={() => {this.handleFoodSearch()}}> Curate The Best </Button>
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.state.page === 'spinner') {
            return (
                <div className="container-fluid">
                    <NavBar navLink={this.state.navLink} navMessage={this.state.navMessage}/>
                    <div className="main-container">
                    <div className="blurred-container">
                        <div className="main-content">
                            <img className="spinner" src="../spinner.gif"/>
                        </div>
                    </div>
                    </div>
                </div>
            );
        }
        if (this.state.page === 'foodResult') {
            return (
                <div className="container-fluid food-search">
                    <NavBar navLink={this.state.navLink} navMessage={this.state.navMessage}/>
                    <div className="main-container ">
                        <a className="arrow" onClick={() => {this.navigateToFoodSearch()}}><Glyphicon glyph="chevron-left"/></a>
                        <FoodResult
                            location={this.state.location}
                            foodType={this.state.foodType}
                            result={this.state.mainView}
                        />
                        <G_Map pins={this.state.result} />
                    <RestaurantResultList handleListClick={(item) => {this.handleListClick(item) }} list={this.state.result} />
                    </div>
                </div>
            );
        }
        if (this.state.page === 'error') {
            return (
                <div className="container-fluid">
                    <NavBar navLink={this.state.navLink} navMessage={this.state.navMessage}/>
                    <div className="main-container">
                    <div className="blurred-container">
                        <div className="main-content">
                            <h1> Something went wrong... </h1>
                            <Button className="main-button" onClick={() => {this.navigateToLocationSearch()}}> Try Again </Button>
                        </div>
                    </div>
                    </div>
                </div>
            );
        }
    }
};

export default SearchApp;
