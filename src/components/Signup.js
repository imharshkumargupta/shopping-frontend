import React from 'react';
import { login } from '../repository';
import './Login.css';

export default class Login extends React.Component{

  constructor() {
    super();
    this.state = { name: '', password: '' };
    this.handleInputChange =this.handleInputChange.bind(this);
    this.submitLogin =this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  submitLogin(event){
    event.preventDefault();
    login(this.state)
      .then(token => window.location = '/')
      .catch(err => alert(err));
  }

  render() {
     return (
        <div className="text-center">
          <form onSubmit={this.submitLogin} className = "form-signin" >

          
            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>             
           
                
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="text" id = "inputEmail" className="form-control" name="name" onChange={this.handleInputChange} placeholder= "Username" />
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="text" id = "inputEmail" className="form-control" name="name" onChange={this.handleInputChange} placeholder= "Name" />
                <label for="inputPassword" class="sr-only">Password</label>
                  <input type="password" id = "inputPassword" className="form-control" name="password" onChange={this.handleInputChange} placeholder ="Password"/>
                <div class="radio mb-3">
                    
                        <input type="radio" value="buyer" id = "buyer" name ="optradio"/>
                        <label for = "buyer">&ensp; Buyer</label>
               <br/>
                    
                        <input type="radio" value="seller" id = "buyer" name = "optradio" />
                        <label for = "seller">&ensp; Seller</label>
                </div>
                
                <button type="submit" className="btn btn-lg btn-primary btn-block">Register</button>
              </form>
            
        </div>
    );
  }
}
