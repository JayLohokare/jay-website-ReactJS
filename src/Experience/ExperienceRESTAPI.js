import React, { Component } from 'react';
import axios from 'axios';
import ExperienceCards from './ExperienceCards';
import Loader from '../Components/Loader';
import M from 'materialize-css';

const experienceAPI = 'https://jaylohokare.ml:8000/experience/'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
}

class ExperienceRESTAPI extends Component {

  showError(){
      M.toast('Something went wrong trying to fetch experience', 4000, 'rounded');
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
    axios.get(experienceAPI, null, axiosConfig)
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
      this.showError()
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