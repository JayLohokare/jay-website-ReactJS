	import React, { Component } from 'react';
	import axios from 'axios';
	import CalendarHeatmap from 'react-calendar-heatmap';
	import M from 'materialize-css';


	const EventsAPI1 = 'https://api.github.com/users/jayLohokare/events?page=1'
	const EventsAPI2 = 'https://api.github.com/users/jayLohokare/events?page=2'
	const EventsAPI3 = 'https://api.github.com/users/jayLohokare/events?page=3'
	const EventsAPI4 = 'https://api.github.com/users/jayLohokare/events?page=4'

	const ReposAPI1 = 'https://api.github.com/users/jayLohokare/repos?page=1'
	const ReposAPI2 = 'https://api.github.com/users/jayLohokare/repos?page=2'
	const ReposAPI3 = 'https://api.github.com/users/jayLohokare/repos?page=3'

	const footerStyle = {
		display: 'flex',
		minHeight: '20%',
		maxHeight: '100%',
		flexDirection: 'column',
		flex:  'auto',
		padding: '20px',
		outlineStyle: 'solid',
		marginTop: '100px',
		backgroundColor: 'rgb(255, 0, 0, 0.3)',
	}


	const footerSmallStyle = {
		display: 'flex',
		minHeight: '20%',
		maxHeight: '100%',
		flexDirection: 'column',
		flex:  'auto',
		padding: '50px',
		outlineStyle: 'solid',
		
		background:'rgb(255, 0, 0)',
		backgroundColor: 'rgb(255, 0, 0, 0.3)',
	}

	const footerAddPadStyle = {
		paddingLeft : '300px'
	}

	const footerSmallAddPadStyle = {
		paddingTop: '00px',
		marginTop: '10px',
	}
 

	const padding30px ={
		paddingLeft: '50px',
		paddingRight: '50px',
	}
	 

	const gitImageStyle = {
		padding: '15px',
		maxWidth: '60%',
		maxHeight: '100%',
		float: 'center',
		centerAlign: 'true'
	}

	const debug = true;

	

	class GitHubDashboard extends Component {

		getGitDataFromCache(){
			const checkIfGitCached = localStorage.getItem('Git') 
			const checkIfCommitsCached = localStorage.getItem('GitCommits');
			
			if (checkIfGitCached && checkIfCommitsCached) {
				if(debug){
					console.log("Got Github API data from Cache")
				}
				this.setState({ 
					repos1: JSON.parse(localStorage.getItem('Git1')),
					repos2: JSON.parse(localStorage.getItem('Git2')),
					repos3: JSON.parse(localStorage.getItem('Git3')),
					data1: JSON.parse(localStorage.getItem('GitCommit1')),
					data2: JSON.parse(localStorage.getItem('GitCommit2')),
					data3: JSON.parse(localStorage.getItem('GitCommit3')),
					data4: JSON.parse(localStorage.getItem('GitCommit4')),
				});
			  
			}
			else{
				M.Toast.removeAll();
				M.toast('Github components may not load as API limit exceeded', 4000, 'rounded');
			}
		}
		
		setGitCache(type, count){
			if(debug){
				console.log("Got Github API data from web", type, count)
			}

			if (type == "Repos"){
				if (count == 'one'){
					localStorage.setItem('Git1', JSON.stringify(this.state.repos1));
					localStorage.setItem('Git1State', true);
				}
				if (count == 'two'){
					localStorage.setItem('Git2',  JSON.stringify(this.state.repos2));
					localStorage.setItem('Git2State', true);
				}
				if (count == 'three'){
					localStorage.setItem('Git3',  JSON.stringify(this.state.repos3));
					localStorage.setItem('Git3State', true);
				}
	
				if(localStorage.getItem('Git1State') && localStorage.getItem('Git2State') && localStorage.getItem('Git3State')){
					
					localStorage.setItem('Git', true);
					
				}
			}

			else if(type="Commits"){
				if (count == 'one'){
					localStorage.setItem('GitCommit1', JSON.stringify(this.state.data1))
					localStorage.setItem('Git1CommitState', true);
				}
				if (count == 'two'){
					localStorage.setItem('GitCommit2',  JSON.stringify(this.state.data2))
					localStorage.setItem('Git2CommitState', true);
				}
				if (count == 'three'){
					localStorage.setItem('GitCommit3',  JSON.stringify(this.state.data3))
					localStorage.setItem('Git3CommitState', true);
				}

				if (count == 'four'){
					localStorage.setItem('GitCommit4',  JSON.stringify(this.state.data4))
					localStorage.setItem('Git4CommitState', true);
				}
	
				if(localStorage.getItem('Git1CommitState')  && localStorage.getItem('Git4CommitState') && localStorage.getItem('Git2CommitState') && localStorage.getItem('Git3CommitState')){
					localStorage.setItem('GitCommits', true);
				}
			}

			const checkIfGitCached = localStorage.getItem('Git') 
			const checkIfCommitsCached = localStorage.getItem('GitCommits');
			if (checkIfGitCached && checkIfCommitsCached) {
				
			}
		}
		
		getReposCount(){
			var repo1 = this.state.repos1
			var repo2 = this.state.repos2
			var repo3 = this.state.repos3

			return repo1.length + repo2.length + repo3.length 
		}


		getGitCommits(){
			// console.log("GitCommit1 ", this.state.data1)
			var commits = this.state.data1
			commits = commits.concat( ((this.state.data2)));
			commits = commits.concat( ((this.state.data3)));
			commits = commits.concat( ((this.state.data4)));


			var i = 0;
			for (var commit in commits){
				i += 1;
			}


			this.state.commitsCount = i;
			this.state.allCommitsReceived = true;

			var dict = {};

			commit = JSON.parse(JSON.stringify(commits))
				
			
			for (var key in commits) {
				
				var commit = commits[key]
				// console.log(commit)
				
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
			.then(result => {
				this.setState({
				data1: result.data,
				isLoading: false
			}),
			this.setGitCache("Commits", 'one')
			}
			)
			.catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));
			

			axios.get(EventsAPI2)
			.then(result => {
				this.setState({
				data2: result.data,
				isLoading: false
			}),
			this.setGitCache("Commits", 'two')
			}
			)
			.catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));
			 

			axios.get(EventsAPI3)
			.then(result => { this.setState({
				data3: result.data,
				isLoading: false
			}),
			this.setGitCache("Commits", 'three')
			})
			.catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));
			 

			axios.get(EventsAPI4)
			.then(result => {this.setState({
				data4: result.data,
				isLoading: false
			}),
			this.setGitCache("Commits", 'four')
			})
			.catch(error => this.setState({
		    	errorGit : error,
		    	isLoading: false
		    }));
			 



		    //Making 3 seperate API calls for getting 90 projects from GIT
			axios.get(ReposAPI1)
		    .then(result => {
				this.setState({
		    	repos1: result.data,
		    	isLoading: false
			}),
			this.setGitCache("Repos", 'one')})
			.catch(error => {
				this.setState({
					errorGit : error,
					isLoading: false
				})
			}	
			);


		    axios.get(ReposAPI2)
			.then(result => {
				this.setState({
					repos2: result.data,
					isLoading: false
				}),
				this.setGitCache("Repos", 'two')
			}
				
			)
			.catch(error => 
				this.setState({
					errorGit : error,
					isLoading: false
				}),
			);


		    axios.get(ReposAPI3)
			.then(result => {
				this.setState({
					repos3: result.data,
					isLoading: false
				}),
				this.setGitCache("Repos", 'three')
			}
			)
			.catch(error => {
				
				this.getGitDataFromCache(),
				this.setState({
					errorGit : error,
					isLoading: false
				})
			}
			);

			// this.getGitDataFromCache();

		}



		render() {
			
			return (

				<div className="row">
					<div className="hide-on-med-and-down" style={footerAddPadStyle}>
						<footer className="  page-footer" style={footerStyle}>
							<div className="light-blue-text text-darken-3">
								<div className="row ">
									<div  className="col l4 offset-l4 ">
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
								
								<div className="row center ">
									<div className="col offset-l4 l4 center ">
										<div className="center center-align">
											<img href="http://www.github.com/JayLohokare" alt="Github" className="" src="images/Git.png" style={gitImageStyle}/>
										</div>
										<p className="white-text center">
										{this.getReposCount()} Repositories 
										</p>
										<p className="white-text center">
										{this.state.commitsCount} commits in past 90 days
										</p>
									<p className="white-text center">Visit my Github profile for projects</p>
									</div>
								</div>
							</div>
						</footer>
					</div>


					<div className="hide-on-large-only" style={footerSmallAddPadStyle}>
						<footer className="  page-footer" style={footerSmallStyle}>
							<div className="light-blue-text text-darken-3">
								<div className="row ">
									<div className="col  s12 m6 offset-m3" style={padding30px}>
										<div  className="center">
										<CalendarHeatmap
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

								<div className="col  s12 m6 offset-m3 center">
									<div className="center center-align">
										<img href="http://www.github.com/JayLohokare" alt="Github" className="" src="images/Git.png" style={gitImageStyle}/>
									</div>
									<p className="white-text center">
										{this.getReposCount()} Repositories 
									</p>
									<p className="white-text center">
										{this.state.commitsCount} Commits in past 90 days
									</p>
									<p className="white-text center">Visit my Github profile for more projects</p>
								</div>	 

							</div>
						</footer>
					</div>


				</div>




				);
		}

	}


	export default GitHubDashboard;


