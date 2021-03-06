import React, { useState } from 'react';
import Rating from 'react-rating';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ReactPlayer from 'react-player';
import Labels from './Labels';
import ActorsList from './ActorsList';
import playIcon from '../ic-play.svg';

const MovieHeader = props => {
  const { movie, genres, trailer, actors } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(3, 3, 3, 0.30), rgba(0, 0, 5, 0.30)), url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${movie.backdrop_path})`
  };

  const getYear = stringDate => {
    const d = new Date(stringDate);
    return d.getFullYear();
  };
  // Trailer video modal
  const renderModal = (
    <Modal
      size="lg"
      isOpen={modal}
      toggle={toggle}
      style={{ maxWidth: '100%' }}
    >
      <ModalHeader toggle={toggle}>{trailer.name}</ModalHeader>
      <ModalBody>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer.key}`}
          playing
          height="90vh"
          width="100%"
        />
      </ModalBody>
    </Modal>
  );

  return (
    <div className="row">
      <div className="col-md-12 text-center movie-trailer" style={headerStyle}>
        <img
          src={playIcon}
          alt="Play"
          onClick={toggle}
          className="movie-trailer__play-icon"
        />
        {trailer.key ? renderModal : null}
      </div>
      <div className="col-md-3">
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
          alt={movie.original_title}
          className="img-responsive movie-poster"
        />
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-12">
            <h1 className="movie-title">{movie.original_title}</h1>
            <h4 className="movie-release">
              {getYear(movie.release_date).toString()}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="movie-vote">
              {movie.vote_average}{' '}
              <Rating
                initialRating={movie.vote_average}
                emptySymbol="fa fa-star-o"
                fullSymbol="fa fa-star"
                stop={10}
                step={2}
              />
              <Labels labels={genres} />
            </p>
          </div>
        </div>
        <div className="row movie-overview">
          <div className="col-md-12">
            <h1>Overview</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
        <div className="row movie-billed">
          <div className="col-md-12">
            <h1>Top Billed Cast</h1>
            <ActorsList actors={actors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
