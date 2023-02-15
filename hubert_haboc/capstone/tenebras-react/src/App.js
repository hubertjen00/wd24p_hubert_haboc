import './App.css';
import './Sample.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import CreateProj from './CreateProj';

function App() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
          <div class="container-fluid">
            <img className='logo' src="/img/ten-icon.jpg"/>
            <a class="navbar-brand">TENEBRAS Electrical</a>
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a href="/home.html" class="nav-link active" aria-current="page">Home</a>
                </li>
                <li class="nav-item">
                  <Link to="/signIn" class="nav-link active" href="#">Sign In</Link>
                </li>
                <li class="nav-item">
                  <Link to="/signUp" class="nav-link active" href="#">Sign Up</Link>
                </li>
                <li class="nav-item">
                  <Link to="/dashboard" class="nav-link" href="#">Dashboard</Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <Link to= "/signIn" ><button class="btn btn-outline-light" type="submit">Logout</button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
        <br/>
        <Routes>
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="createProj" element={<CreateProj />} />
        </Routes>
      </Router>
    </div>
    
  )
};

export default App;
