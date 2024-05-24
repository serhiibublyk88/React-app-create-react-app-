import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
	// Императивный стиль: получение текущего года
	const currentYear = new Date().getFullYear();

	// Декларативный стиль:
	// 	return (
	// 		<div className="App">
	// 			<header className="App-header">
	// 				<img src={logo} className="App-logo" alt="logo" />
	// 				<p>
	// 					Edit <code>src/App.js</code> and save to reload.
	// 				</p>
	// 				<a
	// 					className="App-link"
	// 					href="https://reactjs.org"
	// 					target="_blank"
	// 					rel="noopener noreferrer"
	// 				>
	// 					Learn React
	// 				</a>
	// 			</header>
	// 			<footer className="App-footer">
	// 				<p>
	// 					Current Year: <span>{currentYear}</span>
	// 				</p>
	// 			</footer>
	// 		</div>
	// 	);
	// };
  
	// только JavaScript
	const appDiv = createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
		),
		createElement(
			'footer',
			{ className: 'App-footer' },
			createElement(
				'p',
				null,
				'Current Year: ',
				createElement('span', null, currentYear),
			),
		),
	);

	// Возвращаем основной элемент
	return appDiv;
};
