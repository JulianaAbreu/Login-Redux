import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {login} from './actions/LoginAction'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      user: [],
      email: '',
      password: '',
      error: ''
    }
  }

  /* handleSubmitLogin(e) {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    const state = this.state;

    fetch('https://private-d5cad-teste594.apiary-mock.com/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            email: email,
            password: password
        }),
    })
        .then(response => {
            console.log('aqui');
            if (response.status >= 200 && response.status < 300) {
                console.log('response;', response)
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }

        })
        .catch(error => { console.log('request failed', error); });
}
 */
  
   handleSubmit(dispatch,e, email, password){
     email = this.state.email;
     password = this.state.password;
     e.preventDefault();
     return dispatch(login(email,password));
   } 
  handleChangeEmail(e) {
    e.preventDefault();

    this.setState({
      email: e.target.value
    })
  }
  handleChangePass(e) {
    e.preventDefault();

    this.setState({
      email: e.target.value
    })
  }
  render() {

    return (
      <div className="App">
        <form method="POST" onSubmit={(e) => this.handleSubmitLogin(e)}>
          <input type="email" name="email" onChange={this.handleChangeEmail} />
          <input type="password" name="password" onChange={this.handleChangePass} />
          <button>Logar</button>
        </form>
      </div>
    );
  }
}

export default App;
