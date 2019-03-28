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
	root: {
		flexGrow: 1,
		minHeight: 100,
		padding: `0 ${theme.spacing.unit * 3}px`,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		// marginLeft: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
	},
});



class SnackList extends Component {


	// render our contentWrapper
	render() {
		const { classes } = this.props;

		return(
			<section className={classes.root}>
				{ this.props.snacks ? (

					<Grid container  className={classes.container} spacing={24}>
						{Object.keys( this.props.snacks ).map( key => (
							<Grid item xs={12} sm={6} lg={4} xl={3} key={ key } index={ key }>
								<SnackItem   snack={ this.props.snacks[key] }/>
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