import { ReactNode } from "react"
import { iFormLoginValues } from "../../components/Form/LoginForm/@types"

export interface iUserProvider {
  children: ReactNode;
}

export interface iUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: iUser | null;
  userLogin: (formData: iFormLoginValues) => Promise<void>;
};

export interface iUser {
  accessToken: string;
  user: {
    email: string;
    name: string;
    cpf: string;
    celular: string;
    id: number;
  };
}
