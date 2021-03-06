import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/blocks/Header';
import HomePage from './containers/HomePage';
import TopSeriesPage from './containers/TopSeriesPage';
import UpcomingPage from './containers/UpcomingPage';
import GenrePage from './containers/GenrePage';
import MoviesCategoryContainer from './containers/MoviesCategoryContainer';
import MoviePage from './containers/MoviePage';
import ActorPage from './containers/ActorPage';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container-fuild">
        <div className="row">
          <div
            className="col-6 col-lg-2 col-md-2 sidebar-offcanvas"
            id="sidebar"
          >
            <MoviesCategoryContainer />
          </div>
          <div className="col-12 col-md-10 col-lg-10">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/upcoming" component={UpcomingPage} />
              <Route exact path="/series" component={TopSeriesPage} />
              <Route exact path="/genres/:id/:genre" component={GenrePage} />
              <Route exact path="/movies/:id" component={MoviePage} />
              <Route exact path="/actors/:id" component={ActorPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
