import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

import { fetchMoviesByGenre } from '../actions/moviesActions';

import MoviesCardList from '../components/MoviesCardList';

const GenrePage = props => {
  const { fetchMoviesByGenre } = props;

  useEffect(() => {
    fetchMoviesByGenre(1, props.match.params.id);
  }, [fetchMoviesByGenre, props.match.params.id]);

  const handlePageChange = pageNumber => {
    props.fetchMoviesByGenre(pageNumber, props.match.params.id);
  };

  return (
    <div>
      <h1 className="text-center page-title">{props.match.params.genre}</h1>
      <div className="row">
        <div className="col-md-12">
          <MoviesCardList
            movies={props.movies}
            loading={props.loading}
            cols={6}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <Pagination
            activePage={props.page}
            itemsCountPerPage={20}
            totalItemsCount={props.totalResults}
            pageRangeDisplayed={5}
            innerClass="pagination"
            itemClass="page-item"
            linkClass="page-link"
            disabledClass="disabled"
            activeClass="active"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const { movies, loading, page, totalResults } = state.moviesStore;
  return { movies, loading, page, totalResults };
}

export default connect(
  mapStateToProps,
  { fetchMoviesByGenre }
)(GenrePage);
