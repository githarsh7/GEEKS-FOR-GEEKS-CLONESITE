import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaSearch
} from "react-icons/fa";

import logo from "../assets/logo.png";

function Navbar({ setSearchTerm }) {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const handleSearch = (e) => {

    const value = e.target.value;

    setSearch(value);

    setSearchTerm(value);
  };

  return (

    <div style={{ position: "relative" }}>

      <nav className="navbar">

        <div className="logo">

          <img
            src={logo}
            alt="logo"
          />

          <div className="logo-text">

            <h1>
              GeeksforGeeks
            </h1>

            <p>
              Learn • Build • Grow
            </p>

          </div>

        </div>

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={handleSearch}
          />

        </div>

        <div
          className="hamburger"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }

        </div>

        <div
          className={
            menuOpen
              ? "nav-links active-menu"
              : "nav-links"
          }
        >

          <NavLink
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            All
          </NavLink>

          <NavLink
            to="/full-stack-development"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Full Stack
          </NavLink>

          <NavLink
            to="/data-science"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Data Science
          </NavLink>

          <NavLink
            to="/cyber-security"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Cyber Security
          </NavLink>

          <NavLink
            to="/career"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Career
          </NavLink>

        </div>

      </nav>

    </div>
  );
}

export default Navbar;
