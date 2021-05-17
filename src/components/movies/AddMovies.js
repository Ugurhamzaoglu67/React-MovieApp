import React, { Component } from 'react'
import serialize from 'form-serialize'
import { Link } from 'react-router-dom'
class AddMovies extends Component {

    formSubmitHandle = (e) => {
        e.preventDefault();

        const  formNewMovie = serialize(e.target, { hash : true})
        console.log(formNewMovie)

        this.props.onAddNewMovie(formNewMovie)
    } 

    render() {
        return (
          
         <div>
             <Link to='/' className="backtoPage">
                Back to Page
             </Link>
            <form className="text-white w-75" onSubmit={ this.formSubmitHandle } style={{margin:'8rem auto'}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Image URL</label>
                    <input type="text" className="form-control" name="imageUrl" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>



                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Overview</label>
                    <textarea className="form-control" name="overview" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="form-group w-25" >
                    <label htmlFor="exampleInputPassword1">Rating</label>
                    <input type="number" step="0.01"  min="0" max="10" name="rating" className="form-control" id="exampleInputPassword1" />
                </div>

                <button 
                    
                    type="submit" 
                    className="btn btn-success">
                    Add Movie
                </button>

            </form>

            </div>   
       
        )
    }
}


export default  AddMovies