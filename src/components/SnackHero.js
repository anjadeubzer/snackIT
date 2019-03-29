import React, { Component } from 'react';
import SearchSnacks from './Snack/SearchSnacks';
import FilterSnacks from './Snack/FilterSnacks';

// @material-ui components
import Typography from '@material-ui/core/Typography';
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
		padding: `${theme.spacing.unit * 8}px 0 0`,
		backgroundColor: theme.palette.primary.main,
		backgroundImage: "url('https://placeimg.com/1000/400/any')",
		backgroundSize: "cover",
	},

	tabsContainer: {
		// marginBottom: theme.spacing.unit * 4,
		marginTop: theme.spacing.unit * 6,
		backgroundColor: theme.palette.primary.dark,
	},
	tabbedContent: {
		color: theme.palette.primary.contrastText,
		flexGrow: 1,
		minHeight: 80,
		padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px`,
		backgroundColor: theme.palette.primary.light,
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

					<Typography variant="display4" align="center" color="textPrimary">
						Welcome
					</Typography>

					<Typography variant="display2" align="center" gutterBottom>
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

				{ // the first tab shows the search by typing the name of the product
					value === 0 &&
					<SearchSnacks
						className={classes.tabbedContent}
						typeSearch={ this.props.typeSearch }
					/>
				}
				{ // the second tab shows the search by clicking the category or tag name
					value === 1 &&
					<FilterSnacks
						className={classes.tabbedContent}
						filterSearch={this.filterSearch}
						snackGroups={ this.props.snackGroups }
					/> }
				{ // the third tab shows the latest purchases
					value === 2 &&
					<div className={classes.tabbedContent}>My latest Purchases</div>
				}

			</section>
		)
	}
}

SnackHero.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles( styles )( SnackHero );