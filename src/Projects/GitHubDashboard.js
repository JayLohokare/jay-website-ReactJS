	import React, { Component } from 'react';
	import axios from 'axios';
	import Loader from '../Components/Loader'
	import CalendarHeatmap from 'react-calendar-heatmap';
	import M from 'materialize-css';


	const EventsAPI1 = 'https://api.github.com/users/jayLohokare/events?page=1'
	const EventsAPI2 = 'https://api.github.com/users/jayLohokare/events?page=2'
	const EventsAPI3 = 'https://api.github.com/users/jayLohokare/events?page=3'
	const EventsAPI4 = 'https://api.github.com/users/jayLohokare/events?page=4'

	const ReposAPI1 = 'https://api.github.com/users/jayLohokare/repos?page=1'
	const ReposAPI2 = 'https://api.github.com/users/jayLohokare/repos?page=2'
	const ReposAPI3 = 'https://api.github.com/users/jayLohokare/repos?page=3'

	///projects/columns/:column_id/cards

	const footerStyle = {
		display: 'flex',
		minHeight: '20%',
		maxHeight: '30%',
		flexDirection: 'column',
		flex:  'auto',
		padding: '50px',
		outlineStyle: 'solid'
	}


	const footerSmallStyle = {
		display: 'flex',
		minHeight: '20%',
		maxHeight: '100%',
		flexDirection: 'column',
		flex:  'auto',
		padding: '50px',
		outlineStyle: 'solid'
	}

	const footerAddPadStyle = {
		paddingTop: '200px',
		marginTop: '250px',
		paddingLeft : '300px'
	}

	const footerSmallAddPadStyle = {
		paddingTop: '00px',
		marginTop: '720px',
	}

	const style400 = {
		height:'300px',
	}


	const styleSmall400 = {
		height:'30%',
		paddingTop: '50px',
	}

	const gitImageStyle = {
		padding: '15px',
		maxWidth: '60%',
		maxHeight: '100%',
		float: 'center',
		centerAlign: 'true'
	}

	const paddingRight = {
		paddingRight: '100px',
	}

	class GitHubDashboard extends Component {

		showGitError(){
			M.toast('Try again after some time to get correct Github statistics', 4000);
		}
		
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


			var i = 0;
			for (var commit in commits){
				i += 1;
			}


			this.state.commitsCount = i;
			this.state.allCommitsReceived = true;

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
				errorGit: null,

				data1: [],
				data2: [],
				data3: [],
				data4: [],

				repos1: [],
				repos2: [],
				repos3: [],

				commitsCount: 0,
				allCommitsReceived: false
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
		    	errorGit : error,
		    	isLoading: false
		    }));
			

			axios.get(EventsAPI2)
			.then(result => this.setState({
				data2: result.data,
				isLoading: false
			}))
			.catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));
			 

			axios.get(EventsAPI3)
			.then(result => this.setState({
				data3: result.data,
				isLoading: false
			}))
			.catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));
			 

			axios.get(EventsAPI4)
			.then(result => this.setState({
				data4: result.data,
				isLoading: false
			}))
			.catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));
			 



		    //Making 3 seperate API calls for getting 90 projects from GIT
		    axios.get(ReposAPI1)
		    .then(result => this.setState({
		    	repos1: result.data,
		    	isLoading: false
		    }))
		    .catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));


		    axios.get(ReposAPI2)
		    .then(result => this.setState({
		    	repos2: result.data,
		    	isLoading: false
		    }))
		    .catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));


		    axios.get(ReposAPI3)
		    .then(result => this.setState({
		    	repos3: result.data,
		    	isLoading: false
		    }))
		    .catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));

		}



		render() {
			const { isLoading, errorGit} = this.state;

			if (errorGit) {
				console.log("GitHub API error.");
				this.showGitError();
			}


			if (isLoading) {
				return <Loader />;
			}

			return (

				<div>

				<div className="hide-on-med-and-down" style={footerAddPadStyle}>
				<footer className="red page-footer" style={footerStyle}>
				<div className="     light-blue-text text-darken-3">


					<div className="row ">

						<div style={paddingRight} className="  col offset-l3 l3  ">
							<CalendarHeatmap
							style={style400}
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

						<div className="col l4   ">
							<div className="center center-align">
								<img href="http://www.github.com/JayLohokare" alt="Github" className="" src="images/Git.png" style={gitImageStyle}/>
							</div>
							<p className="white-text center">
							{this.getReposCount()} Repositories 
							</p>
							<p className="white-text center">
							{this.state.commitsCount} Commits in past 90 days
							</p>
						</div>

						


					</div>

				</div>
				</footer>
				</div>


				<div className="hide-on-large-only" style={footerSmallAddPadStyle}>
				<footer className="red page-footer" style={footerSmallStyle}>

				<div className="light-blue-text text-darken-3">


					<div className="row ">

						<div className="  col offset-m2 offset-s2 s10 m10">
							<div style={paddingRight} className="center">
							<CalendarHeatmap
							style={styleSmall400}
							horizontal={true}
							startDate={this.state.yearBefore}
							endDate={this.state.today}
							values={this.getGitCommits()}
							classNameForValue={(value) => {
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

						<div className="col  s12 m12">
							<div className="center center-align">
								<img href="http://www.github.com/JayLohokare" alt="Github" className="" src="images/Git.png" style={gitImageStyle}/>
							</div>
							<p className="white-text center">
							{this.getReposCount()} Repositories 
							</p>
							<p className="white-text center">
							{this.state.commitsCount} Commits in past 90 days
							</p>
						</div>	 

				</div>


				</footer>
				</div>


				</div>




				);
		}

	}


	export default GitHubDashboard;


