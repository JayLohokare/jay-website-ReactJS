import React, { Component } from 'react';
import axios from 'axios';
import EducationCards from './EducationCards';
import Loader from '../Components/Loader';
import M from 'materialize-css';

const educationAPI = 'http://18.219.99.237:8000/education/'

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
    axios.get(educationAPI)
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