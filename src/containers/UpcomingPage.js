import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

import { fetchMovies } from '../actions/moviesActions';

import MoviesCardList from '../components/MoviesCardList';

const UpcomingPage = props => {
  const { fetchMovies } = props;

  useEffect(() => {
    fetchMovies(1, 'upcoming');
  }, [fetchMovies]);

  const handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.props.fetchMovies(pageNumber, 'upcoming');
  };

  return (
    <div>
      <h1 className="text-center page-title">Upcoming Movies</h1>
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
        <div className="col-md-12">
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
  { fetchMovies }
)(UpcomingPage);
