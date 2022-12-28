import { createContext, useState } from "react";
import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../services/requests";
import { iLoginForm } from "../../components/forms/Login/@types";
import { iSignupForm } from "../../components/forms/Signup/@types";
import { iUserContext, iUser, iUserProps } from "./@types";
export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();
  const loginRequest = async (
    formdata: iLoginForm,
    formReset: UseFormReset<iLoginForm>
  ) => {
    try {
      const { data } = await Api.post("/login", formdata);
      toast.success("Login efetuado!");
      localStorage.clear();
      console.log(data);
      setUser(data.user);
      localStorage.setItem("userToken", data.accessToken);
      formReset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Ops! algo deu errado.");
    }
  };

  const signupRequest = async (
    data: iSignupForm,
    formReset: UseFormReset<iSignupForm>
  ) => {
    try {
      await Api.post("/users", data);

      toast.success("Conta criada com sucesso!");
      formReset();
      navigate("/");
    } catch (err) {
      toast.error("Ops! Algo deu errado.");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loginRequest,
        signupRequest,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
