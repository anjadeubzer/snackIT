import React, { Component } from 'react';

// @material-ui components
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';

// helper components
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// child components
import SearchSnacks from '../Snack/SearchSnacks';
import FilterSnacks from '../Snack/FilterSnacks';



const styles = theme => ({
	filterSection: {
		// backgroundColor: theme.palette.background.paper,
	},
	filterContent: {
		// backgroundColor: theme.palette.background.paper,
	},
});



class SnackHero extends Component {

	constructor() {
		super();
		this.state = {
		}
	}



	// render our searchField
	render() {
		const { classes } = this.props;
		return (
			<section className={classes.filterSection}>
				<div className={classes.filterContent}>
					<SearchSnacks />
					<FilterSnacks />
				</div>
			</section>

		)
	}
}

SnackHero.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles( styles )( SnackHero );