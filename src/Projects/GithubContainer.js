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

            <div class="navbar-fixed hide-on-large-only" >
					<nav>
						<div className="grey darken-4 nav-wrapper">
						<ul id="nav-mobile" className="left hide-on-med-and-down" style={stylesProjectsNavBar}>
							<li>Projects</li>
						</ul>
						</div>
					</nav>
			</div>

            <div style={stylesPadding15}>
                <div className="hide-on-large-only">
                    <br></br>
                </div>
                <div className="hide-on-med-and-down">
                    <br/>
                </div>

                
                <GitHubDashboard/>
                
            </div>

         </div> 
        );
    }
}

export default GithubContainer;









