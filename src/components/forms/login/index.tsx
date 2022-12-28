import { useContext } from "react";
import { UserContext } from "../../../Providers/userContext";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLoginContainer } from "./styles";
import { Button, SecondaryLink } from "../../../styles/button";
import { loginSchema } from "./loginSchema";
import { iLoginForm } from "./@types";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginForm>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const { loginRequest } = useContext(UserContext);

  const sendApi = (data: iLoginForm) => loginRequest(data, reset);
  return (
    <FormLoginContainer>
      <div>
        <h4>Login</h4>
      </div>
      <form noValidate onSubmit={handleSubmit(sendApi)}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register("email")}
          helperText={errors.email?.message}
          error={!!errors.email}
        />
        <TextField
          type="password"
          label="Senha"
          variant="outlined"
          fullWidth
          {...register("password")}
          helperText={errors.password?.message}
          error={!!errors.password}
        />
        <Button type="submit" variant="defaultGreen">
          Logar
        </Button>
      </form>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <SecondaryLink to="/signup">Cadastrar</SecondaryLink>
    </FormLoginContainer>
  );
};
