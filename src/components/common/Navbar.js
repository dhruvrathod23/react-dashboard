
import { Link } from 'react-router-dom'
//import '../../assets/css/Tog.css';
import "../../assets/css/style.css";
import { FaBuffer , FaCentercode} from 'react-icons/fa';
import React from 'react'

const Navbar = () => {
  return (
   <div class="c-wrapper c-fixed-components ">

  <header class="c-header c-header-light c-header-fixed c-header-with-subheader">
      <a class="c-header-brand d-lg-none" href="#">
         </a>
         <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
    <label for="openSidebarMenu" class="sidebarIconTogglee">
      <div class="spinner diagonal part-1"></div>
      <div class="spinner horizontal"></div>
      <div class="spinner diagonal part-2"></div>
    </label>
    <br></br>
    <div>
        <ul class="c-header-nav d-md-down-none">
          <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#"></a></li>
        
          <li className="nav-item">
        <Link className="nav-link" to='/dashboard'>
                  <span className="no-icon"> Dashboard </span>
                </Link>
              </li>
        
        </ul>
        </div>
        <ul class="c-header-nav ml-auto mr-4">
        
        
         
          <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#"> </a>
        </li>
       
       
          <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
              <svg class="c-icon">
              
              </svg></a></li>
          <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
             </a></li>
         
          <li className="nav-item">
        <Link className="nav-link" to='/Login'>
                  <span className="no-icon">Log out</span>
                </Link>
              </li>
        </ul>
  </header>
  <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/Login'>
                  <span className="no-icon">Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Navbar;








{/*import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/Search.css'
import Login from "../dashboard/Login";
import "../../assets/css/style.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg " color-on-scroll="500">
        <div className="container-fluid">
   
  
        <div class="boxx">
        <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
<svg class="c-icon c-icon-lg">

</svg>
</button>
   

 

 </div>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/Login'>
                  <span className="no-icon">Log out</span>
                </Link>
              </li>
            </ul>
          </div>
  
    )
  }
}

export default Navbar*/}






























