import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavLink to="/" exact className="App-link">
					Home
				</NavLink>
				<NavLink to="/movies" className="App-link">
					Movies
				</NavLink>
			</header>

			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/movies" exact component={MoviesPage} />
			</Switch>
		</div>
	);
}

export default App;
