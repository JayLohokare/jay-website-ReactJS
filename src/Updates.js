import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Background from './Components/Background';

import UpdatesNavbar from './Updates/UpdatesNavbar';
import UpdatesRESTAPI from './Updates/UpdatesRESTAPI';

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

			<UpdatesNavbar/>
			
			<div style={stylePadding}>
				<UpdatesRESTAPI/>
			</div>

		</div>
		);	
	}
}

export default Updates;

