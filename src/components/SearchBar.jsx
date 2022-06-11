import React from "react";

const SearchBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="input-group mb-3">
                        <input className="form-control" placeholder="Looking for something specific? Search here!" aria-describedby="basic-addon2" />

                        <button className="btn btn-outline-warning" type="button">
                            Search
                        </button>


                    </div>


                </div>
            </div>
        </div>
    );
}

export default SearchBar;
