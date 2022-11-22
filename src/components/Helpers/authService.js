import axios from "axios"
import { urls } from "../Config/env-config"


export const authHeader = () => {
    return {
    headers: {
        "Authorization": "Basic "+ sessionStorage.getItem("token")
    },
    };
};


export const login = async (username, password) => {

    const tokenKey = getAuthToken(username, password)
    const config = {
        headers: {
          Authorization: "Basic " + tokenKey,
        },
      };

    const response = await axios.post(`${urls.service}/login`,{}, config);
    const userDetails = response.data
    if(userDetails){
        sessionStorage.setItem("token", tokenKey)
        sessionStorage.setItem("username", userDetails.username)
    }
    return userDetails;
}

export const isLoggedIn = () => {
    return sessionStorage.getItem("token") !== null;
  };

  export const logout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
  };

function getAuthToken(username, password){
    return window.btoa(username+":"+password)
}