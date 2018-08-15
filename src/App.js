import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

class App extends Component {
  render() {
    
    return (
       
	    <Switch>
	      <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
	    </Switch>
    );
  }
}

export default App;
    