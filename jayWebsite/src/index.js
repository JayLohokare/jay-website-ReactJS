import ReactDOM from 'react-dom';
 

import React, { Fragment } from 'react';

import AxiosApproach from './Components/Projects/ProjectsRESTAPI';

import GitHubDashboard from './Components/GitHub/GitHubDashboard';



ReactDOM.render(
	 <Fragment>

	 	<AxiosApproach/>
	 	<GitHubDashboard />
  		
   
  	</Fragment>
	, document.getElementById('react'));

