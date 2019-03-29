import React, { Component } from 'react';

// @material-ui components
import TextField from '@material-ui/core/TextField';
// import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

// helper components
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';

//helper functions
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
	root: {
		flexGrow: 1,
		minHeight: 80,
		padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px`,
		backgroundColor: theme.palette.primary.light,
		marginBottom: theme.spacing.unit * 4,
	},
	container: {
		flexGrow: 1,
		position: 'relative',
	},
	paper: {
		position: 'absolute',
		zIndex: 1,
		marginTop: theme.spacing.unit,
		left: 0,
		right: 0,
	},
	chip: {
		margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
	},
	inputRoot: {
		flexWrap: 'wrap',
	},
	inputInput: {
		width: 'auto',
		flexGrow: 1,
	},
	divider: {
		height: theme.spacing.unit * 2,
	},
});



const suggestions = [
	{ label: 'Coke' },
	{ label: 'Tea' },
	{ label: 'Drink' },
	{ label: 'Algeria' },
	{ label: 'American Samoa' },
	{ label: 'Andorra' },
	{ label: 'Angola' },
	{ label: 'Anguilla' },
	{ label: 'Antarctica' },
	{ label: 'Antigua and Barbuda' },
	{ label: 'Argentina' },
	{ label: 'Armenia' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
	{ label: 'Bangladesh' },
	{ label: 'Barbados' },
	{ label: 'Belarus' },
	{ label: 'Belgium' },
	{ label: 'Belize' },
	{ label: 'Benin' },
	{ label: 'Bermuda' },
	{ label: 'Bhutan' },
	{ label: 'Bolivia, Plurinational State of' },
	{ label: 'Bonaire, Sint Eustatius and Saba' },
	{ label: 'Bosnia and Herzegovina' },
	{ label: 'Botswana' },
	{ label: 'Bouvet Island' },
	{ label: 'Brazil' },
	{ label: 'British Indian Ocean Territory' },
	{ label: 'Brunei Darussalam' },
];



function renderInput(inputProps) {
	const { InputProps, classes, ref, ...other } = inputProps;

	return (
		<TextField
			InputProps={{
				inputRef: ref,
				classes: {
					root: classes.inputRoot,
					input: classes.inputInput,
				},
				...InputProps,
			}}
			{...other}
		/>
	);
}



function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
	const isHighlighted = highlightedIndex === index;
	const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

	return (
		<MenuItem
			{...itemProps}
			key={suggestion.label}
			selected={isHighlighted}
			component="div"
			style={{
				fontWeight: isSelected ? 500 : 400,
			}}
		>
			{suggestion.label}
		</MenuItem>
	);
}

renderSuggestion.propTypes = {
	highlightedIndex: PropTypes.number,
	index: PropTypes.number,
	itemProps: PropTypes.object,
	selectedItem: PropTypes.string,
	suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};



function getSuggestions(value) {
	const inputValue = deburr(value.trim()).toLowerCase();

	const inputLength = inputValue.length;

	let count = 0;

	return inputLength === 0
		? []
		: suggestions.filter(suggestion => {
			const keep =
				count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

			if (keep) {
				count += 1;
			}

			return keep;
		});
}



class DownshiftMultiple extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			selectedItem: [],
			searchArray: [],
			searchString: [],
		};
	};

	handleKeyDown = event => {
		const { inputValue, selectedItem } = this.state;
		if (selectedItem.length && !inputValue.length && event.key === 'Backspace') {
			this.setState({
							  selectedItem: selectedItem.slice(0, selectedItem.length - 1),
						  });
		}
	};

	handleInputChange = event => {
		this.setState({ inputValue: event.target.value });
		this.props.typeSearch( event.target.value );
	};

	handleChange = item => {
		let { selectedItem } = this.state;

		if (selectedItem.indexOf(item) === -1) {
			selectedItem = [...selectedItem, item];
		}

		this.setState({
						  inputValue: '',
						  selectedItem,
					  });
		// this.props.tagSearch( selectedItem, this.props.searchString, );
	};

	handleDelete = item => () => {
		this.setState(state => {
			const selectedItem = [...state.selectedItem];
			selectedItem.splice(selectedItem.indexOf(item), 1);
			// this.props.tagSearch( selectedItem, this.props.searchString, );
		return { selectedItem };
		});
	};

	render() {
		const { classes } = this.props;
		const { inputValue, selectedItem } = this.state;

		return (
			<Downshift
				id="downshift-multiple"
				inputValue={inputValue}
				onChange={this.handleChange}
				selectedItem={selectedItem}>

				{
					({
						getInputProps,
						getItemProps,
						isOpen,
						inputValue: inputValue2,
						selectedItem: selectedItem2,
						highlightedIndex,
					}) => (
						<div className={classes.container}>
							{
								renderInput( {
									fullWidth: true,
									label: 'Search',
									classes,
									InputProps: getInputProps( {
										startAdornment: selectedItem.map( item => (
									    	<Chip
										   		key={item}
												tabIndex={-1}
										   		label={item}
										   		className={classes.chip}
										   		onDelete={this.handleDelete( item )}
									    	/> ) ),
										onChange: this.handleInputChange,
										onKeyDown: this.handleKeyDown,
										placeholder: 'Search for your Snack',
									} ),
								} )
							}

							{
								isOpen ? (
									<Paper className={classes.paper} square>
										{
											getSuggestions( inputValue2 ).map( ( suggestion, index ) => renderSuggestion( {
												suggestion,
												index,
												itemProps: getItemProps( { item: suggestion.label } ),
												highlightedIndex,
												selectedItem: selectedItem2,
											} ), )
										}
									</Paper>
								) : null
							}
						</div>
					)
				}
			</Downshift>
		);
	}
}

DownshiftMultiple.propTypes = {
	classes: PropTypes.object.isRequired,
};




function SearchSnacks(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<DownshiftMultiple classes={classes} typeSearch={props.typeSearch} tagSearch={props.tagSearch} />
		</div>
	);
}



SearchSnacks.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(SearchSnacks);