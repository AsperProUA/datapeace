import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Users from './components/Users';
import User from './components/User';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userPageActive: false,
		}
	}
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<NavBar />
					<div className='mt-5'>
						<Switch>
							<Route exact path='/user/:id' render={() => {
								return <User />
							}} />
							<Route path='/' render={() => {
								return <Users />
							}} />
						</Switch>
					</div>

				</div>
			</BrowserRouter>
		);
	}
}

export default App;
