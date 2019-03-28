import React, { Component } from 'react';

// @material-ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// helper components
import PropTypes from 'prop-types';

// helper functions
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	appBar: {
		backgroundColor: theme.palette.primary.light,
	}
});



class NavBar extends Component {
	state = {
		auth: true,
		anchorEl: null,
	};

	handleChange = event => {
		this.setState({ auth: event.target.checked });
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};


	render() {
		const { classes } = this.props;
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<React.Fragment>
				<FormGroup>
					<FormControlLabel
						control={
							<Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
						}
						label={auth ? 'Logout' : 'Login'}
					/>
				</FormGroup>
				<AppBar position="static" className={classes.appBar}>
					<Toolbar>

						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>

						<Typography variant="h6" color="inherit" className={classes.grow}>
							SnackIT App
						</Typography>

						{auth && (
							<div>
								<IconButton
									aria-owns={open ? 'menu-appbar' : undefined}
									aria-haspopup="true"
									onClick={this.handleMenu}
									color="inherit"
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={this.handleClose}
								>
									<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									<MenuItem onClick={this.handleClose}>My account</MenuItem>
								</Menu>
							</div>
						)}

						{/*<Button color="inherit">Login</Button>*/}

					</Toolbar>
				</AppBar>
			</React.Fragment>
		)
	}
}

NavBar.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(NavBar);
