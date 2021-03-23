import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}
/* 	state = {
			number: 0,
			favorite: "milktea",
			where: "blog"
	}; */
	render() {
		const { number } = this.state; //state 조회
		return (
			<div>
				<h1>{ number }</h1>
				<button onClick={() => {
					this.setState(prevState => {
					  return {
						  number:prevState.number + 1
					  };
					});
					this.setState(prevState => ({
						number: prevState.number +1
					}));
				  }}
				>
				  +1
				</button>
			</div>
		);
	}
}

export default Counter;