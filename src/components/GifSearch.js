import React, { Component } from 'react';

export class GifSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		};
	}

	handleChange = e => {
		const inputValue = e.target.value;

		this.setState({
			searchTerm: inputValue
		});
	};

	render() {
		return (
			<div>
				<form
					className='search-form'
					onSubmit={e => this.props.handleSearchTerm(e, this.state.searchTerm)}
				>
					<input onChange={this.handleChange} type='text' />
					<input type='submit' />
				</form>
			</div>
		);
	}
}

export default GifSearch;
