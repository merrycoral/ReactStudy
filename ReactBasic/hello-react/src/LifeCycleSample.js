import React, { Component } from 'react';

class LifeCycleSample extends Component {
	state = {
		number: 0,
		color: null,
	}

	myRef = null;
	
	constructor(props) {
		super(props);
		console.log('constructor');
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('getDerivedStateFromProps');
		if(nextProps.color !== prevState.color) {
			return { color: nextProps.color };
		}
		return null;
	}
	//이전 props 컬러와 다음 props color가 같지 않으면 다음 컬러 리턴

	componentDidMount() {
		console.log('componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps, nextState);
		//일의 자리 숫자가 4면 리렌더링 하지 않음 (왜?)
		return nextState.number % 10 !== 4;
	}

	componentWillMount() {
		console.log('componentWillUnmount');
	}

	handleClick = () => {
		this.setState({
			number: this.state.number +1
		});
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate');
		if(prevProps.color !== this.props.color) {
			return this.myRef.style.color;
		}
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', prevProps, prevState);
		if(snapshot) {
			console.log('업데이트 되기 직전 색상: ', snapshot);
		}
	}

	render() {
		console.log('render');
		const style={
			color: this.props.color
		};

		return (
			<div>
				<h1 style={style} ref={ref => this.myRef=ref}>
					{this.state.number}
				</h1>
				<p>color: {this.state.color}</p>
				<button onClick={this.handleClick}>
					더하기
				</button>
			</div>
		)

	}
	
/* 	componentDidCatch(error, info) {
		this.setStㄴate({
			error: true
		});
		console.log({ error, info });
	} */

}

export default LifeCycleSample;