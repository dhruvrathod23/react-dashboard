
import React , {Component} from 'react'

class Apilog extends Component {

 async postData(){

    try {
        const  result = await fetch('https://webhook.site/446aaa15-71f6-44ca-9051-019f5ef6cb31',{
            method : 'post',
            mode : 'no-cors',
            headers:{
                'Accept':'application/json',
                'content-type':'application/json',
            },
            body: JSON.stringify({
               
                'email':'dhruvrathod@gmail.com',
                'name':'dhruv',
                'lastname':'rathod',
            })
        });
     
       
        console.log('Result:' + result)

    }catch(e) {
        console.log(e)
    }
}
 render (){
    return (
        <div>
        <form  action="localhost:3000/backend/admin/login">
           <input type ="text" id="email "name="email" placeholder = "email"></input>
           <button onClick = {()=>this.postData()}>Submit form</button> 
        </form>
        </div>
    );
 }
}

export default Apilog; 







//https://webhook.site/#!/446aaa15-71f6-44ca-9051-019f5ef6cb31/db9863a3-2d85-4cb2-bf8e-3b95e65bac81/1







