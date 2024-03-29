import React from "react";
import { LoginContainer } from "./styles";
import { FormLogin } from "../../components/forms/Login";
import { Branding } from "../../components/Branding";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !!localStorage.userToken && navigate("/main_page");
  }, []);
  return (
    <LoginContainer>
      <FormLogin />
      <Branding />
    </LoginContainer>
  );
};

export default Login;
