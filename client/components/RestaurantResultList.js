import React from 'react';

const ResultList = (props) => {
	const imgURLs = ["../images/carling.jpg", "../images/daria.png", "../images/jonathan.png", "../images/michael.png"];
    const style = {
    	width: '99%',
    	border: '1px solid red'
    }
    const K_WIDTH = 40;
	const K_HEIGHT = 40;
    const imgStyle = {
		width: K_WIDTH,
		height: K_HEIGHT,
		border: '2px solid #f44336',
		borderRadius: K_HEIGHT,
		backgroundColor: 'white',
		textAlign: 'left',
		color: '#3f51b5'
	};
    return (
        <ol style={style}> 
			{props.list.map(function(item, i) {
				//console.log(i)
				return (
				<li onClick={() =>  props.handleListClick(item) } key={i}>
					<img src={imgURLs[i]} style={imgStyle}/>
					{item.restaurant_name}
					{item.address}
					{item.location_name}
					{item.zipcode}
				</li>
				)
			})}
		</ol>
    );
}

export default ResultList;
