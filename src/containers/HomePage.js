import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

import { fetchMovies } from '../actions/moviesActions';

import MoviesCardList from '../components/MoviesCardList';

const HomePage = props => {
  const { fetchMovies } = props;

  useEffect(() => {
    console.log('fetch movie');
    fetchMovies();
  }, [fetchMovies]);

  const handlePageChange = pageNumber => {
    window.scrollTo(0, 0);
    props.fetchMovies(pageNumber);
  };

  return (
    <div>
      <h1 className="text-center page-title">Popular Movies</h1>
      <div className="row">
        <div className="col-md-12">
          <MoviesCardList
            movies={props.movies}
            cols={6}
            loading={props.loading}
          />
        </div>
        {props.movies && props.movies.length ? (
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
        ) : null}
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
  { fetchMovies }
)(HomePage);
