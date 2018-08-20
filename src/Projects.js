import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Background from './Components/Background';
import ProjectsRESTAPI from './Projects/ProjectsRESTAPI';
import ProjectsNavbar from './Projects/ProjectsNavbar';


const stylePadding = {
	padding: '15px',
	paddingTop: '100px',
	 
}

class Projects extends Component {
	render() {
	  return (
		<div>
			<Navbar fixed={true}/>
			
			<Background/>
			
			<ProjectsNavbar/>
			
			<div style={stylePadding}>
				<ProjectsRESTAPI/>
				
			</div>
		</div>
		);	
	}
}


export default Projects;

