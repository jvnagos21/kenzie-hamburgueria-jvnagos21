import { iLoginForm } from "../../components/forms/Login/@types";
import { iSignupForm } from "../../components/forms/Signup/@types";
import { UseFormReset } from "react-hook-form/dist/types";

export interface iUserProps {
  children: React.ReactNode;
}

export interface iUserContext {
  user: iUser | null;
  signupRequest: (
    data: iSignupForm,
    formReset: UseFormReset<iSignupForm>
  ) => Promise<void>;
  loginRequest: (
    data: iLoginForm,
    formReset: UseFormReset<iLoginForm>
  ) => Promise<void>;
  handleLogout: () => void;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
}
