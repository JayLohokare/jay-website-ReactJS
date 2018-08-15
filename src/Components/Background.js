import React from 'react';


const imageStyle = {
	zIndex:'-9999',
	position:'fixed',
	objectFit: 'cover',
	width:'100vw',
	height:'100vh'
}

class Background extends React.Component {
    render() {
        return (

         <img src="images/back.jpg" style={imageStyle} alt="background"
		  /> 

        );
    }
}

export default Background;









