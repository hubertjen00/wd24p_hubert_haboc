import './Sample.css';
import {
    Link
} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const handleChangeEmailInput = (element) => {
        setEmail(element.target.value);
    }
    
    const handleChangePasswordInput = (element) => {
        setPassword(element.target.value);
    }
    
    const navigate = useNavigate();
    
    const logIn = async () => {
        const requestData = {
            email: email,
            password: password,
        }

    const response = await axios.post('http://localhost:8000/api/login', requestData)
    console.log(response);
    localStorage.setItem('user_name', response.data.name);
    navigate ('/dashboard');
        
    }

    return (
        <div>
            <form class="form-signin">
                <h2 class="form-signin-heading">Please Sign In</h2>
                <input onChange={handleChangeEmailInput} name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                <input onChange={handleChangePasswordInput} name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                <div class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button onClick={logIn}
                    class="btn btn-lg btn-dark btn-block d-grid gap-2 col-12 mx-auto"
                    type="button"
                    id="signInBtn"
                >
                    Sign in
                </button>
            </form>
            <h5>No Account Yet?  <Link to="/signUp">Register Here</Link></h5>
        </div>

    );
};

export default SignIn;
