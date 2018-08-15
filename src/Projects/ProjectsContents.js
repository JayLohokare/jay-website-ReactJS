import React, { Component } from 'react';

import AxiosApproach from './ProjectsRESTAPI';
import GithubContainer from './GithubContainer';

class ProjectsContents extends Component {
	render() {
	  return (
		<div>
            <AxiosApproach/>
			<GithubContainer />
			
		</div>
		);	
	}
}


export default ProjectsContents;

