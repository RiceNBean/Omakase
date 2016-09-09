import React from 'react';
const K_WIDTH = 40;
const K_HEIGHT = 40;
const style = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  border: '2px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'left',
  color: '#3f51b5'
};

class Pin extends React.Component {
  render() {
    return (
       <div>
          <img src={this.props.imgURL} style={style} />
       </div>
    );
  }
}

export default Pin;
