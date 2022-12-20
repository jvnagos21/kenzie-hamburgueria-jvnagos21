import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Branding } from "../../components/branding";
import { FormSignup } from "../../components/forms/signup";
import { SignupContainer } from "./styles";

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !!localStorage.userToken && navigate("/main_page");
  }, []);
  return (
    <SignupContainer>
      <Branding />
      <FormSignup />
    </SignupContainer>
  );
};

export default Signup;
