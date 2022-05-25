import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';

import { store, SynchronizerUpdater } from './DEUS/Synchronizer';
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<SynchronizerUpdater />
			{/* <Link to="/" /> */}
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
