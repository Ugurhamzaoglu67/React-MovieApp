import React from "react";


const Movies = (props) => {



    return (
      <div className="row">
        {props.movies_list.map((movie) => (
          <div className="col-md-4" key={movie.id}>

              <div className="card ">
                <img className="card-img-top" src={movie.imageUrl} alt="w" />

                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text">{movie.overview}</p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>

                  <div className="d-flex justify-content-between align-items-center ">
                    <button type="button" onClick={(e) => props.plsDeleteMovie(movie)}   className="btn btn-outline-danger">
                       <i className="far fa-trash-alt"></i>
                    </button>
                    <span
                      className="badge badge-dark"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <i className="far fa-star">{movie.rating}</i>
                      
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
