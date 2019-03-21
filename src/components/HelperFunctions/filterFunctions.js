// filter function
 export const filterSnacks = ( filterTerm ) => {
	let filteredSnacks = this.state.snacks;

	function escapeRegExp(s) {
		return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
	}

	const theWords = filterTerm
		.split(/\s+/g)
		.map(s => s.trim())
		.filter(s => !!s);

	const hasTrailingSpace = filterTerm.endsWith(" ");

	const searchRegex = new RegExp(
		theWords
			.map((oneWord, i) => {
				if (i + 1 === theWords.length && !hasTrailingSpace) {
					// The last word - ok with the word being "startswith"-like
					return `(?=.*\\b${escapeRegExp( oneWord )})`;
				} else {
					// Not the last word - expect the whole word exactly
					return `(?=.*\\b${escapeRegExp( oneWord )}\\b)`;
				}
			})
			.join("") + ".+",
		"gi" // gi means case insensitiv
	);

	filteredSnacks = filteredSnacks.filter(( snack ) => {

		if (
			searchRegex.test( snack.title.rendered ) === true

			|| searchRegex.test( snack.meta.snack_brand ) === true
			|| searchRegex.test( snack.meta.snack_price ) === true
			|| searchRegex.test( snack.meta.snack_size ) === true
			|| searchRegex.test( snack.meta.snack_description ) === true

		) {
			return true;
		}
		else {
			return false;
		}
	});

	this.setState({
		filteredSnacks
	})
};