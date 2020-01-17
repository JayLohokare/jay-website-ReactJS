import React, { Component } from 'react';
import axios from 'axios';
import ProjectCards from './ProjectCards';
import Loader from '../Components/Loader';
import M from 'materialize-css';


import GitHubDashboard from './GitHubDashboard';

const projectsAPI = 'https://e517351b.us-south.apigw.appdomain.cloud/jaylohokare/projects/'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*"
  }
}

class ProjectRESTAPI extends Component {

  showGitError(){
   	
      M.toast('Oops! API Error. Try switching off VPN/Proxy.', 4000, 'rounded');
    }

  log(){
    console.log("This is the data" + this.state.data)
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
  }



  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(projectsAPI, null, axiosConfig)
      .then(result => this.setState({
        data: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }



  render() {
    const { data, isLoading, error } = this.state;

    
    if (error) {
      console.log("Projects API error.", error);
      this.showGitError()
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
        <div className="row">
          <ProjectCards data={data.data} /> 
        </div>

        <div className="row"> 
			    <GitHubDashboard />
        </div>
        
      </div>
      
			
    );
  }
}

export default ProjectRESTAPI;
