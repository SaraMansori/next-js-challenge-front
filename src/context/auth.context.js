import Router from "next/router";
import React, { useState, useEffect } from "react";
import { verify } from "../services/auth.service";

const AuthContext = React.createContext();

function AuthProviderWrapper({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null)

  useEffect(() => verifyStoredToken(), [])

  const verifyStoredToken = () => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      verify(storedToken)
        .then((response) => {
          const user = response.data;
          setUser(user);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setUser(null);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }

  const logInUser = token => {
    localStorage.setItem('token', token)
    verifyStoredToken()
  }

  const logOutUser = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false);
    setUser(null);
    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, logInUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext }