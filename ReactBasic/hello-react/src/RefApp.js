import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class RefApp extends Component {
	render() { 
		return(
			<IterationSample/>
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