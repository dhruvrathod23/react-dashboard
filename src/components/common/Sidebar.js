import React from "react";
import { slide as Menu } from "react-burger-menu";
//import "../../assets/css/style.css";
import '../../assets/css/light-bootstrap-dashboard.css'
import { Link , NavLink} from 'react-router-dom'
import { FaBuffer , FaAirFreshener,FaUserCircle,FaSellcast,  } from 'react-icons/fa';
//import '../../assets/css/Tog.css';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
export default (props) => {
  





  return (
    <div>
    

    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>
    
  <div id="sidebarMenu">
      <ul class="sidebarMenuInnerr">
    
            <li>
            <NavLink  to="/dashboard">
            <FaBuffer /> 
              Dashboard
              </NavLink>
            </li>
        
            <li >
              <NavLink  to="/sales">
                
               <FaSellcast />
                Sales
              </NavLink>
            </li>
            <li >
              <NavLink to="/manage">
              < BsFillGrid3X3GapFill/>
                Manage
              </NavLink>
            </li>
            <li >
              <NavLink to="/profile">
              <FaUserCircle />
                user
              </NavLink>
            </li>
            
          
          </ul>
          </div>
    </div>
   
    
      );
    };
    {
      /*import React, { Component } from 'react'
    import { NavLink, Link } from 'react-router-dom'
    
    class Sidebar extends Component {
      render() {
        return (
          <div className="sidebar">
            <div className="sidebar-wrapper">
              <div className="logo">
                <Link to='/' className="simple-text">
                  MasterKoder
                </Link>
              </div>
              <ul className="nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to='/dashboard'>
                    <i className="nc-icon nc-chart-pie-35"></i>
                    <p>Dashboard</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/profile'>
                    <i className="nc-icon nc-circle-09"></i>
                    <p>User </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/Manage'>
                  <i className="nc-icon nc-chart-pie-35"></i>
                    <p>Manage</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/Sales'>
                    <i className="nc-icon nc-circle-09"></i>
                    <p>Sales</p>
                  </NavLink>
                </li>
    
              </ul>
            </div>
          </div>
        )
      }
    }
    
    export default Sidebar*/
    }
    

