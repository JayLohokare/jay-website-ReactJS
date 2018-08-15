import React from 'react';
import GitHubDashboard from './GitHubDashboard';

const stylesPadding15 = {
    padding: '15px'
}

const stylesProjectsNavBar = {
    paddingLeft: '350px'
}


class GithubContainer extends React.Component {
    render() {
        return (

         <div>
            <GitHubDashboard/>
         </div> 
        );
    }
}

export default GithubContainer;









