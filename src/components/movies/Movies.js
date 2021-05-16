import React, { Component } from "react";


class Movies extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card ">
                <img
                className="card-img-top"
                src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
                alt="w"
                />

            <div className="card-body">
                <h5 className="card-title">Card title 1</h5>
                <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
                <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </p>

                <div className="d-flex justify-content-between align-items-center ">
                    <button type="button" className="btn btn-outline-dark">Edit</button>
                    <span className="badge badge-dark" style={{fontSize:'1.5rem'}}>8.6</span>
                </div>

            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card ">
            <img
              className="card-img-top"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zuZWpcuye25rpsiZ4XzsAvmLDHG.jpg"
              alt="w"
            />

            <div className="card-body">
              <h5 className="card-title">Card title 2</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card ">
            <img
              className="card-img-top"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg"
              alt="w"
            />

            <div className="card-body">
              <h5 className="card-title">Card title 3</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
