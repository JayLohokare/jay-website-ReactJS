	import React, { Component } from 'react';
	import axios from 'axios';
	import Loader from '../Loader'
	import CalendarHeatmap from 'react-calendar-heatmap';


	const EventsAPI1 = 'https://api.github.com/users/jayLohokare/events?page=1'
	const EventsAPI2 = 'https://api.github.com/users/jayLohokare/events?page=2'
	const EventsAPI3 = 'https://api.github.com/users/jayLohokare/events?page=3'
	const EventsAPI4 = 'https://api.github.com/users/jayLohokare/events?page=4'

	const ReposAPI1 = 'https://api.github.com/users/jayLohokare/repos?page=1'
	const ReposAPI2 = 'https://api.github.com/users/jayLohokare/repos?page=2'
	const ReposAPI3 = 'https://api.github.com/users/jayLohokare/repos?page=3'

	///projects/columns/:column_id/cards


	const footerStyle = {
		paddingLeft : '300px',
		display: 'flex',
		minHeight: '50vh',
		flexDirection: 'column',
		flex:  'auto'
	}

	const footerAddPadStyle = {
		paddingTop: '200px',
		marginTop: '250px',
		paddingLeft : '300px'
	}

	const footerSmallAddPadStyle = {
		paddingTop: '00px',
		marginTop: '720px'

	}

	class GitHubDashboard extends Component {
		
		getReposCount(){
			var repo1 = this.state.repos1;
			var repo2 = this.state.repos2;
			var repo3 = this.state.repos3;
			
			return repo1.length + repo2.length + repo3.length
		}


		getGitCommits(){
			var commits = this.state.data1;
			commits = commits.concat(this.state.data2);
			commits = commits.concat(this.state.data3);
			commits = commits.concat(this.state.data4);

			console.log("Data 1 " + commits.length);
			console.log("Data 2 " + this.state.data2.length);
			console.log("Data 3 " + this.state.data3.length);

			var dict = {};

			for (var key in commits) {
				var commit = commits[key];
				var created_date = commit['created_at'].substring(0, 10);

				if(dict.hasOwnProperty(created_date)){
					dict[created_date] = dict[created_date] + 1
				}
				else{
					dict[created_date] = 1
				}
			}

			var dataToRet = []

			for(commit in dict){
				var temp = {}
				temp['date'] = commit
				temp['count'] = dict[commit]
				dataToRet.push(temp)
			}
			
			return dataToRet;
		}


		constructor(props) {
			super(props);

			var today = new Date();
			var now =  new Date();
			var oneYearBefore = new Date(now.setDate(now.getDate()-91));
			var yearBeforeStr = oneYearBefore.getFullYear() + '-' + (oneYearBefore.getMonth() + 1) + '-' + oneYearBefore.getDate();
			var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


			this.state = {
				today: date,
				yearBefore: yearBeforeStr,

				isLoading: false,
				error: null,

				data1: [],
				data2: [],
				data3: [],
				data4: [],

				repos1: [],
				repos2: [],
				repos3: []
			};
		}

		


		componentDidMount() {
			this.setState({ isLoading: true });


			
			axios.get(EventsAPI1)
			.then(result => this.setState({
				data1: result.data,
				isLoading: false
			}))
			.catch(error => this.setState({
		    	error,
		    	isLoading: false
		    }));
			

			axios.get(EventsAPI2)
			.then(result => this.setState({
				data2: result.data,
				isLoading: false
			}))
			.catch(error => this.setState({
		    	error,
		    	isLoading: false
		    }));
			 

			axios.get(EventsAPI3)
			.then(result => this.setState({
				data3: result.data,
				isLoading: false
			}))
			.catch(error => this.setState({
		    	error,
		    	isLoading: false
		    }));
			 

			axios.get(EventsAPI4)
			.then(result => this.setState({
				data4: result.data,
				isLoading: false
			}))
			.catch(error => this.setState({
		    	error,
		    	isLoading: false
		    }));
			 



		    //Making 3 seperate API calls for getting 90 projects from GIT
		    axios.get(ReposAPI1)
		    .then(result => this.setState({
		    	repos1: result.data,
		    	isLoading: false
		    }))
		    .catch(error => this.setState({
		    	error,
		    	isLoading: false
		    }));


		    axios.get(ReposAPI2)
		    .then(result => this.setState({
		    	repos2: result.data,
		    	isLoading: false
		    }))
		    .catch(error => this.setState({
		    	error,
		    	isLoading: false
		    }));


		    axios.get(ReposAPI3)
		    .then(result => this.setState({
		    	repos3: result.data,
		    	isLoading: false
		    }))
		    .catch(error => this.setState({
		    	error,
		    	isLoading: false
		    }));

		}



		render() {
			const { isLoading, error, repos } = this.state;

			if (error) {
				return <p>{error.message}</p>;
			}

			if (isLoading) {
				return <Loader />;
			}

			return (

				<div>

				<div class="hide-on-med-and-down" style={footerAddPadStyle}>
				<footer class="red page-footer" style={footerStyle}>
				<div class="container">
				<div class="row">

				<div class="row" >

				<div class = "col hide-on-med-and-down l12 " >
				<div class="card white blue-grey text-darken-3" >
				<div class="white valign-wrapper card-content light-blue-text text-darken-3">
				<div  >
				<CalendarHeatmap
				horizontal={true}
				startDate={this.state.yearBefore}
				endDate={this.state.today}
				values={this.getGitCommits()}
				classForValue={(value) => {
					if (!value) {
						return 'color-empty';
					}
					if (value.count>=4){
						return 'color-scale-4'
					}
					return `color-scale-${value.count}`;
				}}
				/>
				</div>
				</div>
				</div>
				</div>

				<div class = "col hide-on-med-and-down l12 " >
				<div class="card white blue-grey text-darken-3" >
				<div class="white   valign-wrapper card-content light-blue-text text-darken-3">
				<div>
				<div  >
				{this.getReposCount()}
				</div>
				</div>
				</div>
				</div>
				</div>

				</div>
				</div>
				</div>
				</footer>
				</div>


				<div class="hide-on-large-only" style={footerSmallAddPadStyle}>
				<footer class="red page-footer" style={footerStyle}>
				<div class="container">
				<div class="row">

				<div class="row" >

				<div class = "col hide-on-med-and-down offset-l4 l4 " >
				<div class="card white blue-grey text-darken-3" >
				<div class="white valign-wrapper card-content light-blue-text text-darken-3">
				<div  >
				<CalendarHeatmap
				horizontal={true}
				startDate={this.state.yearBefore}
				endDate={this.state.today}
				values={this.getGitCommits()}
				classForValue={(value) => {
					if (!value) {
						return 'color-empty';
					}
					if (value.count>=4){
						return 'color-scale-4'
					}
					return `color-scale-${value.count}`;
				}}
				/>
				</div>
				</div>
				</div>
				</div>

				<div class = "col hide-on-med-and-down offset-l4 l4 " >
				<div class="card white blue-grey text-darken-3" >
				<div class="white center valign-wrapper card-content light-blue-text text-darken-3">
				<div>
				<div class="center center-align">
				{this.getReposCount()}
				</div>
				</div>
				</div>
				</div>
				</div>

				</div>
				</div>
				</div>
				</footer>
				</div>


				</div>




				);
		}

	}


	export default GitHubDashboard;


