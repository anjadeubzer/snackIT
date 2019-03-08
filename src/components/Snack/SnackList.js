import React, { Component } from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// child component snackItem
import SnackItem from '../Snack/SnackItem';



class SnackList extends Component {

	state = {
		snacks: [],
		searchString: ''
	};

	constructor() {
		super();
		this.getSnackItems();
	};


	getSnackItems = () => {
		// let dataURL = "http://hackathon.local/wp-json/wp/v2/snack?_embed";
		// let dataURL = "http://hackathon.local/wp-json/wp/v2/snack";
		let dataURL = "https://snackit.ritapbest.io/wp-json/wp/v2/snack";

		fetch(dataURL)
			.then(res => res.json())
			.then(res => {
				this.setState({ snacks: res })
			})
	};


	render() {
		return(
			<div>{ this.state.snacks ? (
						<div>
							<TextField style={ { padding: 24 } }
									   id="searchInput"
									   placeholder={"Search for Snacks"}
									   margin="normal"
									   onChange={ this.onSearchInputChange }
							/>
							{/*<TagCloudFilter>*/}
							<Grid container spacing={24} style={{padding: 24}}>
								{Object.keys( this.state.snacks ).map( key => (
									<Grid item xs={12} sm={6} lg={4} xl={2} key={ key } index={ key }>
										<SnackItem snack={ this.state.snacks[key] }/>
									</Grid>
								))}
							</Grid>
						</div>
					) : <div>'No Snacks here'</div>
				}
			</div>
		);
	}

}

export default SnackList;