import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Auth";
import firebase from "../firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return (
      <div className='Navbar'>
        <ul>
          <li>
            <NavLink className='link' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className='link'
              onClick={() => firebase.auth().signOut()}
              to='/'
            >
              Sign Out
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className='Navbar'>
      <ul>
        <li>
          <NavLink className='link' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/components/Login'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className='link' to='/components/Signup'>
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
