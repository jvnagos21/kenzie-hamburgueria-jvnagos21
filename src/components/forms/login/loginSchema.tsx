import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Campo Obrigatorio!").email("email invalido :("),
  password: yup.string().required("campo obrigatorio!"),
});
