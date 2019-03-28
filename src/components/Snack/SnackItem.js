import React from 'react';

// @material-ui components
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// helper components
import PropTypes from 'prop-types';

//helper functions
import { withStyles } from '@material-ui/core/styles';
import { formatPrice } from '../HelperFunctions/formatPrice';



const styles = theme => ({
	// cardmedia: {
	// 	height: 0,
	// 	paddingTop: '26.25%',
	// 	backgroundColor: 'red',
	// },
	card: {
		display: 'flex',
		minHeight: 100,
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 2,
		color: theme.palette.secondary.contrastText,
		backgroundColor: theme.palette.primary.light,
	},
	actions: {
		width: 100,
		flexGrow: 0,
		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.primary.main,
	},
	cardmedia: {
		width: 100,
		flexGrow: 0,
	},
	snackBrand: {
		fontSize: 10,
	},
});

const SnackItem = ( props ) => {

	// activating css in js
	// const classes = useStyles();

	// set up variables
	const { snack_brand, snack_price, snack_size, snack_description, } = props.snack.meta;
	const { title } = props.snack;
	const { classes } = props;

	// console.log( props.snack._embedded["wp:term"][1] );

    return (
        <div className="snack-item">
			{ props.snack ? (
				<Card className={classes.card}>
					<CardMedia className={classes.cardmedia}
						image={ "https://placeimg.com/640/480/nature/" + props.index}
						// image={ props.snack._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url }
						title={ title.rendered }
					/>
					<CardContent className={classes.content}>
						<Typography variant="headline" component="h2">
							{ title.rendered }
						</Typography>
						<Typography gutterBottom variant="headline" component="h3" className={classes.snackBrand}>
							{ snack_brand }
						</Typography>
						<Typography component="p">
							{ snack_size } - {Object.keys( props.snack._embedded["wp:term"][1] ).map( key => (
								<a key={ key } index={ key } href={'#' + props.snack._embedded["wp:term"][1][key].name} >{props.snack._embedded["wp:term"][1][key].name}</a>
							))}
						</Typography>
					</CardContent>
					<CardActions className={classes.actions}>
						<Button size="small" color="primary">
							{ formatPrice( snack_price ) }
						</Button>
					</CardActions>
				</Card>
			) : null }
		</div>
    );
};

SnackItem.propTypes = { classes: PropTypes.object.isRequired };


export default withStyles(styles)(SnackItem);