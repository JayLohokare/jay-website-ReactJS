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
            <div className="hide-on-med-and-down" style={stylesProjectsNavBar}>
                <GitHubDashboard/>
            </div> 

            <div className="hide-on-large-only" style={stylesPadding15}>
                <GitHubDashboard/>
            </div> 
         </div>
         
        );
    }
}

export default GithubContainer;









