import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./routes";
import Axios from "axios";
import "./App.css";
import UserContext from "./context/UserContext";
import StartPage from "./Components/StartPage/index.js";
import RegisterPage from "./Components/RegisterPage/RegisterPage.js";
import SignInPage from "./Components/SignInPage/SignInPage.js";
import HomePage from "./Components/HomePage/index.js";
import RouteGuard from "./RouteGuard/index.js";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:9000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:9000/users", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <div>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path={ROUTES.START_PAGE} component={StartPage} />
            <Route exact path={ROUTES.REGISTER} component={RegisterPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <RouteGuard>
              <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
            </RouteGuard>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
