import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import ResearchNavbar from './Research/ResearchNavbar';

import ResearchRESTAPI from './Research/ResearchRESTAPI';

const stylePadding = {
	padding: '15px',
	paddingTop: '100px',
}

class Research extends Component {
	render() {
	  return (
		<div>
			<Navbar fixed={true}/>
			
			<Background/>
			
			<ResearchNavbar/>
			
			<div style={stylePadding}>
				<ResearchRESTAPI/>
			</div>
		</div>
		);	
	}
}

export default Research;

