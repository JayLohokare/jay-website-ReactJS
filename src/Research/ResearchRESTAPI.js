import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import M from 'materialize-css';
import ResearchCards from './ResearchCards';

const researchAPI = 'https://e517351b.us-south.apigw.appdomain.cloud/jaylohokare/research/'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*"
  }
}

class ResearchRESTAPI extends Component {

  showGitshowErrorError(){
      M.toast('Something went wrong trying to fetch research', 4000, 'rounded');
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
    axios.get(researchAPI, null, axiosConfig)
      .then(result => this.setState({
        data: result.data,
        isLoading: false
      }))
      .catch(error => {
        // console.log("The error is " + error);
        this.setState({
        error,
        isLoading: false
      })
    }
    ); 
  }



  render() {
    const {data, isLoading, error } = this.state;

    if (error) {
      this.showError()
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
         <ResearchCards data={data.data} />
        
      </div>
      	
    );
  }
}

export default ResearchRESTAPI;
