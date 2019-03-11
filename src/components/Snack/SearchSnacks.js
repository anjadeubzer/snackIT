import React, { Component } from 'react';

// @material-ui components
import TextField from '@material-ui/core/TextField';

// helper components
import PropTypes from 'prop-types';

//helper functions
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
	formContainer: {
		// display: 'flex',
		// flexWrap: 'wrap',
		// marginLeft: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
	},
	textField: {
		// marginLeft: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
	},
});



class SearchSnacksFilter extends Component {

	constructor() {
		super();
		this.state = {
			snackSearch: ""
		}
	}


	// filter Snacks along with typing your search string
	onSearchChange = (e) => {
		this.setState({
			snackSearch: e.target.value
		});
		// this.props.onChange(e.target.value)
	};

	// render our searchField
	render() {
		const { classes } = this.props;
		return (
			<div >
				<form className={classes.formContainer} noValidate autoComplete="off">
					<TextField
						id="filled-search-full-width"
						className={classes.textField}
						label="search your snack"
						type="search"
						margin="normal"

						fullWidth

						value={ this.state.snackSearch }
						onChange={ this.onSearchChange }
					/>
				</form>
			</div>
		)
	}
}

SearchSnacksFilter.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(SearchSnacksFilter);