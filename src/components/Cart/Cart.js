import React from 'react';
import PropTypes from 'prop-types';

// material ui styles - test
import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const styles = theme => ({
	fab: {
		margin: theme.spacing.unit,
	},
});

const Cart = props => {

	const { classes } = props;
	return (
		<div>
			<Fab color="secondary" aria-label="Add" className={classes.fab}>
				<ShoppingBasket />
			</Fab>
		</div>
	);
};

Cart.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(Cart);