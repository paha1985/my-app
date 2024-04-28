import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

function App() {
return (
	createElement('div', { className: 'App' },
		createElement('header', { className: 'App-header' },
			createElement('img', { src: `${logo}`, className:'App-logo', alt:'logo' }, null),
			createElement('p', null, 'Edit ',
				createElement('code', {src: 'App.js'}, null), ' and save to reload' ),
			createElement('a', { className:'App-link', href:'href="https://reactjs.org',
								   target:'_blank', rel:'noopener noreferrer' },'Learn React',
								createElement('br',null,null),
								createElement('div',null, new Date().getFullYear()))
							)
						)
  );
}

export default App;
