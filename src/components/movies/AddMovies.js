import React, { Component } from 'react'


class AddMovies extends Component {
    render() {
        return (
            
           
            <form className="text-white w-75" style={{margin:'8rem auto'}}>
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
                    <input type="number" name="rating" min="0" max="10" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success">Add Movie</button>

            </form>
       

    
        )
    }
}


export default  AddMovies