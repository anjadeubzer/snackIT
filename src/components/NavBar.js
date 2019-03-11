import React, { Component } from 'react';

// @material-ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class NavBar extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="title" color="inherit">
							SnackIT App
						</Typography>
					</Toolbar>
				</AppBar>
			</React.Fragment>
		)
	}
}

export default NavBar;
