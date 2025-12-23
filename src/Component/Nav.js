/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../index.css";
import { useState } from "react";

const NavBar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    filterBySearch(searchValue);
    setSearchValue("");
  };
  const onSearchKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      filterBySearch(searchValue);
      setSearchValue("");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          Worldwide Delices
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              onKeyDown={onSearchKey}
            />
            <button onClick={onSearch} className="btn btn-light" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
