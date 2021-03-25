import React, { useState } from 'react';

const EventPracticeFunc = () => {
	const [form, setForm] = useState({
		username: '',
		message: ''
	});
	//state에 username과 message를 초기화
	const { username, message } = form;
	const onChange = e => {
		const nextForm = {
			...form, //기존의 form을 이곳에 복사
			[e.target.name]: e.target.value //원하는 값 덮어 씌우기
		};
		setForm(nextForm);
	};
	const onClick = () => {
		alert(username + ': ' + message);
		setForm({
			username: '',
			message: ''
		});
	};
	const onKeyPress = e => {
		if (e.key === 'Enter') {
			onClick();
		}
	};

	return (
		<div>
			<h1>이벤트 연습</h1>
			<input
				type="text"
				name="username"
				placeholder="사용자 별명"
				value={username}
				onChange={onChange}
			/>
			<input
				type="text"
				name="message"
				placeholder="하고싶은 말"
				value={message}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
			<button onClick={onClick}>확인</button>
		</div>
	);
}

export default EventPracticeFunc;