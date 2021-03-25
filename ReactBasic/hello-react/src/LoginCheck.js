import React, { useState } from 'react';
import './ValidationSample.css';

const LoginCheck = () => {

	const [inputId, setInputId] = useState('');
	const [inputPw, setInputPw] = useState('');
	const [message, setMessage] = useState('');
	
	//const onClickLogIn = function() => 
	const onEnterId = e => setInputId(e); 
	const onBlurId = () => setMessage("아이디를 확인하세요"); 
	const onBlurPw = () => setMessage("비밀번호를 확인하세요"); 

		return (
			<div>
				<input
					placeholder="id"
					onChange={onEnterId}
					onBlur={onBlurId}
				/>
				<br/>
				<input
					placeholder="pw"
					//value={inputPw}
					onBlur={onBlurPw}
					/>
				<br/>
				<button >로그인</button>
				<br/>
				{message}
				{inputId}

			</div>
		);
}

export default LoginCheck;