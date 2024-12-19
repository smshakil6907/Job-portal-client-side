import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons8-64.png";
import AuthContext from "../context/AuthContext";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // console.log("Successfully sign out ");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img className="w-12" src={logo} alt="" />
        <h2 className="text-2xl ml-4 font-bold">Job-portal</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/myApplication">My-Application</NavLink>
          </li>
          <li>
            <NavLink to="/addJobs">AddJobs</NavLink>
          </li>
          <li>
            <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              Log-out
            </button>
          </>
        ) : (
          <>
            <button className="btn">
              <Link to="/register">Register</Link>
            </button>
            <button className="btn">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
