import React,{useState,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { isAuthenticated } from "../services/Api";
import { useStateValue } from "../StateProvider";
const NavBar = () => {
  const [auth, setAuth] = useState(false)
  const [, dispatch] = useStateValue();

  useEffect(()=>{
    if(localStorage.getItem('jwt'))
    {
      setAuth(true)
    }
  },[auth])
  const logout=e=>{
    setAuth(false)
    localStorage.removeItem('jwt')
    dispatch({
      type: "ADDDATASET",
      data: [],
    });
  }
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/editprofile">
              Edit Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dataset">
              Dataset
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/createsearch">
              Create Search
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          {isAuthenticated()? <li onClick={logout} className="nav-item">
            <NavLink className="nav-link mr-2" to="/">
              Logout
            </NavLink>
          </li>:
           <li className="nav-item">
           <NavLink className="nav-link mr-2" to="/signin">
             Login
           </NavLink>
         </li>
          }
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              SigUp
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
