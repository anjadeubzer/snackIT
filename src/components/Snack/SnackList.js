import React, { Component } from 'react';

// @material-ui components
import Grid from '@material-ui/core/Grid';

// helper components
import PropTypes from 'prop-types';

// helper functions
import { withStyles } from '@material-ui/core/styles';

// child components
import SnackItem from '../Snack/SnackItem';



const styles = theme => ({
	listSection: {
		// display: 'flex',
		// flexWrap: 'wrap',
		// marginLeft: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		// marginLeft: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
	},
});



class SnackList extends Component {

	constructor() {
		super();
		this.state = {
			snacks: [],
			filteredSnacks: [],
		};
	};

	componentWillMount() {
		this.getSnackItems();
	}



	// fetch the data from wordpress
	getSnackItems = () => {
		// let dataURL = "http://hackathon.local/wp-json/wp/v2/snack";
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


	// render our contentWrapper
	render() {
		const { classes } = this.props;

		return(
			<section className={classes.listSection}>
				{ this.state.snacks ? (

					<Grid container  className={classes.container} spacing={24}>
						{Object.keys( this.state.snacks ).map( key => (
							<Grid item xs={12} sm={6} lg={4} xl={2} key={ key } index={ key }>
								<SnackItem snack={ this.state.snacks[key] }/>
							</Grid>
						))}
					</Grid>

				) : <div>'No Snacks here'</div>
				}
			</section>
		);
	}

}

SnackList.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(SnackList);