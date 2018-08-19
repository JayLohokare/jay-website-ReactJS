import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Research from './Research';
import Education from './Education';

class App extends Component {
  render() {
    
    return (
       
	    <Switch>
	      <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/experience" component={Experience}/>
        <Route exact path="/research" component={Research}/>
        <Route exact path="/education" component={Education}/>
	    </Switch>
    );
  }
}

export default App;
    