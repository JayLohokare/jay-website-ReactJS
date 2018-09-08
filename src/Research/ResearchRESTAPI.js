import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import M from 'materialize-css';
import ResearchCards from './ResearchCards';

const researchAPI = 'http://18.219.99.237:8000/research/'

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
    axios.get(researchAPI)
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
         <ResearchCards data={data} />
        
      </div>
      	
    );
  }
}

export default ResearchRESTAPI;