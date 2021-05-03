import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Dashboard from '../dashboard/dashboard'
import UserProfile from '../common/UserProfile'
import Manage from '../common/Manage'
import Sales from '../common/Sales'
//import Form from './Form'
import Sidebar from '../common/Sidebar';
//import Edit from './Edit'
import Editemployee from '../dashboard/Editemployee'
import Addemployee from '../dashboard/Addemployee'
//import Sales from '../sales/sales'

import Batch from '../batches/batch'
import Course from '../courses/course'
import Journey from '../journey/journey'
import Lecture from '../lectures/lecture'
import Masterjourney from '../master-journey/mstjourney'
import Mcq from '../mcqs/mcq'
import Pdf from '../pdf/pdf'
import Ppt from '../ppt/ppt'
import Project from '../project/project'
import Student from '../student/student'
import Topic from '../topics/topic'
import Videos from '../videos/videos'
import Qna from '../qna/qna'

import Editbatch from '../batches/editbatch'
import Editcourse from '../courses/editcourse'
import Editjourney from '../journey/editjourney'
import Editlecture from '../lectures/editlecture'
import Editmasterjourney from '../master-journey/editmstjourney'
import Editmcq from '../mcqs/editmcq'
import Editpdf from '../pdf/editpdf'
import Editppt from '../ppt/editppt'
import Editproject from '../project/editproject'
import Editstudent from '../student/editstudent'
import Edittopic from '../topics/edittopic'
import Editvideos from '../videos/editvideos'
import Editqna from '../qna/editqna'

import Addbatch from '../batches/addbatch'
import Addcourse from '../courses/addcourse'
import Addjourney from '../journey/addjourney'
import Addlecture from '../lectures/addlecture'
import Addmasterjourney from '../master-journey/addmstjourney'
import Addmcq from '../mcqs/addmcq'
import Addpdf from '../pdf/addpdf'
import Addppt from '../ppt/addppt'
import Addproject from '../project/addproject'
import Addstudent from '../student/addstudent'
import Addtopic from '../topics/addtopic'
import Addvideos from '../videos/addvideos'
import Addqna from '../qna/addqna'
//import Login from "./components/Login";

class Main extends Component {
  render() {
    return (
        
      
      <div className="main-panel">
      
      
        
       <Sidebar />

  
      
      
        <Navbar />
        <Switch>
        <Route path ="/dashboard/Editemployee/:id" component={Editemployee} />
        <Route path ="/dashboard/Addemployee" component={Addemployee} />

        <Route path ="/batches/batch" component={Batch} />
        <Route path ="/courses/course" component={Course} />
        <Route path ="/journey/journey" component={Journey} />
        <Route path ="/lectures/Lecture" component={Lecture} />
        <Route path ="/master-journey/mstjourney" component={Masterjourney} />
        <Route path ="/mcqs/mcq" component={Mcq} />
        <Route path ="/pdf/pdf" component={Pdf} />
        <Route path ="/ppt/ppt" component={Ppt} />
        <Route path ="/project/project" component={Project} />
        <Route path ="/student/student" component={Student} />
        <Route path ="/topics/topic" component={Topic} />
        <Route path ="/videos/videos" component={Videos} />
        <Route path ="/qna/qna" component={Qna} />

        <Route path ="/batches/editbatch/:id" component={Editbatch} />
        <Route path ="/courses/editcourse/:id" component={Editcourse} />
        <Route path ="/journey/editjourney/:id" component={Editjourney} />
        <Route path ="/lectures/editlecture/:id" component={Editlecture} />
        <Route path ="/master-journey/editmstjourney/:id" component={Editmasterjourney} />
        <Route path ="/mcqs/editmcq/:id" component={Editmcq} />
        <Route path ="/pdf/editpdf/:id" component={Editpdf} />
        <Route path ="/ppt/editppt/:id" component={Editppt} />
        <Route path ="/project/editproject/:id" component={Editproject} />
        <Route path ="/student/editstudent/:id" component={Editstudent} />
        <Route path ="/topics/edittopic/:id" component={Edittopic} />
        <Route path ="/videos/editvideos/:id" component={Editvideos} />
        <Route path ="/qna/editqna/:id" component={Editqna} />

        <Route path ="/batches/addbatch" component={Addbatch} />
        <Route path ="/courses/addcourse" component={Addcourse} />
        <Route path ="/journey/addjourney" component={Addjourney} />
        <Route path ="/lectures/addlecture" component={Addlecture} />
        <Route path ="/master-journey/addmstjourney" component={Addmasterjourney} />
        <Route path ="/mcqs/addmcq" component={Addmcq} />
        <Route path ="/pdf/addpdf" component={Addpdf} />
        <Route path ="/ppt/addppt" component={Addppt} />
        <Route path ="/project/addproject" component={Addproject} />
        <Route path ="/student/addstudent" component={Addstudent} />
        <Route path ="/topics/addtopic" component={Addtopic} />
        <Route path ="/videos/addvideos" component={Addvideos} />
        <Route path ="/qna/addqna" component={Addqna} />

        

          {/*<Route path ="/Form" component={Form} />*/}
          {/*<Route path ="/Edit" component={Edit} />*/}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/Manage" component={Manage} />
          <Route path="/Sales" component={Sales} />
          <Redirect from='*' to='/dashboard' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main