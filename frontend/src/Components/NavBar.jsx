import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Fragment>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow font-semibold"
            >
              <li>
                <NavLink to="/" className="text-2xl ">Homepage</NavLink>
              </li>
              <li>
                <NavLink to="/NihahNama" className="text-2xl">Nikah Nama Designs</NavLink>
              </li>
              <li>
                <NavLink to="/Birthday" className="text-2xl">Birth Day Designs</NavLink>
              </li>
              <li>
                <NavLink to="/Other" className="text-2xl">Other Designs</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <NavLink to="/" className="btn btn-ghost text-5xl monoton-regular">Graphics Gallery</NavLink>
        </div>
        <div className="navbar-end">
          <img src="/favicon.png" alt="" className="w-10" />
        </div>
      </div>
    </Fragment>
  );
}
