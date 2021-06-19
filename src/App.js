import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';

import { routes } from './routes';
import { MovieDetailsPage } from './pages/MovieDetailsPage';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavLink to={routes.home} exact className="App-link">
					Home
				</NavLink>
				<NavLink to={routes.movies} className="App-link">
					Movies
				</NavLink>
			</header>

			<Switch>
				<Route exact path={routes.home} component={HomePage} />
				<Route exact path={routes.movies} component={MoviesPage} />
				<Route path={routes.movieDetail} component={MovieDetailsPage} />
			</Switch>
		</div>
	);
}

export default App;
