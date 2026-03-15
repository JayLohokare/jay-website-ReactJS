import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Research from './Research';
import Education from './Education';
import Updates from './Updates';

class App extends Component {
  render() {
    
    return (
       
	    <Switch>
	      <Route exact path="/" component={Home}/>
        <Route exact path="/research" component={Research}/>
	    </Switch>
    );
  }
}

export default App;
    