import React from 'react';
import GoogleMap from 'google-map-react';
import Pin from './Pin'

class G_Map extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const imgURLs = ["../images/carling.jpg", "../images/daria.png", "../images/jonathan.png", "../images/michael.png"];
		const style = {
			width: '600px',
			height: '500px',
			margin: '10px',
			border: '2px solid white',
		};
		const api = "AIzaSyAJu6SvKcz7H7fNJb-akc4PJ7BYhlbhqAw";
		return (
			<div style={style} className="restaurant-result-map"> 
				<GoogleMap
					bootstrapURLKeys={{key: api}}
					center={[this.props.pins[0].lat, this.props.pins[0].lng]}
					zoom={15}>
					{this.props.pins.map((pin, i) => <Pin lat={pin.lat} lng={pin.lng} text={i + 1} imgURL={imgURLs[i]} key={i} /> )}
				</GoogleMap>
			</div>
		);
	}
}

export default G_Map;
