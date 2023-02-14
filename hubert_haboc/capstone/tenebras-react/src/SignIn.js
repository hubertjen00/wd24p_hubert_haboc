import './Sample.css';
import {
    Link
  } from "react-router-dom";

function SignIn() {
    return (
        <div>
            <form class="form-signin">
                <h2 class="form-signin-heading">Please Sign In</h2>
                <input name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                <input name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                <div class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-dark btn-block d-grid gap-2 col-12 mx-auto" type="button" id="signInBtn">Sign in</button>
            </form>
                <h5>No Account Yet?  <Link to = "/signUp">Register Here</Link></h5>
        </div>

    );
};

export default SignIn;
