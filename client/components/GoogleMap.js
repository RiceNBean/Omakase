import React from 'react';
import GoogleMap from 'google-map-react';
import Pin from './Pin'

class G_Map extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const style = {
			width: '600px',
			height: '300px'
		};
		const api = "AIzaSyAJu6SvKcz7H7fNJb-akc4PJ7BYhlbhqAw";
		return (
			<div style={style} className="ADD_STYLES_LATER"> 
				<GoogleMap
					bootstrapURLKeys={{key: api}}
					center={[this.props.pins[0].lat, this.props.pins[0].lng]}
					zoom={9}>
					{this.props.pins.map((pin, i) => <Pin lat={pin.lat} lng={pin.lng} text={i + 1}/> )}
				</GoogleMap>
			</div>
		);
	}
}

export default G_Map;
