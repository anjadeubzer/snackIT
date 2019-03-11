import React, { Component } from 'react';

// @material-ui components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// helper components
import PropTypes from 'prop-types';

//helper functions
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
	heroSection: {
		// backgroundColor: theme.palette.background.paper,
	},
	heroContent: {
		maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4,
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
			<section className={classes.heroSection}>
				<div className={classes.heroContent}>

					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						Welcome
					</Typography>

					<Typography variant="h6" align="center" color="textSecondary" paragraph>
						Choose your snack …
					</Typography>

					<div className={classes.heroButtons}>
						<Grid container spacing={16} justify="center">
							<Grid item>
								<Button variant="contained" color="primary">
									Search
								</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" color="primary">
									Filter
								</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" color="primary">
									Favorites
								</Button>
							</Grid>
						</Grid>
					</div>
				</div>
			</section>
		)
	}
}

SnackHero.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles( styles )( SnackHero );