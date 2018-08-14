import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Background from './Components/Background';
import HomeContent from './Home/HomeContent';


class Home extends Component {
	render() {
	  return (
	<div>
		<Navbar fixed={false}/>
		<Background/>
		<HomeContent/>
	</div>
		);	
	}
}

      
export default Home;