import React, { useState } from 'react';
import './ValidationSample.css';

const LoginCheck = () => {

	const [inputId, setInputId] = useState('');
	const [inputPw, setInputPw] = useState('');
	const [message, setMessage] = useState('');
	
	const onEnterId = e => setInputId(e.target.value);
	const onEnterPw = e => setInputPw(e.target.value);
	const onBlurId = () => setMessage("아이디를 확인하세요"); 
	const onBlurId2 = () => setMessage("ID, PW가 입력되었습니다. DB에서 회원정보를 조회하세요."); 
	const onBlurPw = () => setMessage("비밀번호를 확인하세요"); 
	const noIdPw = () => setMessage("아이디, 비밀번호를 확인하세요"); 

		return (
			<div>
				<div style={
						{
							border: 'solid 1px'
						}
					}
				>
					<input
						placeholder="id"
						onChange={onEnterId}
					/>
					<br/>
					<input
						type="password"
						placeholder="pw"
						//value={inputPw}
						onChange={onEnterPw}
						/>
					<br/>
					<button onClick={
						inputId !=='' ? (inputPw !=='' ? onBlurId2 : onBlurPw) : (inputPw !=='' ? onBlurId : noIdPw)} >
						로그인</button>
					<br/>
					{message}
					<br/>
					입력 받은 아이디: {inputId}<br/>
					입력 받은 PW: {inputPw}

				</div>
			</div>
		);
}

export default LoginCheck;