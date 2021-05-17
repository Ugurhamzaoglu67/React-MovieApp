import React, { Component } from "react";
import Search from "../search/Search.js";
import Movies from "../movies/Movies";
import axios from 'axios'
require('dotenv').config()




class App extends Component {
  state = {
    movies_list: [],
    searchValue: "",
  };




  async componentDidMount() {

        const result = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`)
        this.setState({
            movies_list : result.data.results
        })

  }


  // DELETE ITEM
  deleteMovie = async  (movie) => {

    axios.delete(`http://localhost:3004/movies_list/${movie.id}`)

    console.log("deleted...")
    const new_movies_list = this.state.movies_list.filter(
      (mv) => mv.id !== movie.id

    );
    this.setState((state) => ({
      //Var olan state'yi güncelliyoruz burda, Yani önceki durumun üzerinden işlem yapıyoruz.
      movies_list: new_movies_list,
    }));
  };


  // SEARCH MOVIE  (Eventi Parent'ta YAKALADIK, Childe PROPS OLARAK YOlluyoruz)
  searchMovies = (e) => {
    this.setState({
      searchValue: e.target.value, // state de  için boş olan searchValue'yi, EVENTIN targetinden gelen value'sini state'deki boş olan searchValue'ye aktarıyoruz.
    });
  };


  render() {
    let filterMovies = this.state.movies_list.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1 ||
        movie.overview
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Search searchMovie={this.searchMovies} />
          </div>
        </div>

        <Movies
          movies_list={filterMovies}
          plsDeleteMovie={this.deleteMovie} // PROPS HALİNE GETİRİYORUZ, PARENT'TAKİ FUNCTIONU.
        />
      </div>
    );
  }
}

export default App;
