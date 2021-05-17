import React from "react";
import './movies.css'

const Movies = (props) => {


    return (
      <div className=" imageCss-container mb-4">
        {props.movies_list.map((movie) => (
          <div className="" key={movie.id}>

              <div className="card ">
                <img className="card-img-top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="w" />

                <div className="card-body" style={{height:'auto'}}>
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>

                  <div className="d-flex justify-content-between align-items-center ">
                    <button type="button" onClick={(e) => props.plsDeleteMovie(movie)}   className="btn btn-outline-danger">
                       <i className="far fa-trash-alt"></i>
                    </button>

                      <span
                          className="badge badge-warning"
                          style={{ fontSize: "1.5rem" }}
                      >
                      <i className="far fa-heart"> {movie.vote_count}</i>

                    </span>



                    <span
                      className="badge badge-dark"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <i className="far fa-star"> {movie.vote_average}</i>
                      
                    </span>
                  </div>
                </div>

              </div>

          </div>
        ))}
      </div>
    );
}

export default Movies;
