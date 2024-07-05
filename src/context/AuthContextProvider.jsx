import axios from "axios";
import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/const";
const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  //! register
  const handleRegister = async () => {
    try {
      await axios.post(`${API}/account/register/`);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    handleRegister,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
