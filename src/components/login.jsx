import React from 'react';
import Axios from 'axios';

class Login extends React.Component {
   state = {
     fields: {
       email: '',
       password: '',
     },
   };

handleLogin = event => {
  event.preventDefault();
  console.log(this.state.fields);
  Axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/auth/login', {
    email: this.state.fields.email,
    password: this.state.fields.password,
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

handleFieldChange = (event) => {
  this.setState({
    fields: {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    },
  });
};

render() {
  return (
    <form onSubmit={this.handleLogin}>
      <label>Login: <input type="text" name="email" value={this.state.fields.email} onChange={this.handleFieldChange} /></label>
      <label>Password: <input type="password" name="password" value={this.state.fields.password} onChange={this.handleFieldChange} /></label>
      <button type="submit"> Login </button>
    </form>
  );
}
}

export default Login;
