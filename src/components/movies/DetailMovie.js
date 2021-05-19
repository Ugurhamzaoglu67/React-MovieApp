import React, {Component} from 'react'
import axios from 'axios'
import './movies.css'
import {Link } from 'react-router-dom'

class DetailMovie extends Component {
    
    state = {
        name:"",
        imageUrl:"",
        overview:"",
        rating:"",
        vote_count:""
    }



    async componentDidMount() {
        const id = this.props.match.params.id // TIKLANAN NEYSE ONUN id 'si ile beraber alır
        console.log(id)


       const result = await axios.get(`http://localhost:3004/movies_list/${id}`) //DB'den (json) o id'ye ait ne varsa getirir
        console.log(result.data)

        this.setState({
            name : result.data.name,
            imageUrl : result.data.imageUrl,
            overview: result.data.overview,
            rating : result.data.rating,
            vote_count : result.data.vote_count,
            
        })
      
    }



    render() {
        return(

         
            <div >

              <Link to='/'>
                <h1 className="text-white ml-3" style={{
                    borderBottom:"2px solid white"
                }}>Home Page </h1>
              </Link>
                 <div className="card mb-3 mx-4 " style={{marginTop:"8rem",fontSize:"1.2rem"}} >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={this.state.imageUrl} alt="..."  
                                style={{width:"80%"}}
                            />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title textStyle">
                                 Movie Name : {this.state.name}</h5>
                                <p className="card-text">
                                    <span className="textStyle"> Description :</span> {this.state.overview}</p>
                                <p className="card-text ">
                                Rating : 
                                <span className="badge badge-dark" style={{ fontSize: "1.5rem" }}>
                            <i className="far fa-star"> {this.state.rating}</i>
                            </span>



                                </p>
                                <p className="card-text ">
                            
                                     Vote Count:
                        
                                <span  className="badge badge-warning" style={{ fontSize: "1.5rem" }} >
                                    <i className="far fa-heart"> {this.state.vote_count}</i>
                                    </span>



                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
        )
    }



}

export default DetailMovie

