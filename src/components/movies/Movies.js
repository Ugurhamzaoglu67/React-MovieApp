import React from "react";
import "./movies.css";
import {Link} from 'react-router-dom'


// FUNCTION
const Movies = (props) => {


  const truncateFunc = (str, max_length ) => {
      if(!str) return null;
      if(str.length <= max_length) return str;
      
      return `${str.substring(0,max_length)}...` 
  }


  return (
    <div className=" imageCss-container mb-4">
      {props.movies_list.map((movie, i) => (

        <div className="" key={i}>
          <div className="card ">
            <img className="card-img-top" src={movie.imageUrl}
              /* src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}*/
              alt="w"
            />
              
            <Link
            
              type='button' 
              className="btn w-25 btn-sm text-muted btn-outline-dark edit-link-style"
              to={`/edit-movie/${movie.id}`}
            >
              Edit 
            </Link>



            <div className="card-body py-4" style={{ height: "auto" }}>
                <h5 className="card-title text-center">{movie.name}</h5>
                <p className="card-text">{truncateFunc(movie.overview, 75)} <a  href="#qw" className='mt-2 float-right btn btn-sm btn-primary'>Read More</a></p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>

              <div className="d-flex justify-content-between align-items-center ">
                    <button type="button" 
                    
                      onClick={(e) => props.plsDeleteMovie(movie)} 
                    
                    className="btn btn-outline-danger">
                      <i className="far fa-trash-alt"></i>
                    </button>

                    <span  className="badge badge-warning" style={{ fontSize: "1.5rem" }} >
                      <i className="far fa-heart"> {movie.vote_count}</i>
                    </span>

                    <span className="badge badge-dark" style={{ fontSize: "1.5rem" }}>
                      <i className="far fa-star"> {movie.rating}</i>
                    </span>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
