import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Edit = () => {
    return (
        <div>
       
       <div>
               
               <h4 align = "center">Edit Field</h4>
              <div className="form-group" >
                          <label>Email</label>
                          <input type="email" className="form-control" placeholder="Enter email" />
                      </div>
      
                      <div className="form-group">
                          <label>Student Name</label>
                          <input type="Student name" className="form-control" placeholder="Enter Student Name" />
                          
                      </div>
                      <div className="form-group">
                          <label>standard</label>
                          <input type="Student name" className="form-control" placeholder="Enter standard" />
                      </div>
                      <div className="form-group">
                          <label>Subject</label>
                          <input type="Student name" className="form-control" placeholder="Enter subject" />
                      </div>
      
                      
                      <Link to='/' className="btn btn-dark btn-lg btn-block" height ="80%">
                   Update
                  </Link>
              
      </div>
        </div>
    )
}

export default Edit
