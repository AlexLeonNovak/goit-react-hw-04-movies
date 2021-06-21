import './App.css';
import { lazy, Suspense } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import { routes } from './routes';
import { Loader } from './components/Loader';

const HomePage = lazy(() =>
	import('./pages/HomePage' /* webpackChunkName: "home-page" */).then(
		({ HomePage }) => ({ default: HomePage }),
	),
);

const MoviesPage = lazy(() =>
	import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */).then(
		({ MoviesPage }) => ({ default: MoviesPage }),
	),
);
const MovieDetailsPage = lazy(() =>
	import(
		'./pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
	).then(({ MovieDetailsPage }) => ({ default: MovieDetailsPage })),
);

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
				<Suspense fallback={<Loader />}>
					<Route exact path={routes.home} component={HomePage} />
					<Route exact path={routes.movies} component={MoviesPage} />
					<Route path={routes.movieDetail} component={MovieDetailsPage} />
				</Suspense>
			</Switch>
		</div>
	);
}

export default App;
