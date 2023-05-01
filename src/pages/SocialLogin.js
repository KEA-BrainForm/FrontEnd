import React from "react";
import { Navigate } from "react-router-dom";
import queryString from "query-string";

function SocialLogin() {

    const token = queryString.parse(window.location.search).token;

    if(token) {
        localStorage.setItem("ACCESS_TOKEN", token);
        return(
            <Navigate
            to={{
                pathname: "/"
            }}>
            </Navigate>
        );
    } else {
        return(
            <Navigate
            to={{
                pathname: "/login"
            }}>
            </Navigate>
        );
    }
}

export default SocialLogin;