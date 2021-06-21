import { Component } from 'react';
import { fetchMovieDetail } from '../services/movies-api';
import { Loader } from '../components/Loader';
import { MovieDetails } from '../components/MovieDetails';

export class MovieDetailsPage extends Component {
	state = {
		title: '',
		genres: [],
		overview: '',
		poster_path: '',
		date: '',
		isLoading: false,
		error: null,
	};

	componentDidMount() {
		this.setState({ isLoading: true, error: null });
		const { match } = this.props;
		fetchMovieDetail(match.params.movieId)
			.then(data =>
				this.setState({
					...data,
					date: data.release_date || data.first_air_date,
					title: data.title || data.original_name,
				}),
			)
			.catch(error => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { title, genres, overview, poster_path, date, isLoading, error } =
			this.state;
		return (
			<div className="container">
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
				{isLoading ? (
					<Loader />
				) : (
					<MovieDetails
						overview={overview}
						date={date}
						poster_path={poster_path}
						title={title}
						genres={genres}
					/>
				)}
			</div>
		);
	}
}
