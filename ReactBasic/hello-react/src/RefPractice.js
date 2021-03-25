import React, { Component } from 'react';

class RefPractice extends Component {
	input = React.createRef();

	handleFocus = () => {
		this.input.current.focus();
	}

	render() {
		return (
			<div>
				<input ref={this.input} />
			</div>
		);
	}
}

export default RefPractice;