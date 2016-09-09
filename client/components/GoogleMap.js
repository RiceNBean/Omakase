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
		}
		return (
			<div style={style}> 
				<GoogleMap
					apiKey={ process.env.google_maps_api_key }
					center={[this.props.pin.lat, this.props.pin.lng]}
					zoom={9}>
					<Pin lat={this.props.pin.lat} lng={this.props.pin.lng} text={'A'} />
				</GoogleMap>
			</div>
		);
	}
}

export default G_Map;
