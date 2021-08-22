import React from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../routes/index.js";

const RouteGuard = (props) => {
  const history = useHistory();
  const token = localStorage.getItem("auth-token");

  if (!token) {
    history.push(ROUTES.REGISTER);
  }
  return <>{token ? props.children : ""}</>;
};

export default RouteGuard;
