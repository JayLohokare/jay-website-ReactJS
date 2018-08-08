import React, { Component } from 'react';
import axios from 'axios';
import ProjectCards from './ProjectCards'
import Loader from '../Loader'

const projectsAPI = 'http://18.219.99.237:8000/projects/'

class ProjectRESTAPI extends Component {

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

    {this.log()}
    if (error) {
      return <p>{error.message}</p>;
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