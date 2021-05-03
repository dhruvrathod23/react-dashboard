
//import './App.css';
import Employeelist from "../dashboard/Employeelist";
import Editemployee from "../dashboard/Editemployee";
import Addemployee from "../dashboard/Addemployee";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../assets/css/data2.css'
function Data2() {
  return (
    <div className="container body-content">
          <Router>
            <Switch>
              <Route path="../others-scrap/Data2" exact component={Employeelist} />
              <Route path="../dashboard/editemployee/:id" exact component={Editemployee} />
              <Route path="../dashboard/addemployee" exact component={Addemployee} />
            </Switch>
          </Router>
    </div>
  );
}

export default Data2;














{/*import React from 'react'
//import './Data2.css';
import { NavLink, Link } from 'react-router-dom'
import Form from './Form'
import Popup from 'reactjs-popup';
import Edit from './Edit'
const Data2 = () => {

    return (
        <div>
           
<div class="cardd">
  
  <div class="card-body">
    <div id="table" class="table-editable">
    
      <span class="table-add float-right mb-3 mr-2">
     
      
        <Link to='/Form' className="btn btn-danger btn-rounded btn-sm my-0">
             Create
            </Link>
          </span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <thead>
          <tr>
            <th class="text-center">Person Name</th>
            <th class="text-center">Age</th>
            <th class="text-center">Company Name</th>
            <th class="text-center">Country</th>
            <th class="text-center">City</th>
            <th class="text-center">Sort</th>
            <th class="text-center">Remove</th>
            <th class="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >Aurelia Vega</td>
            <td >30</td>
            <td>Deepends</td>
            <td >Spain</td>
            <td >Madrid</td>
            <td class="pt-3-half">
              <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
                    aria-hidden="true"></i></a></span>
              <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
                    aria-hidden="true"></i></a></span>
            </td>
            <td>
        
              <span class="table-remove">   <button type = "button" class= "btn btn-danger btn-rounded btn-sm my-0"> Remove</button> 
  </span>
            </td>
            <td>
              <span class="table-remove"><Link to='/Edit' className="btn btn-danger btn-rounded btn-sm my-0">
             Edit
            </Link></span>
            </td>
          </tr>
         
          <tr>
            <td class="pt-3-half" >Guerra Cortez</td>
            <td class="pt-3-half" >45</td>
            <td class="pt-3-half" >Insectus</td>
            <td class="pt-3-half" >USA</td>
            <td class="pt-3-half" >San Francisco</td>
            <td class="pt-3-half">
              <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
                    aria-hidden="true"></i></a></span>
              <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
                    aria-hidden="true"></i></a></span>
            </td>
            <td>
            <span class="table-remove">    <button type = "button" class= "btn btn-danger btn-rounded btn-sm my-0"> Remove</button></span>
            </td>
            <td>
            <span class="table-remove"><Link to='/Edit' className="btn btn-danger btn-rounded btn-sm my-0">
             Edit
            </Link></span>
            </td>
          </tr>
          
          <tr>
            <td class="pt-3-half" >Guadalupe House</td>
            <td class="pt-3-half" >26</td>
            <td class="pt-3-half" >Isotronic</td>
            <td class="pt-3-half" >Germany</td>
            <td class="pt-3-half" >Frankfurt am Main</td>
            <td class="pt-3-half">
              <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
                    aria-hidden="true"></i></a></span>
              <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
                    aria-hidden="true"></i></a></span>
            </td>
            <td>
            <span class="table-remove">    <button type = "button" class= "btn btn-danger btn-rounded btn-sm my-0"> Remove</button>  
  </span>
            </td>
            <td>
              <span class="table-remove">  <Link to='/Edit' className="btn btn-danger btn-rounded btn-sm my-0">
  Edit
 </Link>
                </span>
            </td>
          </tr>
         
         
          <tr class="hide">
            <td class="pt-3-half" >Elisa Gallagher</td>
            <td class="pt-3-half" >31</td>
            <td class="pt-3-half" >Portica</td>
            <td class="pt-3-half" >United Kingdom</td>
            <td class="pt-3-half" >London</td>
            <td class="pt-3-half">
              <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up"
                    aria-hidden="true"></i></a></span>
              <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down"
                    aria-hidden="true"></i></a></span>
            </td>
            <td>
            <span class="table-remove">   <button type = "button" class= "btn btn-danger btn-rounded btn-sm my-0"> Remove</button>
    
 </span>
            </td>
            <td>
            <span class="table-remove"><Link to='/Edit' className="btn btn-danger btn-rounded btn-sm my-0">
             Edit
            </Link></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

        </div>
    )
}

export default Data2*/}
