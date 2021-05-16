import React, { Component } from "react";

class Movies extends Component {
  render() {
    return (
      <div className="row">
        {this.props.movies_list.map((movie) => (
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
                    <button type="button" className="btn btn-outline-dark">
                      Edit
                    </button>
                    <span
                      className="badge badge-dark"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {movie.rating}
                    </span>
                  </div>
                </div>
              </div>

          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
