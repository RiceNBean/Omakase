import React from 'react';
import { Image, Thumbnail, Button } from 'react-bootstrap';


var FoodResult = (props) => (
    <div className="blurred-container-food-result result-content">
        <div className='food-result'>
        {console.log("PROPS", props)}
            <Thumbnail src={props.foodType.value.image}>
                <h3>{props.result.restaurant_name}</h3>
                <div>{props.result.address}</div>
                <div>{props.result.location_name} {props.result.zipcode}</div>
            </Thumbnail>
        </div>
    </div>
);


export default FoodResult;

