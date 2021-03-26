import React, { useState } from 'react';

const Calculator = () => {

	const [one, setOne] = useState(0);
	const [two, setTwo] = useState(0);
	const [answer, setAnswer] = useState(0);
	const [surplus, setSurplus] = useState(0);
	const [calc, setCalc] = useState('');
	const [message, setMessage] = useState('');
	const [click, setClick] = useState(false);
	const onEnterOne = e => setOne(e.target.value);
	const onEnterTwo = e => setTwo(e.target.value);

	return(
		<div>
			<h1> 간단한 계산기</h1>
			<h5> 밀크티 - https://blog.naver.com/nagong_ham</h5>
			<h5> 나누기는 몫과 나머지를 찾아줍니당 ^*^ </h5>
			첫번째 수 : <input onChange={onEnterOne}></input>
			두번째 수 : <input onChange={onEnterTwo}></input>
			<br/>
			연산자 : 
			<label><input type="radio" name="operate" value="+" onClick={() => setCalc('+')}/> +</label>
			<label><input type="radio" name="operate" value="-" onClick={() => setCalc('-')}/> -</label>
			<label><input type="radio" name="operate" value="*" onClick={() => setCalc('*')}/> *</label>
			<label><input type="radio" name="operate" value="/" onClick={() => setCalc('/')}/> /</label>
			<br/>
			<button onClick={
				() => {
					setClick(true);
					if(calc === '+') {
						setAnswer(Number(one) + Number(two)); setMessage('');
					}else if(calc === '-') {
						setAnswer(Number(one) - Number(two)); setMessage('');
					}else if(calc === '*') {
						setAnswer(Number(one) * Number(two)); setMessage('');
					}else if(calc === '/') {
						if (two == 0){
							setClick(false);
							setMessage('0으로는 나눌 수 없습니다.')
						}else{
							setAnswer(Math.floor(Number(one) / Number(two))); setMessage('');
							setSurplus(Number(one) % Number(two)); 
						}
					}else {setMessage('연산자를 선택하세요.'); setClick(false);};
					
				}
			}>계산하기</button>
			<button >Clear</button>
			<br/>
			<br/>
			{ ((click === true) && (calc !== '')) ?  
				(calc ==='/' ? '몫은 '+ answer + ' 나머지는 ' + surplus :answer
			) : ''}
			<b style={{color:'red'}}>
				{message}
			</b>
		</div>


	)
}
export default Calculator;
