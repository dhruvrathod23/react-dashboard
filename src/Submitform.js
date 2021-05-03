import React from 'react'

class   Submitform extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('https://webhook.site/446aaa15-71f6-44ca-9051-019f5ef6cb31',
      
      {
       
        
      method: 'POST',
        
        body: data,
        //body:JSON.stringify(data),
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className = "form-group">
          <label htmlFor="username">Enter username</label>
          <input id="username" className="form-control" name="username" type="text" />
  
          <label htmlFor="email">Enter your email</label>
          <input id="email" className="form-control" name="email" type="email" />
  
          <label htmlFor="birthdate">Enter your birth date</label>
          <input id="birthdate" name="birthdate" type="text" />
       
          <label>school name</label>
          <input type = "text" name = "schoolname"/>

          <button className="btn btn-dark btn-lg btn-block">Send data!</button>
          </div>
        </form>
      );
    }
  }
  export default Submitform