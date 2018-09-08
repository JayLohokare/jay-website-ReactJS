import React, { Component } from 'react';

import AxiosApproach from './ProjectsRESTAPI';  

class ProjectsContents extends Component {
	render() {
	  return (
		<div>
      <AxiosApproach/>
		</div>
		);	
	}
}


export default ProjectsContents;

