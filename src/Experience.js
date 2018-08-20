import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import ExperienceNavbar from './Experience/ExperienceNavbar';
import ExperienceRESTAPI from './Experience/ExperienceRESTAPI';

const stylePadding = {
	padding: '15px',
	paddingTop: '100px',
}

class Experience extends Component {
	render() {
	  return (
		<div>
			<Navbar fixed={true}/>
			
			<Background/>
			
			<ExperienceNavbar/>

			<div style={stylePadding}>
				<ExperienceRESTAPI/>
			</div>
	
		</div>
		);	
	}
}

export default Experience;


