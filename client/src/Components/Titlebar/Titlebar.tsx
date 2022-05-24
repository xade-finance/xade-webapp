import './../../Style/Titlebar.css';
import { Component } from 'react';

class Titlebar extends Component {
	render() {
		return (
			<>
				<div className='navBar'>
					<div className='navLink payments'>
						<img
							alt='payment'
							src={process.env.PUBLIC_URL + '/images/transaction.svg'}
						/>
					</div>
					<div className='navLink home'>
						<img alt='home' src={process.env.PUBLIC_URL + '/images/home.svg'} />
					</div>
					<div className='navLink investment'>
						<img
							alt='investments'
							src={process.env.PUBLIC_URL + '/images/stonks.svg'}
						/>
					</div>
				</div>
			</>
		);
	}
}

export default Titlebar;
