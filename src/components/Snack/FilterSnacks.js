import React, { Component } from 'react';

// @material-ui components
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

// helper components
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// child components



const styles = theme => ({
	filterSnackGroups: {
		flexGrow: 1,
		minHeight: 80,
		padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px`,
		backgroundColor: theme.palette.primary.light,
		marginBottom: theme.spacing.unit * 4,
	},
	chip: {
		marginRight: theme.spacing.unit,
	}
});



class FilterSnacks extends Component {

	constructor() {
		super();
		this.handler = this.handleClick.bind(this);
		this.state = {
			snackFilter: ""
		}
	}

	handleClick = (e) => {
		this.setState({
			snackFilter: e.target.value
		})

		// this.props.onChange(event.target.value)
	}


	// render our searchField
	render() {
		const { classes, snackGroups } = this.props;
		return (
				<div className={classes.filterSnackGroups}>
					{ snackGroups ? (

						<div>
							{ Object.keys( snackGroups ).map( key => (
								<Chip
									color="primary"
									key={ key }
									index={ key }
									label={ snackGroups[key].name }
									onClick={ this.handleClick }
									className={ classes.chip }
								/>
							))}
						</div>

					) : <div>'No filter tags rendered'</div>
					}
				</div>
		)
	}
}

FilterSnacks.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles( styles )( FilterSnacks );