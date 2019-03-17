import React, { Component } from 'react';

// main components
import SplashStart from './components/SplashScreen/SplashStart';
import NavBar from './components/NavBar';
import SnackHero from './components/SnackHero';
import SearchSnacks from './components/Snack/SearchSnacks';
import SnackList from './components/Snack/SnackList';
import Cart from './components/Cart/Cart';

// styles
import './App.css';



class App extends Component {

	state = {
		snacks: [],
		filteredSnacks: [],

		searchArray: [],
		searchString: "",
	};

	componentWillMount() {
		this.getSnackItems();
	}


	// fetch the data from wordpress
	getSnackItems = () => {
		let dataURL = "https://snackit.ritapbest.io/wp-json/wp/v2/snack";

		fetch(dataURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					snacks: res,
					filteredSnacks: res,
			  	})
			})
	};


	filterSnacks = ( searchArray ) => {
		let filteredSnacks = this.state.snacks;

		filteredSnacks = filteredSnacks.filter((snack) => {
			let poetName = snack.title.toLowerCase() + snack.snack_description.toLowerCase();
			return poetName.indexOf( searchArray.toLowerCase() ) !== -1;
		});

		this.setState({
			filteredSnacks
		})
	};


	tagSearch = ( searchArray ) => {
		this.setState({
			searchArray: searchArray,
		})
	};
	typeSearch = ( searchString ) => {
		this.setState({
			searchString: searchString,
		})
	};



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
					<SearchSnacks tagSearch={this.tagSearch} typeSearch={this.typeSearch} />

					{/** -- list of snacks
					   * a grid with grid items expanding on touch/click
					   * todo: expanding on click
					   * todo: buy with one click ( has to be a simple fast process again ) **/}
					<SnackList snacks={this.state.filteredSnacks} onChange={this.filterSnacks} />

				</main>


				{/** -- shortcut link to current checkouts and archived checkouts **/}
				{/*<Cart/>*/}
			</div>
		);
	}
}

export default App;
