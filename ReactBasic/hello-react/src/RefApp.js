import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LoginCheck from './LoginCheck';
import Calculator from './Calculator';

class RefApp extends Component {
	render() { 
		return(
			<div>
				<LoginCheck/>
				<Calculator/>
			</div>
			//<IterationSample/>

/* 			<div>
				<ScrollBox ref={(ref) => this.scrollBox=ref}/>
				<button onClick={() => this.scrollBox.scrollToBottom()}>
					맨 밑으로
				</button>
			</div> */
		);
	}
}

export default RefApp;