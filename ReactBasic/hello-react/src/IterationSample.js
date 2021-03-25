import React, { useState, Fragment } from 'react';

const IterationSample = () => {
	const [names, setNames] = useState([
		{ id: 1, text: '밀크티'},
		{ id: 2, text: '버블티'},
		{ id: 3, text: '타로밀크티'},
		{ id: 4, text: '딸기밀크티'}
	]);
	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5); 

	const onChange = e => setInputText(e.target.value);

	const onClick = () => {
		const nextNames = names.concat({
			id: nextId,
			text: inputText
		});
		setNextId(nextId + 1);
		setNames(nextNames);
		setInputText('');
	}

	const onRemove = id => {
		const nextNames = names.filter(name => name.id !== id);
		setNames(nextNames);
	}

	const namesList = names.map(name => (
		<li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>));
	return (
		<Fragment>
			<input value={inputText} onChange={onChange}/>
			<button onClick={onClick}>추가</button>
			<ul>{namesList}</ul>
		</Fragment>
	)
}
export default IterationSample;


/* import React from 'react';

const IterationSample = () => {
	const names = ['홍차', '녹차', '보이차', '우롱차'];
	const nameList = names.map((name, index) => <li key={index}>{name}</li>);
	return <ul>{nameList}</ul>;

};

export default IterationSample; */