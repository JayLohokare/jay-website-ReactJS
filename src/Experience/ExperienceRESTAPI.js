import React, { Component } from 'react';
import axios from 'axios';
import ExperienceCards from './ExperienceCards';
import Loader from '../Components/Loader';
import M from 'materialize-css';

const experienceAPI = 'http://18.219.99.237:8000/experience/'

class ExperienceRESTAPI extends Component {

  showGitError(){
      M.toast('Something went wrong trying to fetch experience :(', 4000, 'rounded');
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
    axios.get(experienceAPI)
      .then(result => this.setState({
        data: result.data,
        isLoading: false
      }))
      .catch(error => {
        console.log("The error is " + error);
        this.setState({
        error,
        isLoading: false
      })
     
    }
    );
      
  }



  render() {
    const { data, isLoading, error } = this.state;

    
    if (error) {
      console.log("Experience API error.");
      this.showGitError()
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
        <ExperienceCards data={data} />
        
      </div>
      
			
    );
  }
}

export default ExperienceRESTAPI;