import React, { Component } from 'react';
import axios from 'axios';
import EducationCards from './EducationCards';
import Loader from '../Components/Loader';
import M from 'materialize-css';

const educationAPI = 'https://e517351b.us-south.apigw.appdomain.cloud/jaylohokare/education'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*"
  }
}

class EducationRESTAPI extends Component {

  showGitError(){
      M.toast('Something went wrong trying to fetch education', 4000, 'rounded');
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
    axios.get(educationAPI, null, axiosConfig)
      .then(result => this.setState({
        data: result.data.data,
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
      console.log("Education API error.");
      this.showGitError()
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
        <EducationCards data={data} />
        
      </div>
      
			
    );
  }
}

export default EducationRESTAPI;
