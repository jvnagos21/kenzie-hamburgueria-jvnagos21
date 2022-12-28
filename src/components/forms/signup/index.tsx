import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Providers/userContext";
import { Button, DefaultLink } from "../../../styles/button";
import { signupSchema } from "./signupSchema";
import { FormSignupContainer } from "./styles";
import { iSignupForm } from "./@types";

export const FormSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iSignupForm>({
    mode: "onChange",
    resolver: yupResolver(signupSchema),
  });

  const { signupRequest } = useContext(UserContext);

  const sendApi = (data: iSignupForm) => {
    delete data.confirmPwd;
    signupRequest(data, reset);
  };
  return (
    <FormSignupContainer>
      <div>
        <h4>Cadastro</h4>
        <DefaultLink to="/">Retornar para o login</DefaultLink>
      </div>
      <form noValidate onSubmit={handleSubmit(sendApi)}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          {...register("name")}
          helperText={errors.name?.message}
          error={!!errors.name}
        />
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
        <TextField
          type="password"
          label="Confirmar Senha"
          variant="outlined"
          fullWidth
          {...register("confirmPwd")}
          helperText={errors.confirmPwd?.message}
          error={!!errors.confirmPwd}
        />
        <Button type="submit" variant="defaultGrey">
          Cadastrar
        </Button>
      </form>
    </FormSignupContainer>
  );
};
