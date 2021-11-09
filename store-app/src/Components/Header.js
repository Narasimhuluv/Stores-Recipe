import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <nav className="flex items_center">
          <figure className="flex_5">
            <img className="width_full" src="/images/logo.png" alt="logo" />
          </figure>
          <NavLink to="/">
            <h2 className="header_heading">Food Store</h2>
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
