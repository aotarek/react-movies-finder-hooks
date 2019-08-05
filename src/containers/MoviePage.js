import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchMovie,
  fetchMovieVideos,
  fetchMovieReviews,
  fetchRelatedMovies,
  fetchMovieActors,
  cleaningMovieReducer
} from '../actions/movieAction';

import MovieHeader from '../components/MovieHeader';
import MoviesCardList from '../components/MoviesCardList';
import ReviewsList from '../components/ReviewsList';

const MoviePage = props => {
  const {
    fetchMovie,
    fetchMovieVideos,
    fetchMovieReviews,
    fetchRelatedMovies,
    fetchMovieActors,
    cleaningMovieReducer
  } = props;

  const { id } = props.match.params;

  useEffect(() => {
    fetchMovie(id);
    fetchMovieVideos(id);
    fetchMovieReviews(id);
    fetchRelatedMovies(id);
    fetchMovieActors(id);

    return () => {
      cleaningMovieReducer();
    };
  }, [
    fetchMovie,
    fetchMovieVideos,
    fetchMovieReviews,
    fetchRelatedMovies,
    fetchMovieActors,
    cleaningMovieReducer,
    id
  ]);

  return (
    <div className="row">
      <div className="col-md-12">
        <MovieHeader
          movie={props.movie}
          genres={props.genres}
          productionCompanies={props.productionCompanies}
          trailer={props.trailer}
          actors={props.actors}
        />
      </div>
      <div className="col-md-12">
        {props.reviews.length ? (
          <div className="col-md-12">
            <h1
              className="text-center h3"
              style={{ padding: '.6em 0px .3em 10px' }}
            >
              Reviews
            </h1>
            <ReviewsList reviews={props.reviews} />
          </div>
        ) : null}
        {props.relatedMovies.length ? (
          <div className="col-md-12">
            <h1
              className="text-center h3"
              style={{ padding: '.3em 0px .3em 10px' }}
            >
              Related Movies
            </h1>
            <MoviesCardList
              movies={props.relatedMovies}
              hideOverview={true}
              itemsPerRow={4}
              loading={props.loading}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return state.movieStore;
}

export default connect(
  mapStateToProps,
  {
    fetchMovie,
    fetchMovieVideos,
    fetchMovieReviews,
    fetchRelatedMovies,
    fetchMovieActors,
    cleaningMovieReducer
  }
)(MoviePage);
