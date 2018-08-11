import React, { Component } from 'react';
import axios from 'axios';
import ProjectCards from './ProjectCards';
import Loader from '../Loader';
import M from 'materialize-css';



const projectsAPI = 'http://18.219.99.237:8000/projects/'

class ProjectRESTAPI extends Component {

  showGitError(){
      M.toast('Something went wrong trying to fetch projects :(', 4000);
    }

  log(){
    console.log("This is the data" + this.state.data)
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }



  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(projectsAPI)
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
      console.log("Projects API error.");
      this.showGitError()
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <ProjectCards data={data} />
    );
  }
}

export default ProjectRESTAPI;