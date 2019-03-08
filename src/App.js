import React, { Component } from 'react';

// main components
import NavBar from './components/NavBar';
import SnackList from './components/Snack/SnackList';
import Cart from './components/Cart/Cart';

// styles
import './App.css';



class App extends Component {

	render() {
		return (
			<div className="SnackIT">
				<NavBar />
				<header className="SnackIT-header">
					<h1>SnackIT</h1>
					<h3>Hello, these are the Snacks:</h3>

				</header>
				<SnackList />
				{/*{snacks}*/}
				<Cart/>
			</div>
		);
	}
}

export default App;
