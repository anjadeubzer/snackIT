import React, { Component } from 'react';

// main components
import SplashStart from './components/SplashScreen/SplashStart';
import NavBar from './components/NavBar';
import SnackHero from './components/SnackHero';
import SnackList from './components/Snack/SnackList';
// import Cart from './components/Cart/Cart';

// styles
import 'typeface-roboto';
import './App.css';



import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/index';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			light: '#5db8ff',
			main: '#0088ce',
			dark: '#005b9d',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ffbd45',
			main: '#fb8c00',
			dark: '#c25e00',
			contrastText: '#fff',
		},
	},
});



class App extends Component {

	state = {
		snacks: [],
		snackGroups: [],
		filteredSnacks: [],

		searchArray: [],
		searchString: "",
	};

	componentWillMount() {
		this.getSnackItems();
	}


	// fetch the data from wordpress
	getSnackItems = () => {
		// let dataURL = "http://hackathon.local/wp-json/wp/v2/";
		let dataURL = "https://snackit.ritapbest.io/wp-json/wp/v2/";

		fetch(dataURL + 'snack?_embed=1&per_page=100')
			.then(res => res.json())
			.then(res => {
				this.setState({
					snacks: res,
					filteredSnacks: res,
			  	})
			});

		fetch(dataURL + 'snack_groups')
			.then(res => res.json())
			.then(res => {
				this.setState({
					snackGroups: res,
				})
			});
	};


	// filter function
	filterSnacks = ( filterTerm ) => {
		let filteredSnacks = this.state.snacks;

		function escapeRegExp(s) {
			return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
		}

		const theWords = filterTerm
			.split(/\s+/g)
			.map(s => s.trim())
			.filter(s => !!s);

		const hasTrailingSpace = filterTerm.endsWith(" ");

		const searchRegex = new RegExp(
			theWords
				.map((oneWord, i) => {
					if (i + 1 === theWords.length && !hasTrailingSpace) {
						// The last word - ok with the word being "startswith"-like
						return `(?=.*\\b${escapeRegExp( oneWord )})`;
					} else {
						// Not the last word - expect the whole word exactly
						return `(?=.*\\b${escapeRegExp( oneWord )}\\b)`;
					}
				})
				.join("") + ".+",
			"gi" // gi means case insensitiv
		);

		filteredSnacks = filteredSnacks.filter(( snack ) => {

			if (
				searchRegex.test( snack.title.rendered ) === true

				|| searchRegex.test( snack.meta.snack_brand ) === true
				|| searchRegex.test( snack.meta.snack_price ) === true
				|| searchRegex.test( snack.meta.snack_size ) === true
				|| searchRegex.test( snack.meta.snack_description ) === true

			) {
				return true;
			}
			else {
				return false;
			}
		});

		this.setState({
			filteredSnacks
		})
	};

	filterSnacksByCategory = ( searchArray ) => {

	};

	// getting State from Search
	typeSearch = ( searchString ) => {
		this.setState({
			searchString: searchString,
		});
		this.filterSnacks( searchString );
		console.log( searchString );
	};

	// getting State from Search
	filterSearch = ( searchArray ) => {
		this.setState({
			searchArray: searchArray,
		});
		this.filterSnacksByCategory( searchArray );
		console.log( searchArray );
	};



	render() {
		return (
			<MuiThemeProvider theme={theme}>
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
						<SnackHero
							filterSearch={this.filterSearch}
							typeSearch={this.typeSearch}
							snackGroups={this.state.snackGroups}
						/>

						{/** -- list of snacks
						 * a grid with grid items expanding on touch/click
						 * todo: expanding on click
						 * todo: buy with one click ( has to be a simple fast process again ) **/}
						<SnackList snacks={this.state.filteredSnacks} />

					</main>


					{/** -- shortcut link to current checkouts and archived checkouts **/}
					{/*<Cart/>*/}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
