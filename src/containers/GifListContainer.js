import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export class GifListContainer extends Component {
	constructor() {
		super();

		this.API_KEY = 'MGIWXcKM9sAbMHNoQyy6VStTlz5uKdl7';

		this.state = {
			gifList: []
		};
	}

	handleSearchTerm = (e, searchVal) => {
		e.preventDefault();

		this.fetchData(searchVal);
	};

	fetchData(query = 'dolphins') {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${this.API_KEY}`)
			.then(res => res.json())
			.then(gifs => {
				const firstThreeGifs = gifs.data.slice(0, 3);

				this.setState({
					gifList: firstThreeGifs
				});
			});
	}

	render() {
		return (
			<div>
				<GifSearch handleSearchTerm={this.handleSearchTerm} />
				<GifList gifList={this.state.gifList} />
			</div>
		);
	}

	componentDidMount() {
		this.fetchData();
	}
}

export default GifListContainer;
