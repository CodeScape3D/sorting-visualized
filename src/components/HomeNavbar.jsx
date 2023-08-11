import React, { Component } from "react";
export default class Menu extends Component {
	state = { activeItem: "home" };

	handleItemClick = (name) => {
		const newState = { activeItem: name };
		this.setState(newState);
	};

	render() {
		return (
			<div>
				<button
					onClick={this.props.onGenerateRandomArray}>
					Random
				</button>

				<select
					onChange={this.props.onAlgorithmChange}
					defaultValue="Bubble">
					<option value="Bubble">Bubble Sort</option>
					<option value="Merge">Merge Sort</option>
					<option value="Quick">Quick Sort</option>
					<option value="ThreeWayQuick">Three Way Quick Sort</option>
					<option value="Heap">Heap Sort</option>
					<option value="Shell">Shell Sort</option>
					<option value="Selection">Selection Sort</option>
					<option value="Insertion">Insertion Sort</option>
					<option value="Cocktail">Cocktail Sort</option>
				</select>

			</div>

		);
	}
}
