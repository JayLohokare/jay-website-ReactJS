import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Background from './Components/Background';
import EducationNavbar from './Education/EducationNavbar';
import EducationRESTAPI from './Education/EducationRESTAPI';

const stylePadding = {
	padding: '15px',
	paddingTop: '100px',
}


class Education extends Component {
	render() {
	  return (
		<div>
			<Navbar fixed={true}/>
			<Background/>

			<EducationNavbar/>
			<div style={stylePadding}>
				<EducationRESTAPI/>
			</div>

		</div>
		);	
	}
}

export default Education;

