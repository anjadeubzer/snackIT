import React, { Component } from 'react';

// main components
import SplashStart from './components/SplashScreen/SplashStart';
import NavBar from './components/NavBar';
import SnackHero from './components/SnackHero';
import SnackFilters from './components/Snack/SnackFilters';
import SnackList from './components/Snack/SnackList';
import Cart from './components/Cart/Cart';

// styles
import './App.css';



class App extends Component {

	render() {
		return (
			<div className="SnackIT">

				{ /** -- Splash Screen on App Start
					* todo: function that loads Splash screens function their condition
					* -- first start ( onboarding - with a little help!? )
					* -- simple quick start ( get the drink quick without hassle )
					* -- after 6pm beer screen ( have fun! ) **/ }
				<SplashStart />

				{ /** user login & links to Settings/FAQs/help email **/ }
				<NavBar />


				<main>

					{ /** Hero unit - a decorative visual header
					    * that helps to understand where you are **/}
					<SnackHero />

					{/** -- quick filter possibilities
					   * todo: create two(three) ways of filtering
					   * It is possible to choose one! no combination for the sake of simplicity (KISS)
					   * 1) tag filtering by showing snackGroups and tags ( search by touch/click )
					   * 2) search input ( search by typing )
					   * 3) favorites - latest checkout products sorted by times of consumption **/}
					<SnackFilters />

					{/** -- list of snacks
					   * a grid with grid items expanding on touch/click
					   * todo: expanding on click
					   * todo: buy with one click ( has to be a simple fast process again ) **/}
					<SnackList />

				</main>


				{/** -- shortcut link to current checkouts and archived checkouts **/}
				{/*<Cart/>*/}
			</div>
		);
	}
}

export default App;
