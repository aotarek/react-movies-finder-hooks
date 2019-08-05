import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/blocks/Sidebar';

import { fetchGenre } from '../actions/moviesActions';

const MoviesCategoryContainer = props => {
  const { fetchGenre } = props;

  useEffect(() => {
    fetchGenre();
    console.log('test effect');
  }, [fetchGenre]);

  return (
    <Sidebar
      genres={props.genres}
      loading={props.loading}
      genreId={props.genreId}
    />
  );
};

function mapStateToProps(state) {
  const { genres, genreId, loading } = state.moviesStore;
  return { genres, genreId, loading };
}

export default connect(
  mapStateToProps,
  { fetchGenre }
)(MoviesCategoryContainer);
