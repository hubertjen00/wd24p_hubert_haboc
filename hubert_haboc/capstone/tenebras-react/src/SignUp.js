// import './App.css';
import './Sample.css';

function SignUp() {
  return (
    <div> 
      <form className="form-signin">
            <h2 className="form-signin-heading">Create Account</h2>
            <input name="firstName" type="text" id="firstName" className="form-control" placeholder="First Name" required="" autofocus=""/>
            <input name="lastName" type="text" id="lastName" className="form-control" placeholder="Last Name" required="" autofocus=""/>
            <input name="companyName" type="text" id="companyName" className="form-control" placeholder="Company Name" required="" autofocus=""/>
            <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
            <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
            <button className="btn btn-lg btn-dark btn-block d-grid gap-2 col-12 mx-auto" type="button" id="signUpBtn">Sign up</button>
        </form>
    </div>
  );
}

export default SignUp;
