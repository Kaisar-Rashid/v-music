import React from "react";

const Navbar = ({ getTrack, keyword, setKeyword }) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">K-Music</a>
          <form className="d-flex" role="search">
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" onClick={getTrack}>
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
