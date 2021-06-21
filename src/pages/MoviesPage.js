import { Component } from 'react';
import { Search } from '../components/Search';
import { searchMovies } from '../services/movies-api';
import { Loader } from '../components/Loader';
import { Movies } from '../components/Movies';

export class MoviesPage extends Component {
	state = {
		movies: [],
		isLoading: false,
	};

	componentDidMount() {
		const query = this.getSearchQueryFromParams();
		query && this.getMovies(query);
	}

	getSearchQueryFromParams() {
		const { location } = this.props;
		if (location.search) {
			const searchParams = new URLSearchParams(location.search);
			return searchParams.get('query');
		}
		return '';
	}

	getMovies = query => {
		this.setState({ isLoading: true, error: null });
		searchMovies(query)
			.then(movies => {
				this.setState({ movies });
				const { location, history } = this.props;
				history.push({
					pathname: location.pathname,
					search: `?query=${query}`,
				});
			})
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	};

	render() {
		const { isLoading, movies, error } = this.state;
		const query = this.getSearchQueryFromParams();

		return (
			<div className="container">
				<Search onSearch={this.getMovies} defaultQuery={query} />
				{movies.length > 0 && <Movies movies={movies} />}
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
				{isLoading && <Loader />}
			</div>
		);
	}
}
