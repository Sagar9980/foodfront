import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import * as ROUTES from "../../routes";
import axios from "../Axios/axios";
import UserContext from "../../context/UserContext";

import logoFacebook from "../../images/facebook.png";
import logoGoogle from "../../images/google.png";

function SignInForm() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await axios.post("/users/login", loginUser);
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
    <div className="signin-form-container">
      <div className="signin-form-header">
        <h1>Sign In</h1>
      </div>
      <form onSubmit={submit}>
        {/* display error */}
        {error && <p className="signin-error">{error}</p>}
        {/* email */}
        <div className="signin-form-email">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Password */}
        <div className="signin-form-password">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Signup button */}
        <div className="signin-form-button">
          <button type="submit">Sign In</button>
        </div>
      </form>
      <div className="signin-other-option">
        <p>or Sign In with,</p>
        {/* facebook logo || google logo || twitter Logo */}
        <div className="signin-with-social">
          {/* google */}
          <div className="signin-with-google">
            <img src={logoGoogle} alt="logo" />
            <p>Google</p>
          </div>
          {/* facebook */}
          <div className="signin-with-facebook">
            <img src={logoFacebook} alt="logo" />
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
