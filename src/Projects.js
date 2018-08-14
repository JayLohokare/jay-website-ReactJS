import React, { Component } from 'react';

import AxiosApproach from './Projects/ProjectsRESTAPI';
import GithubContainer from './Projects/GithubContainer';
import Navbar from './Components/Navbar';
import Background from './Components/Background';



class Projects extends Component {
	render() {
	  return (
		<div>
			<Navbar fixed={true}/>
			<Background/>
			<GithubContainer />
			<AxiosApproach/>
			
			
			
		</div>
		);	
	}
}


export default Projects;

