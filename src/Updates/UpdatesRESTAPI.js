import React, { Component } from 'react';
import axios from 'axios';
import UpdatesCards from './UpdatesCards';
import Loader from '../Components/Loader';
import M from 'materialize-css';


const updatesAPI = 'https://e517351b.us-south.apigw.appdomain.cloud/jaylohokare/updates'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*"
  }
}

class UpdatesRESTAPI extends Component {

  showGitError(){
   	
      M.toast('Something went wrong fetching updates', 4000, 'rounded');
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
    axios.get(updatesAPI, null, axiosConfig)
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
      console.log("Updates API error.", error);
      this.showGitError()
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
        <div className="row">
          <UpdatesCards data={data.data} /> 
        </div>

      </div>
      
			
    );
  }
}

export default UpdatesRESTAPI;
