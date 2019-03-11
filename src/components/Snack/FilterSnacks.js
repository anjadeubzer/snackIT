import React, { Component } from 'react';

// @material-ui components
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';

// helper components
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// child components



const styles = theme => ({
	filterSnackGroups: {
		// backgroundColor: theme.palette.background.paper,
	},
});



class FilterSnacks extends Component {

	constructor() {
		super();
		this.state = {
		}
	}



	// render our searchField
	render() {
		const { classes } = this.props;
		return (
				<div className={classes.filterSnackGroups}>

				</div>
		)
	}
}

FilterSnacks.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles( styles )( FilterSnacks );