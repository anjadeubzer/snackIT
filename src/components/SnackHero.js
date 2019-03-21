import React, { Component } from 'react';
import SearchSnacks from './Snack/SearchSnacks';

// @material-ui components
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FilterIcon from '@material-ui/icons/FilterList';

// helper components
import PropTypes from 'prop-types';

//helper functions
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
	heroSection: {
		margin: '0 -20',
		// backgroundColor: theme.palette.background.paper,
	},
	heroContent: {
		// maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 0}px`,
		backgroundColor: theme.palette.primary.light,
	},

	tabsContainer: {
		marginBottom: theme.spacing.unit * 4,
	},
});



class SnackHero extends Component {

	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	// render our searchField
	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<section className={classes.heroSection}>
				<div className={classes.heroContent}>

					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						Welcome
					</Typography>

					<Typography variant="h6" align="center" color="textSecondary" paragraph>
						Choose your snack …
					</Typography>

					<Tabs
						className={classes.tabsContainer}
						value={this.state.value}
						onChange={this.handleChange}
						variant="fullWidth"
						indicatorColor="secondary"
						textColor="secondary"
					>
						<Tab icon={<SearchIcon />} label="Search" />
						<Tab icon={<FilterIcon />} label="Filter" />
						<Tab icon={<FavoriteIcon />} label="My Favorites" />
					</Tabs>



					{/** -- quick filter possibilities
					 * todo: create two(three) ways of filtering
					 * It is possible to choose one! no combination for the sake of simplicity (KISS)
					 * 1) tag filtering by showing snackGroups and tags ( search by touch/click )
					 * 2) search input ( search by typing )
					 * 3) favorites - latest checkout products sorted by times of consumption **/}

				</div>
				{value === 0 && <SearchSnacks
					className = { classes.searchSnacks }
					typeSearch = { this.props.typeSearch }
				/>}
				{value === 1 && <div>The Filter Tags</div>}
				{value === 2 && <div>Show my Favorites</div>}
			</section>
		)
	}
}

SnackHero.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles( styles )( SnackHero );