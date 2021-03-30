import React, { useRef } from 'react';

const RefSample = () => {
	const id = useRef(1);
	const setId = (n) => {
		id.currenrt = n;
	}
	const printId = () => {
		console.log(id.current);
	}
	return (
		<div>
			refSample
		</div>
	);
	//로컬변수 사용하기
}

export default RefSample;