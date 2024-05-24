import logo from './logo.svg';
import './App.css';

export const App = () => {
	// Императивный стиль: получение текущего года
	const currentYear = new Date().getFullYear();

	// Декларативный стиль:
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<footer className="App-footer">
				<p>
					Current Year: <span>{currentYear}</span>
				</p>
			</footer>
		</div>
	);
};

