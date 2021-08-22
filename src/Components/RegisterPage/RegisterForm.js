import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "../Axios/axios";
import UserContext from "../../context/UserContext";
import * as ROUTES from "../../routes";

//import images
import logoFacebook from "../../images/facebook.png";
import logoGoogle from "../../images/google.png";

function RegisterForm() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, username };
      await axios.post("/users/register", newUser);
      const loginRes = await axios.post("/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push(ROUTES.HOME_PAGE);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="signup-form-container">
      {/* signUp */}
      <div className="signup-form-header">
        <h1>Register</h1>
      </div>
      <form onSubmit={submit}>
        {/* display error */}
        {error && <p className="signin-error">{error}</p>}
        {/* username */}
        <div className="signup-form-username">
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => {
              setUsername(e.target.value);
              e.preventDefault();
            }}
          />
        </div>
        {/* email */}
        <div className="signup-form-email">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Password */}
        <div className="signup-form-password">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Signup button */}
        <div className="signup-form-button">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {/* sign up with social media */}
      <div className="signup-other-option">
        <p>or Sign In with,</p>
        {/* facebook logo || google logo || twitter Logo */}
        <div className="signup-with-social">
          {/* google */}
          <div className="signup-with-google">
            <img src={logoGoogle} alt="logo" />
            <p>Google</p>
          </div>
          {/* facebook */}
          <div className="signup-with-facebook">
            <img src={logoFacebook} alt="logo" />
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
