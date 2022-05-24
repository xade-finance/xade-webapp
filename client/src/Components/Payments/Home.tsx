import React, { useState } from 'react';
import './home.css';

const Home = () => {
	const [balance, setBalance] = useState(0);
	const [balanceDecimal, setBalanceDecimal] = useState(0);
	const [history, setHistory] = useState(false);
	return (
		<div className='homeContainer'>
			<div className='funds'>
				<div className='info'>
					<span>
						<span className='checking'>Checkings</span>
						<span> Account </span>
					</span>
					<div className='balanceContainer'>
						<span>
							<span className='balance'>${balance}.</span>
							<span className='balanceDecimal'>
								{('0' + balanceDecimal).slice(-2)}
							</span>
						</span>
					</div>
				</div>
				<div className='buttons'>
					<a href='/payments' className='send'>
						<i className='fa fa-qrcode' aria-hidden='true'></i>
						Scan
					</a>
					<a href='/payments' className='recieve'>
						<i className='fa fa-arrow-circle-up' aria-hidden='true'></i>
						Send
					</a>
				</div>
				{/* <div className='line'></div> */}
			</div>
			<div className='history'>
				<div className='heading'>Your Transaction History</div>
				{history == false ? (
					<div className='msg'>All your transactions will be shown here.</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Home;
