import './Sample.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeNameInput = (element) => {
    setName(element.target.value);
  }
  const handleChangeCompanyNameInput = (element) => {
    setCompanyName(element.target.value);
  }
  const handleChangeEmailInput = (element) => {
    setEmail(element.target.value);
  }
  const handleChangePasswordInput = (element) => {
    setPassword(element.target.value);
  }

  const navigate = useNavigate();

  const signUp = async () => {

    const requestData = {
      name: name,
      company_name: companyName,
      email: email,
      password: password,
    };

    const response = await axios.post('http://localhost:8000/api/users', requestData)
    console.log(response);
    localStorage.setItem('user_name', name);
    navigate('/dashboard');
  }

  return (
    <div>
      <form className="form-signin">
        <h2 className="form-signin-heading">Create Account</h2>
        <input onChange={handleChangeNameInput} name="firstName" type="text" id="firstName" className="form-control" placeholder="First Name, Last Name" required="" autofocus="" />
        {/* <input name="lastName" type="text" id="lastName" className="form-control" placeholder="Last Name" required="" autofocus="" /> */}
        <input onChange={handleChangeCompanyNameInput} name="companyName" type="text" id="companyName" className="form-control" placeholder="Company Name" required="" autofocus="" />
        <input onChange={handleChangeEmailInput} name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
        <input onChange={handleChangePasswordInput} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        <button onClick={signUp} className="btn btn-lg btn-dark btn-block d-grid gap-2 col-12 mx-auto" type="button" id="signUpBtn">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
