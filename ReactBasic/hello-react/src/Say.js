import React, { useState } from 'react';

const Say = () => {
	const [message, setMessage] = useState('');
	const onClickEnter = () => setMessage('ㅎㅇ요');
	const onClickLeave = () => setMessage('bye');

	const [color, setColor] = useState('black');

	//객체
	const [object, setObject] = useState([{ a: 1, b: 2, c:3 }]);
	const nextObject = { ...object, b: 2 }; //사본을 만들어 b값만 덮어 쓴다.

	//배열
	const [array, setArray] = useState([
		{ id:1, value: true },
		{ id:2, value: true },
		{ id:3, value: false },
	]);
	let nextArray = array.concat({ id: 4 }); //새 항목 추가
	nextArray.filter(item => item.id !== 2);
	nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item));
	//id가 1인 항목의 value를 false로 설정	

	return (
		<div>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h1 style={{color}}>{message}</h1>
			<h1 style={{color}}>{object.a}</h1>
			<h1>{array.id}</h1>
			<button style= {{color: 'red'}} onClick={() => setColor('red')}>
				빨간색
			</button>
			<button style= {{color: 'green'}} onClick={() => setColor('green')}>
				초록색
			</button>
			<button style= {{color: 'blue'}} onClick={() => setColor('blue')}>
				파란색
			</button>
			<button onClick={() => setObject(nextObject)}>
				객체 업뎃
			</button>
			<button onClick={() => setArray(nextArray)}>
				배열 업뎃
			</button>
		</div>
	);
};

export default Say;