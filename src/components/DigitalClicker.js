
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

	constructor() {
		super();
	
		// Initial state is defined
		this.state = {
			timesClicked: 0
		};
	  }

	handleClick = () => {
		this.setState(previousState => {
			return {
				timesClicked: previousState.timesClicked + 1,
			}
		})
	}

	render() {
		// console.log('3 render: ', this)
		return (
			<div>
				<button label={this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked}</button>
			</div>
			)
	}
}

