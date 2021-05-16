import React, { Component } from 'react'
import Search from '../search/Search.js'
import Movies from '../movies/Movies'

class App extends Component {

    state = {
         movies_list : [

            {
                "id":1,
                "name":"Fight Club",
                "rating":7.8,
                "overview":"Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
                "imageUrl":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
        
            },
        
            {
                "id":2,
                "name":"Grizzly Man",
                "rating":6.9,
                "overview": "Werner Herzog's documentary film about the \"Grizzly Man\" Timothy Treadwell and what the thirteen summers in a National Park in Alaska were like in one man's attempt to protect the grizzly bears. The film is full of unique images and a look into the spirit of a man who sacrificed himself for nature.",
        
                "imageUrl":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zuZWpcuye25rpsiZ4XzsAvmLDHG.jpg"
        
            },
        
            {
                "id":3,
                "name":"Reservoir Dogs",
                "rating":8.8,
                "overview": "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
                "imageUrl":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg"
        
            },       
        ] ,

        searchValue: ""
    }

//______________________________________ DELETE ITEM _______________________________
    deleteMovie = (movie) => {
        const new_movies_list = this.state.movies_list.filter(mv => 
                mv.id !== movie.id
            )   
         this.setState( state=> ({  //Var olan state'yi güncelliyoruz burda, Yani önceki durumun üzerinden işlem yapıyoruz.
             movies_list : new_movies_list
          })) 

    }
//____________________________________ SEARCH MOVIE __________________________________ (Eventi Parent'ta YAKALADIK, Childe PROPS OLARAK YOlluyoruz)
    searchMovies = (e) => {
            this.setState({
                searchValue : e.target.value // state de  için boş olan searchValue'yi, EVENTIN targetinden gelen value'sini state'deki boş olan searchValue'ye aktarıyoruz. 
            })
    }



    render() {

        let filterMovies = this.state.movies_list.filter((movie) => {

            return movie.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1 || 
             movie.overview.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1 
               
            
           
           
        })



        return(
           <div className="container">
               <div className="row">
                    <div className="col-md-12">
                        <Search searchMovie={this.searchMovies}   />
                    </div>
               </div>

               <Movies 
                movies_list = {filterMovies} 
                plsDeleteMovie={this.deleteMovie}  // PROPS HALİNE GETİRİYORUZ, PARENT'TAKİ FUNCTIONU.

               />
               
           </div>
        )




    }

}


export default App;