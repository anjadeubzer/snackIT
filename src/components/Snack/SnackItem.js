import React from 'react';

// @material-ui components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/AddShoppingCart';

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
		// minHeight: 100,
	},
	cardAction: {
		display: 'flex',
		// minHeight: 100,
	},
		cardmedia: {
			display: 'flex',
			width: '20%',
			flexGrow: 0,
			minHeight: 120,
		},

		content: {
			display: 'flex',
			flexDirection: 'column',
			flexGrow: 2,
			color: theme.palette.secondary.contrastText,
			backgroundColor: theme.palette.primary.light,
			minHeight: 120,
			boxSizing: 'border-box',
		},

	actions: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '20%',
		minHeight: 120,

		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.primary.main,
	},
	iconButton: {
		display: 'flex',
	},
	actionsChild: {
		// display: 'flex',
		// flexDirection: 'column',
		// width: '100%',
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
	// const { imageURL } = 0;
	// const imageURL = props.snack._embedded['wp:featuredmedia']['0'].source_url;

	let imageUrl = "https://placeimg.com/300/300/animals/" + props.snack.id;
	if( props.snack._embedded['wp:featuredmedia'] ){
		imageUrl = props.snack._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
	}

	const { classes } = props;

	// console.log( imageURL );

    return (
        <div className="snack-item">
			{ props.snack ? (
				<Card className={classes.card}>
					<CardActionArea className={classes.cardAction}>
						<CardMedia
							className={classes.cardmedia}
							image={ imageUrl }
							title={ title.rendered }
						/>
						<CardContent className={classes.content}>

							<Typography variant="headline">
								{ title.rendered }
							</Typography>

							<Typography variant="subheading" className={classes.snackBrand} gutterBottom>
								{ snack_brand }
							</Typography>

							<Typography variant="body1">
								{ snack_size }ml
								{/*{Object.keys( props.snack._embedded["wp:term"][1] ).map( key => ( <a key={ key } index={ key } href={'#' + props.snack._embedded["wp:term"][1][key].name} >{props.snack._embedded["wp:term"][1][key].name}</a> ))}*/}
							</Typography>

						</CardContent>
						<CardActions className={classes.actions}>
							<div className={classes.actionsChild}>
								<DeleteIcon fontSize="large" />
							</div>
							<div className={classes.actionsChild}>
								<Typography variant="subheading">
									{formatPrice( snack_price )}
								</Typography>
							</div>




						</CardActions>

					</CardActionArea>


				</Card>
			) : null }
		</div>
    );
};

SnackItem.propTypes = { classes: PropTypes.object.isRequired };


export default withStyles(styles)(SnackItem);