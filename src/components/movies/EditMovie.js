
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



class EditMovie extends Component {

    state = {
        name:"",
        imageUrl:"",
        overview:"",
        rating:"",
        vote_count:""
    }



    async componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)


       const result = await axios.get(`http://localhost:3004/movies_list/${id}`)
        console.log(result.data)

        this.setState({
            name : result.data.name,
            imageUrl : result.data.imageUrl,
            overview: result.data.overview,
            rating : result.data.rating,
            vote_count : result.data.vote_count,
            
        })
    }

    inputChange = (e) => {
        
        this.setState({
            [e.target.name] : e.target.value
        })

    }




    formSubmitHandle = (e) => {
        e.preventDefault();


        const { name, imageUrl, overview, rating, vote_count } = this.state
        console.log(this.props.match.params.id)

        const id = this.props.match.params.id


        const updateMovie = {
            name,
            imageUrl,
            overview,
            rating,
            vote_count
        }

        this.props.oneditMovie(id, updateMovie) // child'dan ->  parenta props 
        this.props.history.push('/') // -> res.redirect('/')

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
                    <input type="text" 
                        value={this.state.name} 
                        className="form-control" 
                        name="name" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={this.inputChange}
                     
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Image URL</label>
                    <input type="text"   
                        value={this.state.imageUrl} 
                        className="form-control" 
                        name="imageUrl" id="exampleInputEmail1" 
                        onChange={this.inputChange}
                        aria-describedby="emailHelp" />
                </div>



                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Overview</label>
                    <textarea className="form-control" 
                        name="overview" 
                        onChange={this.inputChange}
                        id="exampleFormControlTextarea1" rows="3" value={this.state.overview}></textarea>
                </div>

                <div className="form-group w-25" >
                    <label htmlFor="exampleInputPassword1">Rating</label>
                    <input type="number" value={this.state.rating} step="0.01" min="0" max="10"  
                         onChange={this.inputChange}
                         name="rating" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="form-group w-25" >
                    <label htmlFor="exampleInputPassword1">Vote Count</label>
                    <input type="number" step="0.01" 
                    value={this.state.vote_count}  min="0"
                    onChange={this.inputChange}  
                    name="vote_count" className="form-control" id="exampleInputPassword1" />
                </div>


                <input 
                    value=" Edit Movie"
                    type="submit" 
                    className="btn btn-success" />
                    
              

            </form>

            </div>   
       
        )
    }
}


export default  EditMovie