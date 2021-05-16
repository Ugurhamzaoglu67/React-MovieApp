import React, { Component } from "react";
import "./search.css";

class Search extends Component {


  formSubmit = (e) => {
    e.preventDefault();
  };


  render() {
    return (
      <form onSubmit={this.formSubmit} className="form-inline w-100 my-4">
        <div className="input-group mb-2 mr-sm-2 w-100">
            
          <input
            onChange={this.props.searchMovie}
            type="text"
            className="form-control "
            id="inlineFormInputGroupUsername2"
            placeholder="Search movie.."
            

          />

          <div className="input-group-prepend bg-dark">
            <div className="input-group-text searchSign">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
