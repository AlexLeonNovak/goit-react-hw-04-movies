import { Component } from 'react';
import { fetchMovieDetail } from '../services/movies-api';
import { Loader } from '../components/Loader';
import { MovieDetails } from '../components/MovieDetailsPage';

export class MovieDetailsPage extends Component {
	state = {
		title: '',
		genres: [],
		overview: '',
		poster_path: '',
		date: '',
		isLoading: false,
	};

	componentDidMount() {
		this.setState({ isLoading: true });
		const { match } = this.props;
		fetchMovieDetail(match.params.movieId)
			.then(data =>
				this.setState({
					...data,
					date: data.release_date || data.first_air_date,
					title: data.title || data.original_name,
				}),
			)
			.catch(error => console.log(error))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { title, genres, overview, poster_path, date, isLoading } =
			this.state;
		console.log(genres);
		return (
			<div className="container">
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
