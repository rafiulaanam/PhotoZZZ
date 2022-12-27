import React from "react";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import logo from "../../../Assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
const navigate = useNavigate()
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate('/')
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img src={logo} className="w-10 mr-2" alt="" /> PhotoZZZ
          </Link>
        </div>
        <div className="flex-none">
          <div className="navbar-end mr-2">
            <Link to={"/blog"} className="btn btn-ghost">
              Blog
            </Link>
          </div>
          {user?.uid ? (
         <>
         <div className="navbar-end mr-2">
                <Link to={"/addservice"} className="btn btn-ghost">
                  Add_Service
                </Link>
              </div>
         <div className="navbar-end mr-2">
                <Link to={"/review"} className="btn btn-ghost">
                  My Review
                </Link>
              </div>




         <p>{user?.displayName}</p>
            <div className="dropdown dropdown-end ml-4">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="#!" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="#!">Settings</a>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
         </>
          )
           :
            (


              <>

<div className="navbar-end mr-2">
                <Link to={"/login"} className="btn btn-ghost">
                  Login
                </Link>
              </div>
              <div className="navbar-end mr-4">
                <Link to={"/register"} className="btn btn-ghost">
                  Register
                </Link>
              </div>


              <span className="ml-3">
              <FaUser></FaUser>
            </span>
              </>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
