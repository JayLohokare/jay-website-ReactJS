import React, { Component } from 'react';

const styleNav = {
	zIndex: '9997', 
	position:'fixed',
	width: '100vw',
	height: '13px',
	opacity : '0.65'
  }

class ExperienceNavbar extends Component {
	render() {
	  return (
		<div>
			<div className="navbar-fixed " style={styleNav}>
				<nav>
					<div className="grey darken-4 nav-wrapper"></div>
				</nav>
			</div>
		</div>
		);	
	}
}


export default ExperienceNavbar;

