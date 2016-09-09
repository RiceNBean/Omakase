import React from 'react';

const ResultList = (props) => {
	const imgURLs = ["../images/carling.jpg", "../images/daria.png", "../images/jonathan.png", "../images/michael.png"];
    const K_WIDTH = 40;
	const K_HEIGHT = 40;
    const style = {
    	
    }
    const liStyle = {
    	'list-style-type': 'none',
    	color: 'white',
    	margin: '0px 0px 0px 20px',
    }
    const imgStyle = {
		width: K_WIDTH,
		height: K_HEIGHT,
		border: '2px solid #f44336',
		borderRadius: K_HEIGHT,
		backgroundColor: 'white',
		textAlign: 'left',
		color: '#3f51b5',
	};
    return (
        <ul style={style}> 
			{props.list.map(function(item, i) {
				//console.log(i)
				return (
				<li onClick={() =>  props.handleListClick(item) } key={i} style={liStyle}>
					<img src={imgURLs[i]} style={imgStyle}/>
					<span>
						<p>{item.restaurant_name}</p>
						<p>{item.address}</p>
						<p>{item.location_name}
						{item.zipcode}</p>
					</span>
				</li>
				)
			})}
		</ul>
    );
}

export default ResultList;
