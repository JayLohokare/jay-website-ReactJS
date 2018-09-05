import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Background from './Components/Background';

const stylePadding = {
	padding: '15px',
	paddingTop: '100px',
}


class Updates extends Component {
	render() {
	  return (
		<div>
			<Navbar fixed={true}/>
			<Background/>

		</div>
		);	
	}
}

export default Updates;

