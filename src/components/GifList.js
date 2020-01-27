import React, { Component } from 'react';

export class GifList extends Component {
	renderGifs(gifValues) {
		return gifValues.map(gif => {
			return (
				<li>
					<img src={gif.images.original.url} />
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul>{this.renderGifs(this.props.gifList)}</ul>
			</div>
		);
	}
}

export default GifList;
