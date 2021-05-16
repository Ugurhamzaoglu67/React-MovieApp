import React, { Component } from 'react'
import './search.css'


class Search extends Component {
    render() {
        return (
         
        
        <nav className="navbar  navbar-dark bg-dark my-4">
            <form className="form-inline w-100">
                <input className="form-control mr-sm-2 myinp"  type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
           
        )
    }
}

export default Search